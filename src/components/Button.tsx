import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "gradient";
};

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-2 rounded-xl font-semibold transition-colors duration-200",
        {
          "bg-[#0C0A1E] text-white hover:bg-[#1c1a2f]": variant === "primary",
          "bg-white text-yellow-700 border border-yellow-700 hover:bg-yellow-50": variant === "secondary",
          "bg-gradient-to-r from-black to-[#1e3a8a] text-white hover:opacity-90": variant === "gradient",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
