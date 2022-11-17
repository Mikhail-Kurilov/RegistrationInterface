import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "../../ui-kit";
import { ICommonTypes, ICommonProps } from "../../SampleInterface";
import "./Authorization.scss";

const schema = yup.object().shape({
  nickName: yup
    .string()
    .matches(/^([^0-9]*)$/, "The nickname must not contain numbers"),
  email: yup.string().email("Invalid email"),
  password: yup
    .string()
    .required("Write your password")
    .min(8, "Must be at least 8 characters"),
});

export const Authorization: React.FC<ICommonProps> = ({setIsLoggedIn}) => {
  const [isFocused, setIsFocused] = useState({
    nickName: false,
    email: false,
    password: false,
  });

  const [formStatus, setFormStatus] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommonTypes>({ resolver: yupResolver(schema) });
  const watchAllFields = watch();

  const onLogin = (data: ICommonTypes) => {
    if (
      (data.nickName === localStorage.getItem("nickName")  ||
      data.email === localStorage.getItem("email")) &&
        data.password === localStorage.getItem("password")
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      return;
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if ((watchAllFields as any)[event.target.name] !== "") {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };

  const handleFormChange = () => {
    setValue("nickName", "");
    setValue("email", "");
    setFormStatus((prevState) => !prevState);
  };

  return (
    <section className="FormPage">
      <div className="FormPageRedirect" onClick={() => navigate("/")}></div>
      <div className="FormPageContent">
        <h2 className="FormPageContentTitle">Authorization</h2>
        <div className="Toggle">
          <input
            type="checkbox"
            id="toggle-button"
            className="Toggle-button"
            onClick={handleFormChange}
          />
          <label htmlFor="toggle-button" className="Toggle-text">
            Nickname / Email
          </label>
        </div>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="FormPage-FormGroup">
            {formStatus ? (
              <Form
                label="Nickname"
                name="nickName"
                type="text"
                register={register}
                error={errors.nickName && errors.nickName.message}
                isFocused={isFocused.nickName}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            ) : (
              <Form
                label="Email"
                name="email"
                type="text"
                register={register}
                error={errors.email && errors.email.message}
                isFocused={isFocused.email}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            )}
            <Form
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password && errors.password.message}
              isFocused={isFocused.password}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
          <Button className="FormPage-Button" type="submit">
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};
