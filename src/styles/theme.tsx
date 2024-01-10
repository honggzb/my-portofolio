import { extendTheme } from '@chakra-ui/react'

const colors = {
    primary: {
      dark: '#FF7308',
      light: '#FFCD69',
    },
    secondary: '#0F1B61',
    black: '#000000',
    Angular: "#08bfd0",
    Vue: "#FF7308",
    React: "#4404f3a2",
    Redux: "black",
    Javascript: "#0F1B61",
    Typescript: "#272c0158",
    NodeJS: "#200030bc",
    ES6: "#fea154",
    HTML5: "#ed50319a",
    CSS3: "#3878F4",
    Bootstrap: "#9038f4",
    Firebase: "#feba54",
    Vercel: "grey",
    ChakraUI: "#31b03e",
    ThreeJS: "#31b03e"
  }

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const myTheme = extendTheme({ colors, fonts });
