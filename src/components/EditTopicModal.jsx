/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import AddTopicForm from "./AddTopicForm";

const EditTopicModal = ({ selectedTopic, isOpen, onOpenChange, onSave }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Topic</ModalHeader>
            <ModalBody className="pb-6">
              <AddTopicForm defaultValue={selectedTopic} actionButtonsSize="md" addBtnText="Save" onClose={onClose} onAdd={onSave} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditTopicModal;
