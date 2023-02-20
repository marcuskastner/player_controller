import { createContext, useContext, useState, useEffect } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  const handleKeyDown = (event) => {
    const key = event.key;
    switch (key) {
      case "w":
        setCurrentKeyIndex(0);
        setAnimationIndex(2);
        setRotationAngle(Math.PI);
        break;
      case "a":
        setCurrentKeyIndex(1);
        setAnimationIndex(2);
        setRotationAngle((3 * Math.PI) / 2);
        break;
      case "s":
        setCurrentKeyIndex(2);
        setAnimationIndex(2);
        setRotationAngle(0);
        break;
      case "d":
        setCurrentKeyIndex(3);
        setAnimationIndex(2);
        setRotationAngle(Math.PI / 2);
        break;
    }
  };

  const handleKeyUp = () => {
    setAnimationIndex(1);
  };

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
        currentKeyIndex,
        rotationAngle,
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
