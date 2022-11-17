import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui-kit";
import "./Header.scss";

interface IHeaderProps {
  nickName: string | null;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<IHeaderProps> = ({
  isLoggedIn,
  setIsLoggedIn,
  nickName,
}) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const authorization = () => {
    if (isLoggedIn) {
      return (
        <>
          <span className="Greetings">
            Welcome, &nbsp;<strong>{nickName}</strong>!
          </span>
          <Button className="ExitButton" onClick={handleLogOut}>
            Logout
          </Button>
        </>
      );
    }
    return (
      <>
        <span className="Greetings">Welcome!</span>
        <div className="ButtonContainer">
          <Button
            className="ButtonRegistration"
            onClick={() => navigate("/registration")}
          >
            Registration
          </Button>
          <Button 
            className="EnterButton" 
            onClick={() => navigate("/login")}
          >
            Enter
          </Button>
        </div>
      </>
    );
  };

  return (
    <header className="Header">
      <div className="Header-Wrapper">
        <div className="HeaderRegistration">{authorization()}</div>
      </div>
    </header>
  );
};
