import "./App.css";
import { Button } from "./components/button";
import { useEffect, useRef, useState } from "react";

import { useGetTheme } from "./hooks/useGetTheme";

function App() {
  const [displayNumber, setDisplayNumber] = useState<string>("0");
  const firstNumber = useRef<string>("");
  const secondNumber = useRef<string>("");
  const operation = useRef<string>("");
  const theme = useGetTheme();

  const toggleTheme = (themeChange: string) => {
    const actualTheme = document.getElementById(document.body.classList[0]);
    const nextTheme = document.getElementById(themeChange);
    document.body.classList.replace(document.body.classList[0], themeChange);

    actualTheme?.classList.add("opacity");
    nextTheme?.classList.remove("opacity");
    localStorage.setItem("theme", themeChange);
  };

  useEffect(() => {
    if (theme) {
      const actualTheme = document.getElementById(theme || "theme1");
      const themes = document.getElementById("theme__selector");

      if (!themes) return;

      for (let input of themes.children) {
        input.classList.add("opacity");
      }

      actualTheme?.classList.remove("opacity");

      document.body.classList.add(theme);
    } else {
      document.body.classList.add("theme1");
    }
  }, []);

  const buttonClick = (value: string) => {
    if (value == "+") {
      setDisplayNumber("+");
      operation.current = "+";
    } else if (value == "-") {
      setDisplayNumber("-");
      operation.current = "-";
    } else if (value == "x") {
      setDisplayNumber("*");
      operation.current = "*";
    } else if (value == "/") {
      setDisplayNumber("/");
      operation.current = "/";
    } else if (value == "del") {
      if (operation.current == "") {
        firstNumber.current =
          firstNumber.current.length > 1
            ? firstNumber.current.slice(0, firstNumber.current.length - 1)
            : "";
      } else {
        secondNumber.current =
          secondNumber.current.length > 1
            ? secondNumber.current.slice(0, secondNumber.current.length - 1)
            : "";
      }

      setDisplayNumber(
        displayNumber.length > 1
          ? displayNumber.slice(0, displayNumber.length - 1)
          : "0"
      );
    } else if (value === "reset") {
      setDisplayNumber("0");
      firstNumber.current = "";
      secondNumber.current = "";
      operation.current = "";
    } else if (value === "=") {
      const first = parseFloat(firstNumber.current);
      const second = parseFloat(secondNumber.current);
      let result: number = 0;

      if (operation.current === "-") {
        result = first - second;
      } else if (operation.current === "+") {
        result = first + second;
      } else if (operation.current === "*") {
        result = first * second;
      } else if (operation.current === "/") {
        result = first / second;
      }

      setDisplayNumber(result.toString());
    } else {
      if (operation.current == "") {
        firstNumber.current =
          firstNumber.current == "" ? value : firstNumber.current + value;
        setDisplayNumber(displayNumber == "0" ? value : displayNumber + value);
      } else {
        secondNumber.current =
          secondNumber.current == "" ? value : secondNumber.current + value;
        setDisplayNumber(
          displayNumber == "/" ||
            displayNumber == "*" ||
            displayNumber == "+" ||
            displayNumber == "-"
            ? value
            : displayNumber + value
        );
      }
    }
  };

  return (
    <div className="body__container">
      <header>
        <nav className="calc__header">
          <h1>calc</h1>
          <div className="theme__selector-container">
            <p>THEME</p>
            <div className="theme__selector" id="theme__selector">
              <input
                className="theme__one"
                type="radio"
                name="toggle"
                id="theme1"
                onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  toggleTheme(e.currentTarget.id);
                }}
              />
              <input
                className="theme__second opacity"
                type="radio"
                name="toggle"
                id="theme2"
                onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  toggleTheme(e.currentTarget.id);
                }}
              />
              <input
                className="theme__third opacity"
                type="radio"
                name="toggle"
                id="theme3"
                onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  toggleTheme(e.currentTarget.id);
                }}
              />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="calc__result-container">
          <p className="calc__result">{displayNumber}</p>
        </div>
        <div className="calc__symbols">
          <div className="calc__symbols-container" id="calculator">
            <Button buttonClick={buttonClick} text="7" />
            <Button buttonClick={buttonClick} text="8" />
            <Button buttonClick={buttonClick} text="9" />
            <Button buttonClick={buttonClick} text="DEL" />
            <Button buttonClick={buttonClick} text="4" />
            <Button buttonClick={buttonClick} text="5" />
            <Button buttonClick={buttonClick} text="6" />
            <Button buttonClick={buttonClick} text="+" />
            <Button buttonClick={buttonClick} text="1" />
            <Button buttonClick={buttonClick} text="2" />
            <Button buttonClick={buttonClick} text="3" />
            <Button buttonClick={buttonClick} text="-" />
            <Button buttonClick={buttonClick} text="." />
            <Button buttonClick={buttonClick} text="0" />
            <Button buttonClick={buttonClick} text="/" />
            <Button buttonClick={buttonClick} text="x" />
            <Button buttonClick={buttonClick} text="RESET" />
            <Button buttonClick={buttonClick} text="=" />
          </div>
        </div>
      </main>
      <footer className="footer__container">
        <span>
          Challenge by Calculator app challenge on{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>{" "}
          . Coded by{" "}
          <a href="https://github.com/gab0o06" target="_blank">
            gab0o06
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
