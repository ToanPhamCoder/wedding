/* eslint-disable react/prop-types */

import { useState } from "react";
import AddTopicForm from "./AddTopicForm";

const CreateTopicField = ({ disabled, onAdd }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border rounded-lg w-80 border-divider flex items-center px-4 py-2 mb-4 shadow-lg cursor-text"
      onClick={() => {
        if (disabled) return;
        setOpen(true);
      }}
    >
      {open ? <AddTopicForm onAdd={onAdd} onClose={() => setOpen(false)} /> : <span className="font-semibold text-foreground-400">Create new topic...</span>}
    </div>
  );
};

export default CreateTopicField;
