import { Button, ButtonGroup } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { useState } from "react";
import ImportExportModal from "./ImportExportModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash } from "@fortawesome/free-solid-svg-icons";
import { subscribeUser } from "@/utils";
import { toast } from "react-toastify";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isExport, setIsExport] = useState(null);
  // const [subscribed, setSubscribed] = useState(null);

  return (
    <Navbar isBordered maxWidth="2xl" disableAnimation>
      <ImportExportModal onOpenChange={onOpenChange} isOpen={isOpen} isExport={isExport} />
      <NavbarContent>
        <NavbarBrand>
          <img src="./logo.png" width={40} />
          <p className="font-bold text-inherit ml-2">Orderly Docs</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center"></NavbarContent>
      <NavbarContent justify="end">
        {/* <Button
          isIconOnly
          className="border-1"
          variant="bordered"
          onClick={() => {
            Notification.requestPermission().then(async (per) => {
              try {
                if (per === "granted") {
                  await subscribeUser();
                  setSubscribed(true);
                } else {
                  toast.error("Please go to web setting and allow notification.");
                }
              } catch (e) {
                console.log(e);
              }
            });
          }}
        >
          <FontAwesomeIcon icon={subscribed ? faBell : faBellSlash} />
        </Button> */}
        <ButtonGroup>
          <Button
            className="border-1"
            variant="bordered"
            onClick={() => {
              setIsExport(true);
              onOpen();
            }}
          >
            Export
          </Button>
          <Button
            className="border-1"
            variant="bordered"
            onClick={() => {
              setIsExport(false);
              onOpen();
            }}
          >
            Import
          </Button>
        </ButtonGroup>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
