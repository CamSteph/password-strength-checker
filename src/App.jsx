import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Contributions from "./pages/Contributions";

const GlobalStyles = createGlobalStyle`
  :root {
    --black-color-primary: #181818;
    --black-color-secondary: #070707;
    --white-color-primary: #fff;
    --offwhite-color: #ccc;
    --highlight-color-primary: #008cff;
    --rounded-border: .5rem;
    --rounded-border-sm: .2rem;
    --rounded-border-lg: 1rem;
    --font-scale: 1.618; 
  }
`;

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
