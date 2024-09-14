import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Home from "home/Home";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import useSmoothScroll from "hooks/useSmoothScroll";
import Login from "login/Login";

const App = () => {
  // useSmoothScroll();
  const [isLogged, setIsLogged] = useState(false);
  if (!isLogged) {
    document.getElementById("root").classList.add("main--sm");
  }
  return (
    <>
      {isLogged && (
        <>
          <Header setIsLogged={setIsLogged} />
          <Home />
          <Newsletter />
          <Footer />
        </>
      )}
      {!isLogged && <Login />}
    </>
  );
};

export default App;
