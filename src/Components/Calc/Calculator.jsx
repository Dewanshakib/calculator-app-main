import React, { useContext } from 'react'
import { contextApi } from '../Context/Context_Api'
import { ToggleBtn } from '../ToggleBtn/ToggleBtn'

const Calculator = () => {
    const {text,handleClick,resetBtn,deleteBtn,calculate,theme} = useContext(contextApi)
  return (
    <>
     <div className="font-Spartan">
        <div className={`main ${theme === "blue" ? "bg-Theme-One-Main-Bg" : ""} ${theme === "light" ? "bg-Theme-two-Main-Bg" : ""} ${theme === "purple" ? "bg-Theme-Three-Main-Bg" : ""}`}>
            <div className="w-[340px] h-[426px]">

                <div className="py-3 flex justify-between items-center">
                    <h1 className={`text-left text-2xl ${theme === "blue" ? "text-Theme-One-White-Text" : ""} ${theme === "light" ? "text-Theme-Two-Dark-Text" : ""} ${theme === "purple" ? "text-Theme-Three-Light-Yellow-Text" : ""}`}>calc</h1>
                    <ToggleBtn/>
                </div>

                <div className="w-full h-auto">
                    <input type="text" value={text} className={`input ${theme === "blue" ? "text-Theme-One-White-Text bg-Theme-One-keypad-Bg" : ""} ${theme === "light" ? "text-Theme-Two-Dark-Text bg-Theme-two-Screen-Bg" : ""} ${theme === "purple" ? "text-Theme-Three-Light-Yellow-Text bg-Theme-Three-Keypad-Bg" : ""}`}/>
                </div>

                <div className={` mt-4 rounded-xl ${theme === "blue" ? "bg-Theme-One-keypad-Bg":""} ${theme === "light" ? "bg-Theme-two-Keypad-Bg":""} ${theme === "purple" ? "bg-Theme-Three-Keypad-Bg":""}`}>
                    <div className="grid grid-cols-4 gap-3 p-3">
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='7'>7</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='8'>8</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='9'>9</button>
                        <button onClick={deleteBtn} className={`btn-2 ${theme === "blue" ? "blue-2":""} ${theme === "light" ? "light-2" :""} ${theme === "purple" ? "purple-2" :""}`} >DEL</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='4'>4</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='5'>5</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='6'>6</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='+'>+</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='1'>1</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='2'>2</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='3'>3</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='-'>-</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='.'>.</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='0'>0</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='/'>/</button>
                        <button onClick={handleClick} className={`btn ${theme === "blue" ? "blue-1":""} ${theme === "light" ? "light-1" :""} ${theme === "purple" ? "purple-1" :""}`} name='*'>x</button>
                        <button onClick={resetBtn} className={`btn-2 col-span-2 ${theme === "blue" ? "blue-2" : ""} ${theme === "light" ? "light-2" :""} ${theme === "purple" ? "purple-2" :""}`} name=''>RESET</button>
                        <button onClick={calculate} className={`btn-3 col-span-2 ${theme === "blue" ? "blue-3" : ""} ${theme === "light" ? "light-3" :""} ${theme === "purple" ? "purple-3" :""}`} name=''>=</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>   
    </>
  )
}

export default Calculator