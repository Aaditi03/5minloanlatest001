import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Common.css";
import "./css/Mycss.css";
import "./css/ContentPage.css";
import Router from "./Router";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
