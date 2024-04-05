import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";
import SignInSide from "./components/login";
import { auth } from "./firebase";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Explicitly sign out user on component mount
    auth.signOut();

    return () => unsubscribe();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && <Sidebar isSidebar={isSidebar} />}
          <div className="content-wrapper">
            {user && <Topbar setIsSidebar={setIsSidebar} />}
            <main className="content">
              <Routes>
                {!user && <Route path="/" element={<SignInSide />} />}
                {user && <Route path="/" element={<Dashboard />} />}
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
