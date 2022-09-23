import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import {ThemeProvider, useTheme } from './context/themeProvider.js';


function App() {
  return (
  <>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
