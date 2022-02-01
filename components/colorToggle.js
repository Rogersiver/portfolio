import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  );
}
