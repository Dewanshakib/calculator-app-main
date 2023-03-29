/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        // ? Theme One
        //  Backgrounds
        "Theme-One-Main-Bg": "hsl(222, 26%, 31%)",
        "Theme-One-Toggle-Bg": "hsl(223, 31%, 20%)",
        "Theme-One-keypad-Bg": "hsl(223, 31%, 20%)",
        "Theme-One-Screen-Bg": "hsl(224, 36%, 15%)",
        // Keys Dark
        "Theme-One-Dark-key": "hsl(225, 21%, 49%)",
        "Theme-One-Dark-key-Hover": "hsl(225, 21%, 63%)",
        "Theme-One-Dark-key-Shadow": "hsl(224, 28%, 35%)",
        // Keys Red
        "Theme-One-Red-key": "hsl(6, 63%, 50%)",
        "Theme-One-Red-key-Hover": "hsl(6, 63%, 66%)",
        "Theme-One-Red-key-Shadow": "hsl(6, 70%, 34%)",
        // Keys Light
        "Theme-One-Light-key": "hsl(30, 25%, 89%)",
        "Theme-One-Light-key-Hover": "hsl(30, 25%, 97%)",
        "Theme-One-Light-key-Shadow": "hsl(28, 16%, 65%)",
        // Text
        "Theme-One-Dark-Text": "hsl(221, 14%, 31%)",
        "Theme-One-White-Text": "hsl(0, 0%, 100%)",
        // ? Theme Two
        //  Backgrounds
        "Theme-two-Main-Bg": "hsl(0, 0%, 90%)",
        "Theme-two-Toggle-Bg": "hsl(0, 5%, 81%)",
        "Theme-two-Keypad-Bg": "hsl(0, 5%, 81%)",
        "Theme-two-Screen-Bg": "hsl(0, 0%, 93%)",
        // Keys Dark
        "Theme-Two-Dark-key": "hsl(185, 42%, 37%)",
        "Theme-Two-Dark-key-Shadow": "hsl(185, 58%, 25%)",
        // Keys Orange
        "Theme-Two-Orange-key": "hsl(25, 98%, 40%)",
        "Theme-Two-Orange-key-Toggle": "hsl(25, 98%, 40%)",
        "Theme-Two-Orange-key-Shadow": "hsl(25, 99%, 27%)",
        // Keys Light
        "Theme-Two-Light-Key": "hsl(45, 7%, 89%)",
        "Theme-Two-Light-Key-Shadow": "hsl(35, 11%, 61%)",
        // Text
        "Theme-Two-Dark-Text": "hsl(60, 10%, 19%)",
        "Theme-Two-White-Text": "hsl(0, 0%, 100%)",
        // ? Theme Three
        //  Backgrounds
        "Theme-Three-Main-Bg":"hsl(268, 75%, 9%)",
        "Theme-Three-Keypad-Bg":"hsl(268, 71%, 12%)",
        "Theme-Three-Toggle-Bg":"hsl(268, 71%, 12%)",
        "Theme-Three-Screen-Bg":"hsl(268, 71%, 12%)",
        // Keys Dark
        "Theme-Three-Dark-key":"hsl(281, 89%, 26%)",
        "Theme-Three-Dark-key-Shadow":"hsl(285, 91%, 52%)",
        // Keys Cyan
        "Theme-Three-Cyan-key":"hsl(176, 100%, 44%)",
        "Theme-Three-Cyan-Toggle":"hsl(176, 100%, 44%)",
        "Theme-Three-Cyan-key-Shadow":"hsl(177, 92%, 70%)",
        // Keys Dark - 02
        "Theme-Three-Dark-key-2":"hsl(268, 47%, 21%)",
        "Theme-Three-Dark-key-Shadow-2":"hsl(290, 70%, 36%)",
        // Text
        "Theme-Three-Dark-Text":"hsl(198, 20%, 13%)",
        "Theme-Three-Light-Yellow-Text":"hsl(52, 100%, 62%)",
        "Theme-Three-White-Text":"hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
