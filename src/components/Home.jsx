import { useEffect, useMemo, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import CreateTopicField from "./CreateTopicField";
import dexieDB from "@/configs/indexedDB";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheckCircle, faEdit, faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { useDisclosure } from "@nextui-org/modal";
import EditTopicModal from "./EditTopicModal";
import Review from "./Review";
import { rmBrackets, splitBrackets } from "@/utils";
import { Chip } from "@nextui-org/chip";

const Home = () => {
  const [topics, setTopics] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [reviewMode, setReviewMode] = useState(false);
  const [currentTags, setCurrentTags] = useState([]);

  const filteredTopics = useMemo(
    () => (topics && currentTags.length > 0 ? topics.filter(({ topic }) => currentTags.includes(splitBrackets(topic)[1])) : topics),
    [topics, currentTags]
  );

  const tags = useMemo(
    () =>
      topics &&
      topics.reduce((acc, curr) => {
        // eslint-disable-next-line no-unused-vars
        const [outsideBrackets, insideBrackets] = splitBrackets(curr.topic);
        if (insideBrackets && !acc.includes(insideBrackets)) acc.push(insideBrackets);
        return acc;
      }, []),
    [topics]
  );

  const deleteTopic = (id) => {
    setTopics((prev) => prev.filter((item) => item.id !== id));
    dexieDB.topics.delete(id);
  };

  const updateTopic = (newData) => {
    setSelectedTopic(null);
    setTopics((prev) => prev.map((item) => (item.id === newData.id ? newData : item)));
    dexieDB.topics.update(newData.id, newData);
  };

  useEffect(() => {
    (async () => {
      const result = await dexieDB.topics.toArray();
      setTopics(result);
    })();
  }, []);

  return (
    <main className="w-full container mx-auto max-w-[1536px] p-6">
      {reviewMode ? (
        <Review topic={selectedTopic} onClose={() => setReviewMode(false)} />
      ) : (
        <div className="col-span-9 flex flex-col w-full items-center justify-start">
          <EditTopicModal selectedTopic={selectedTopic} isOpen={isOpen} onOpenChange={onOpenChange} onSave={updateTopic} />
          <CreateTopicField
            disabled={!topics}
            onAdd={(data) => {
              dexieDB.topics.add(data).then((id) => setTopics((prev) => [...prev, { ...data, id }]));
            }}
          />
          <div className="flex gap-1 sm:gap-2 flex-wrap">
            {tags &&
              tags.map((tag) => {
                const isActive = currentTags.includes(tag);
                return (
                  <Chip
                    className="cursor-pointer"
                    variant="faded"
                    startContent={isActive && <FontAwesomeIcon icon={faCheckCircle} className="text-white/60" />}
                    key={tag}
                    onClick={() => (isActive ? setCurrentTags((prev) => prev.filter((t) => t !== tag)) : setCurrentTags((prev) => prev.concat(tag)))}
                  >
                    {tag}
                  </Chip>
                );
              })}
          </div>
          {topics && Boolean(topics.length) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-4 mt-4">
              {[...filteredTopics].reverse().map(({ topic, docs, id }) => (
                <Card key={`${id}`} className="cursor-pointer relative">
                  <Dropdown placement="left">
                    <DropdownTrigger>
                      <Button size="sm" isIconOnly className="absolute border-0 right-2 top-2 z-10" variant="bordered">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        textValue="Edit"
                        endContent={<FontAwesomeIcon icon={faEdit} />}
                        onClick={() => {
                          onOpen();
                          setSelectedTopic({ topic, docs, id });
                        }}
                      >
                        Edit
                      </DropdownItem>
                      <DropdownItem textValue="Delete" endContent={<FontAwesomeIcon icon={faTrash} />} onClick={() => deleteTopic(id)}>
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <CardBody
                    onClick={() => {
                      setSelectedTopic({ topic, docs, id });
                      setReviewMode(true);
                    }}
                  >
                    <p className="truncate max-width-[100%-20px] mt-1 text-lg">{rmBrackets(topic)}</p>
                    <Divider className="mt-1" />
                    <p className="truncate text-foreground-500">{docs.join(", ")}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <div className="w-[200px] h-[400px] flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBan} fontSize={20} className="text-foreground-400" /> <span className="text-[20px] text-foreground-400">No Topic</span>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Home;
