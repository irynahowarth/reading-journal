import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./index.scss";

export default function DialogComponent({ addBook, uid }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  React.useEffect(() => {
    setFormData({});
  }, []);

  const inputValueHandle = (value, name) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>Add book</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add new book</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Add all needed information to new book. Click save when you are
            done.
          </Dialog.Description>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addBook({ ...formData, uid: uid });
              setFormData({});
              wait().then(() => setOpen(false));
            }}
          >
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="title">
                {" "}
                Title
              </label>
              <input
                className="Input"
                id="title"
                onChange={(e) => inputValueHandle(e.target.value, "title")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="author">
                Author
              </label>
              <input
                className="Input"
                id="author"
                onChange={(e) => inputValueHandle(e.target.value, "author")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="cover">
                Cover
              </label>
              <input
                className="Input"
                id="cover"
                onChange={(e) => inputValueHandle(e.target.value, "cover")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="size">
                Size
              </label>
              <input
                className="Input"
                id="size"
                onChange={(e) => inputValueHandle(e.target.value, "size")}
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button
                className="Button green"
                type="submit"
                onClick={() => setOpen(true)}
              >
                Save changes
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
