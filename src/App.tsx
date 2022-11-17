import { useState } from "react";
import { Header } from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [nickName, setNickName] = useState<string | null>(localStorage.getItem('nickName'));

  return (
  <div className="wrapper">
    <Header
      nickName={nickName}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
     />
    <Routes>
      {routes.map(({path, Component}) => 
            <Route 
              key={path} 
              path={path} 
              element={
                <Component 
                  setIsLoggedIn ={setIsLoggedIn} 
                  setNickName={setNickName}
                />
              }
            />
          )}
    </Routes>
  </div>
  )
};



