import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

export function App(){
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      </ThemeProvider>
    </div>
  );
};