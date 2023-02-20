import { Affix, Button, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { currentKeyIndex } =
    useCharacterAnimations();

  const keys = ["w", "a", "s", "d"];

  return (
    <Affix position={{ bottom: 50, right: 10 }}>
      <Stack>
        {keys.map((animation, index) => (
          <Button
            key={animation}
            variant={index === currentKeyIndex ? "filled" : "light"}
          >
            {keys[index]}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default Interface;
