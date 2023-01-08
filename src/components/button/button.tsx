import React from "react";

import cx from "classnames";
import cls from "./button.module.scss";

interface ButtonProps {
  title: string;
  type: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => (
  <div onClick={onClick} className={cx(cls.wrapper, cls[`${type}`])}>
    {title}
  </div>
);

export default Button;
