import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as EyeShowed } from "../../assets/eye.svg";
import { ReactComponent as EyeClosed } from "../../assets/closed.svg";

export type IconType = 
  | "Logout" 
  | "EyeShowed"
  | "EyeClosed";

export const iconTypes = new Map([
  ["Logout", <Logout key={uuidv4()}/>],
  ["EyeShowed", <EyeShowed key={uuidv4()}/>],
  ["EyeClosed", <EyeClosed key={uuidv4()}/>],
]);