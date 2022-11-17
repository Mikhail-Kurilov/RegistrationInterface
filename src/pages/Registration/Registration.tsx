import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "../../ui-kit"
import { IRegistrationTypes, IRegistrationProps } from "../../SampleInterface";
import "./Registration.scss";

const schema = yup.object().shape({
  nickName: yup
    .string()
    .matches(/^([^0-9]*)$/, "The nickname must not contain numbers")
    .required("Write your Nickname"),
  email: yup
    .string()
    .required("Write your Email")
    .email("Invalid email"),
  password: yup
    .string()
    .required("Write your password")
    .min(8, "Must be at least 8 characters"),
  passwordConfirm: yup
    .string()
    .required("Confirm your password")
    .min(8, "Must be at least 8 characters"),
});

export const Registration: React.FC<IRegistrationProps> = ({
  setIsLoggedIn,
  setNickName,
}) => {

  const [isFocused, setIsFocused] = useState({
    nickName: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationTypes>({ resolver: yupResolver(schema) });
  const watchAllFields = watch();

  const onSubmit = (data: IRegistrationTypes) => { 
    if (data.password === data.passwordConfirm) {
      setIsPasswordMatch(true);
       localStorage.setItem("isLoggedIn", "true");
       localStorage.setItem("nickName", data.nickName);
       localStorage.setItem("email", data.email);
       localStorage.setItem("password", data.password);
       setIsLoggedIn(true);
       setNickName(data.nickName);
       navigate("/");
    } else {
      setIsPasswordMatch(false);
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

  const errorPasswordMessage = (message: string | undefined) => {
    if (message) {
      return message;
    }
    if (!isPasswordMatch) {
      return "Passwords mismatch";
    }
  };

  return (
    <section className="FormPage">
      <div className="FormPageRedirect" onClick={() => navigate("/")}></div>
      <div className="FormPageContent">
        <h2 className="FormPageContentTitle">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FormPage-FormGroup">
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
            <Form 
              label="Password" 
              name="password" 
              type="password" 
              register={register}
              error={errorPasswordMessage(errors.password?.message)}
              isFocused={isFocused.password}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
             />
            <Form 
              label="Confirm Password" 
              name="passwordConfirm" 
              type="password"
              register={register}
              error={errorPasswordMessage(errors.passwordConfirm?.message)}
              isFocused={isFocused.passwordConfirm}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
             />
          </div>
          <Button className="FormPage-Button" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};


