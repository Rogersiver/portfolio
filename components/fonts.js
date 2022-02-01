import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
      @import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Fira+Mono&family=Heebo&display=swap');
  `}
    />
  );
};

export default Fonts;
