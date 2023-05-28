import * as classNames from "classnames";
import * as React from "react";
import "./modal.css";
import * as ReactModal from "react-modal";
import { RiCloseCircleLine } from "react-icons/ri";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isOutsideClosable?: boolean;
  isCloseMarkVisible?: boolean;
  label?: string;
  children?: React.ReactNode;
  className?: string;
};

const Modal = ({
  isOpen,
  setIsOpen,
  isOutsideClosable = true,
  isCloseMarkVisible = true,
  label,
  children,
  className,
}: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={label}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={isOutsideClosable}
      className={classNames("modal", className)}
      ariaHideApp={false}
      // style={customStyles}
    >
      {isCloseMarkVisible && (
        <div className="modal_close">
          <RiCloseCircleLine
            className="modal_close--icon"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {children}
    </ReactModal>
  );
};

export default Modal;
