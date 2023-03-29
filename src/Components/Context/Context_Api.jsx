import React, { createContext, useState } from "react";

export const contextApi = createContext(null);

const ContextProvider = (props) => {
  // To toggle button
  const [toggle,setToggle] = useState("start")
  
  // To toggle theme
  const [theme,setTheme] = useState("blue")

  // Theme change function
  const toggleTheme = () => {
    if (theme === "blue") {
      setTheme("light")
    }
    else if (theme === "light") {
      setTheme("purple")
    }
    else if (theme === "purple") {
      setTheme("blue")
    }
  }
  
  // Toggle function
  const toggleBtn = () => {
    if (toggle === "start") {
      setToggle("center")
    } else if (toggle === "center") {
      setToggle("end")
    } else if (toggle === "end") {
      setToggle("start")
    }
    toggleTheme()
  }

  // Showing text in input 
  const [text,setText] = useState("399,981")

  // Handle click
  const handleClick = (e) => {
    setText(text?.concat(e.target?.name))
  }

  // Reset button
  const resetBtn = () => {
    setText("")
  }

  // Del button
  const deleteBtn = () => {
    setText(text?.slice(0,-1))
  }

  // Calc Button
  const calculate = () => {
    try {
      setText(eval(text).toString())
    } catch (error) {
      setText("Syntax Error")
    }
  }

  // Value for context  
  const contextValue = {text,handleClick,resetBtn,deleteBtn,calculate,toggle,toggleBtn,theme}

  return <contextApi.Provider value={contextValue}>{props.children}</contextApi.Provider>;
};

export default ContextProvider;