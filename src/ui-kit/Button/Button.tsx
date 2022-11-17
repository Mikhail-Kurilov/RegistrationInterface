import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from "react";
import classNames from "classnames";
import "./Button.scss";


export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const ButtonComponent: React.FC<IButtonProps> = ({ className, isDisabled, onClick, ...rest }) => {
  return (
    <button 
      className={classNames("Button", className, {
      "Button__disabled": isDisabled
    })}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}             
    >
    </button>
  )
}

export const Button = memo(ButtonComponent)