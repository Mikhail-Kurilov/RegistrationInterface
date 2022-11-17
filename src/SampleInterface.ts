import { Dispatch, SetStateAction } from "react";

export interface IRegistrationTypes {
  nickName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IRegistrationProps {
  setNickName: Dispatch<SetStateAction<string | null>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}