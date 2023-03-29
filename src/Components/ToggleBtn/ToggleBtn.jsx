import { useContext } from "react"
import { contextApi } from "../Context/Context_Api"

export const ToggleBtn = () => {
  const {toggle,toggleBtn,theme} = useContext(contextApi)
  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className={`mt-4 ${theme === "blue" ? "text-Theme-One-White-Text " : ""} ${theme === "light" ? "text-Theme-Two-Dark-Text" : ""} ${theme === "purple" ? "text-Theme-Three-Light-Yellow-Text" : ""}`}>Theme</h1>
        <div className="flex flex-col items-center">
        <div className={`flex flex-row items-center gap-3 text-xs ${theme === "blue" ? "text-Theme-One-White-Text " : ""} ${theme === "light" ? "text-Theme-Two-Dark-Text" : ""} ${theme === "purple" ? "text-Theme-Three-Light-Yellow-Text" : ""}`}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>

        <div onClick={toggleBtn} className={`w-[50px] h-[14px] grid rounded-md p-[2px] cursor-pointer ${theme === "blue" ? "bg-Theme-One-Toggle-Bg":""} ${theme === "light" ? "bg-Theme-two-Toggle-Bg":""} ${theme === "purple" ? "bg-Theme-Three-Toggle-Bg":""}`}>
          <button   className={`w-[10px] h-[10px]  rounded-full ${toggle === "start" ? "justify-self-start bg-Theme-One-Red-key" : ""} ${toggle === "center" ? "justify-self-center bg-Theme-Two-Orange-key-Toggle" : ""}  ${toggle === "end" ? "justify-self-end bg-Theme-Three-Cyan-Toggle" : ""}`}></button>
        </div>
        </div>
      </div>
    </>
  )
}