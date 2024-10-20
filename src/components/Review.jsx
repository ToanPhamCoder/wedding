/* eslint-disable react/prop-types */
import { shuffleArray } from "@/utils";
import { faAngleLeft, faArrowsRotate, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Review({ topic, onClose }) {
  const [list, setList] = useState(null);
  const [checking, setChecking] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newList = reorder(list, result.source.index, result.destination.index);
    setList(newList);
  };

  useEffect(() => {
    const shuffled = shuffleArray(topic.docs);
    setList(shuffled);
  }, [topic]);

  return (
    <div className="flex flex-col w-full items-center justify-start mt-2 relative">
      <Button className="absolute left-0 -top-7" startContent={<FontAwesomeIcon icon={faAngleLeft} />} variant="link" onClick={onClose}>
        Back
      </Button>
      <h3 className="text-2xl mt-4 font-bold">{topic.topic}</h3>
      {list && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div className="flex flex-col gap-4 mt-8" {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((item, index) => (
                  <Draggable isDragDisabled={checking} key={`${item}-${index}`} draggableId={`${item}-${index}`} index={index}>
                    {(provided, { isDragging }) => (
                      <div>
                        <div
                          className={`min-w-[250px] border p-2 rounded-lg px-4 border-divider text-center text-lg border-t-[10px] pb-4 ${
                            isDragging && "border-white/70 bg-pink-950/30"
                          } ${checking && (topic.docs[index] === item ? "bg-emerald-700" : "bg-rose-700")}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item}
                        </div>
                        {checking && topic.docs[index] !== item && <p className="text-center text-sm"> {topic.docs[index]}</p>}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      <div className="flex gap-2">
        <Button className="mt-8" variant="bordered" endContent={<FontAwesomeIcon icon={faListCheck} />} onClick={() => setChecking(true)}>
          Check
        </Button>
        <Button
          disabled={!checking}
          className="mt-8"
          variant="bordered"
          endContent={<FontAwesomeIcon icon={faArrowsRotate} />}
          onClick={() => {
            setChecking(false);
            const shuffled = shuffleArray(topic.docs);
            setList(shuffled);
          }}
        >
          Redo
        </Button>
      </div>
    </div>
  );
}

export default Review;
