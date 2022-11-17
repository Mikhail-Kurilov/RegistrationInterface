import React, { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import { Input, Icon } from "../index";

import "./Form.scss";

export type FormType = "text" | "password" 

export interface IFormProps<T extends FieldValues> {
  className?: string;
  error?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  label?: string;
  type: FormType;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Form = <T extends FieldValues,>({
  className, 
  error, 
  name, 
  register,
  label,  
  type, 
  isFocused, 
  isRequired, 
  onBlur, 
  onFocus, 
  }: IFormProps<T>, ): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setShowPassword(prevState => !prevState);
  }

  const handleType = (type: string) => {
    if (type === "text") {
      return "text";
    }
    if (type === "password") {
      type = showPassword ? "text" : "password";
      return type;
    }
  }

  const renderInput = () => {
    return (
      <Input
        className={classNames({
          Input__active: isFocused,
          Input__error: error,
        })}
        {...(register ? register(name) : register)}
        autoComplete="on"
        error={error}
        name={name}
        type={handleType(type)}
        onBlur={onBlur}
        onFocus={onFocus}
      
      />
    )
  }

  return (
  
  <div className={classNames("Form", className, {
    Form__active: isFocused,
  })}>
    <label className="Form-Label" htmlFor={name}>
      {label}
      {isRequired && <span className="Form-LabelRequired"> *</span>}
    </label>
    {type === "text" && (
      <>
        {renderInput()}
        {error && <div className="Form-ErrorMessage">{error}</div>}
      </>
    )}
    {type === "password" && (
      <>
        {renderInput()}
        <div className="Form-Visibility" onClick={handlePasswordShow}>
          {showPassword ? (
            <Icon type="EyeShowed" />
          ) : (
            <Icon type="EyeClosed" />
          )}
        </div>
        {error && <div className="Form-ErrorMessage">{error}</div>}
      </>
    )}
   
  </div>
  )
};