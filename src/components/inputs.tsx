import cls from "classnames";
import { InputHTMLAttributes } from "react";

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

const BASE_INPUT_STYLES = cls(
  "px-4 py-2 rounded border shadow-md",
);
export const Input = (props: ButtonProps) => {
  return <input {...props} className={cls(BASE_INPUT_STYLES, props.className)} />;
};
