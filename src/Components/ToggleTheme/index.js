import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Button } from "Design";
import { darkColor } from "@stitches";

export const ToggleTheme = () => {
  const [themeState, setThemeState] = useState(false);

  const ChangeTheme = (themeState) => {
    themeState
      ? document.documentElement.classList.add(darkColor)
      : document.documentElement.classList.remove(darkColor);
  };

  const ToggleButton = () => {
    setThemeState(!themeState);
    ChangeTheme(!themeState);
    localStorage.setItem("theme", !themeState);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      setThemeState(true);
      ChangeTheme(true);
    }
  }, []);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        onClick={() => ToggleButton()}
        key={themeState}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button variant="toggleButton" onClick={ToggleButton}>
          {themeState ? <MdLightMode /> : <MdNightlight />}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
