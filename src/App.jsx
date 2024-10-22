import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import Coin from "./pages/Coin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex dark:bg-darktheme-background">
        {/* Navigation bar */}
        <NavigationBar />

        {/* Main content */}
        <main className="container mx-auto dark:bg-darktheme-background bg-primary">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coin/:coinId" element={<Coin />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
