import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WeatherProvider from "./contexts/WeatherContext";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1366px) {
      font-size: 50%;
    }
  }

  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    color: #1f1e31;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <WeatherProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </>
  );
}

export default App;
