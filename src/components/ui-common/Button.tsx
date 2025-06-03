"use client";
import { cn } from "@/lib/utils";
import React from "react";

type IButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
};

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  const baseStyles = "py-2 px-4 rounded font-medium transition focus:outline-none";
  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
