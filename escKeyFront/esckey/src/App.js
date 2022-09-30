import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import { ThemeProvider, useTheme } from "./context/themeProvider.js";
import CommunityPage from "./pages/community";
import CustomerSupportPage from "./pages/customer_support";
import CustomizingInstructions from "./pages/customizing_instructions";
import ChatPage from "./pages/chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/support" element={<CustomerSupportPage />} />
            <Route
              path="/customizing/instructions"
              element={<CustomizingInstructions />}
            />
            {/* <Route path="/FAQ" element={<FaqPage />} /> */}
            <Route path="/FAQ" element={<CustomizingInstructions />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
