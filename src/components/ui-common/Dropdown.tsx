"use client";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

type DropdownProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  maxWidth?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  open,
  onClose,
  title,
  children,
  showCloseButton = true,
  maxWidth = "max-w-sm",
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, onClose]);

  if (!open) return null;

  const dialogTitleId = "dropdown-title";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? dialogTitleId : undefined}
      className={`bg-white rounded-lg shadow-lg p-4 absolute z-50 ${maxWidth}`}
      style={{ top: "60px", right: "10px" }} 
    >
      {showCloseButton && (
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg !p-1"
          variant="secondary"
          ariaLabel="Close dropdown"
        >
          ✕
        </Button>
      )}
      {title && (
        <h2
          id={dialogTitleId}
          className="text-lg font-semibold mb-4 text-gray-900"
        >
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Dropdown;
