// Desc: Main entry point for the application
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import Coin from "./pages/Coin";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="container mx-auto dark:bg-darktheme-background bg-primary">
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
        <Footer />
      </main>
    </>
  );
}

export default App;
