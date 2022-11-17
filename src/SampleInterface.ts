import { Dispatch, SetStateAction } from "react";

export interface ICommonTypes {
  nickName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ICommonProps {
  setNickName: Dispatch<SetStateAction<string | null>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}