/* eslint-disable react/prop-types */
import dexieDB from "@/configs/indexedDB";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { useEffect, useState } from "react";

const columns = [
  { key: "topic", label: "Topic" },
  { key: "docs", label: "Docs" },
];

const ImportExportModal = ({ isExport, isOpen, onOpenChange }) => {
  const [topics, setTopics] = useState(null);
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const Title = isExport ? "Export" : "Import";

  const handleSubmit = () => {
    const result = selectedKeys === "all" ? topics : topics.filter(({ id }) => selectedKeys.has(id + ""));
    if (isExport) {
      const jsonStr = JSON.stringify(result, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = "export.json";
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    // eslint-disable-next-line no-unused-vars
    result.forEach(({ id, ...item }) => dexieDB.topics.add(item));
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      //reset
      if (!isOpen) {
        setTopics(null);
        setSelectedKeys(new Set([]));
        return;
      }
      //start
      if (isExport) {
        const result = await dexieDB.topics.toArray();
        setTopics(result);
      }
    })();
  }, [isExport, isOpen]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{Title}</ModalHeader>
            <ModalBody className="pb-6">
              {topics && isExport && (
                <Table
                  aria-label="Controlled table example with dynamic content"
                  selectionMode="multiple"
                  classNames={{ wrapper: "shadow-none p-0 max-h-[70dvh]" }}
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                  isHeaderSticky
                >
                  <TableHeader columns={columns}>
                    {(column) => (
                      <TableColumn key={column.key} className={column.key === "topic" && "sm:min-w-[150px]"}>
                        {column.label}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items={topics}>
                    {(topic) => (
                      <TableRow key={topic.id}>
                        {(columnKey) => <TableCell>{columnKey === "docs" ? topic[columnKey].join(", ") : topic[columnKey]}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}

              {!isExport && (
                <Input
                  type="file"
                  accept=".json"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = function (e) {
                        try {
                          const jsonData = JSON.parse(e.target.result);
                          setTopics(jsonData);
                        } catch (error) {
                          console.error("Invalid JSON", error);
                        }
                      };
                      reader.readAsText(file);
                    }
                  }}
                />
              )}
              {!isExport && topics && (
                <Table
                  aria-label="Controlled table example with dynamic content"
                  selectionMode="multiple"
                  classNames={{ wrapper: "shadow-none p-0 max-h-[70dvh]" }}
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <TableHeader columns={columns}>
                    {(column) => (
                      <TableColumn key={column.key} className={column.key === "topic" && "sm:min-w-[150px]"}>
                        {column.label}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items={topics}>
                    {(topic) => (
                      <TableRow key={topic.id}>
                        {(columnKey) => <TableCell>{columnKey === "docs" ? topic[columnKey].join(", ") : topic[columnKey]}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="link" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" onClick={handleSubmit} disabled={selectedKeys.size === 0}>
                {Title}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ImportExportModal;
