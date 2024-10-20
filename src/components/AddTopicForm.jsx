/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";

const initialData = { topic: "", docs: [] };

function AddTopicForm({ defaultValue, onAdd, onClose, actionButtonsSize = "sm", addBtnText = "Add" }) {
  const docFieldRef = useRef();
  const addBtnRef = useRef();

  const [doc, setDoc] = useState("");
  const [data, setData] = useState(initialData);
  const [adding, setAdding] = useState(false);

  const changeData = (field, value) => setData((prev) => ({ ...prev, [field]: value }));

  useEffect(() => {
    if (defaultValue) setData(defaultValue);
  }, [defaultValue]);

  return (
    <div className="w-full">
      <Input
        variant="bordered"
        classNames={{ inputWrapper: "border-0" }}
        value={data.topic}
        onChange={(e) => changeData("topic", e.target.value)}
        placeholder="Topic"
        autoFocus
      />
      <Divider />
      <Input
        ref={docFieldRef}
        variant="bordered"
        className="mt-1"
        placeholder="Docs"
        value={doc}
        classNames={{ inputWrapper: "border-0" }}
        onChange={(e) => setDoc(e.target.value)}
        onKeyDown={(e) => e.code === "Enter" && addBtnRef.current.click()}
        endContent={
          <Button
            size="sm"
            disabled={!doc}
            isIconOnly
            ref={addBtnRef}
            onClick={() => {
              setDoc("");
              changeData("docs", data.docs.concat(doc));
              docFieldRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faAdd} />
          </Button>
        }
      />
      <Listbox aria-label="list-docs">
        {data.docs.map((doc, index) => (
          <ListboxItem
            key={`${doc}-${index}`}
            endContent={
              <Button
                size="sm"
                isIconOnly
                variant="bordered"
                className="border-0"
                onClick={() => {
                  changeData(
                    "docs",
                    data.docs.filter((item, idx) => idx !== index)
                  );
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            }
          >
            {doc}
          </ListboxItem>
        ))}
      </Listbox>
      <div className="flex gap-1 mt-2 w-full justify-end">
        {onClose && (
          <Button size={actionButtonsSize} variant="link" onClick={onClose}>
            Close
          </Button>
        )}
        <Button
          size={actionButtonsSize}
          disabled={!data.docs.length || !data.topic}
          isLoading={adding}
          onClick={async () => {
            setDoc("");
            setAdding(true);
            setData(initialData);
            await onAdd({ ...data });
            onClose && onClose();
            setAdding(false);
          }}
        >
          {addBtnText}
        </Button>
      </div>
    </div>
  );
}

export default AddTopicForm;
