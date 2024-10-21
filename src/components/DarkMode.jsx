import { useState, useEffect } from "react";
import { IoToggle } from "react-icons/io5";
function DarkMode() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <IoToggle />
      <p>Dark Mode</p>
    </div>
  );
}

export default DarkMode;
