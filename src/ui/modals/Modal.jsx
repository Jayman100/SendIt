import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ open, openName, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const isOpen = name === openName;
  const { ref } = useClickOutside(close);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop text-white">
      <div className="modal w-3/6 rounded-xl px-[20px] py-[60px]" ref={ref}>
        <button className="absolute top-2 right-8" onClick={close}>
          x
        </button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
