import cls from "classnames";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BASE_BTN_STYLES = cls(
  "px-4 py-2 rounded border shadow-md",
  "text-center uppercase hover:underline"
);
export const Button = (props: ButtonProps) => {
  return <button {...props} className={cls(BASE_BTN_STYLES, props.className)} />;
};

export const ConfirmButton = (props: ButtonProps) => {
  return <Button {...props} className={cls("bg-green-300", props.className)} />;
};

export const CancelButton = (props: ButtonProps) => {
  return <Button {...props} className={cls("bg-red-300", props.className)} />;
};
