import { useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import TierList from "./components/TierList.jsx";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen text-white gradient-bg">
      {!entered ? (
        <LandingPage onEnter={() => setEntered(true)} />
      ) : (
        <TierList />
      )}
    </div>
  );
}