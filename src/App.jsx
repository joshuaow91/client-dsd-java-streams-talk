import { useState, useEffect } from "react";
import Header from "./components/Header";
import AggregationDemo from "./components/ScannerExamples/Examples";
import OpenToWork from "./components/OpenToWork";
import IntroductionToStreams from "./components/Topics/IntroductionToStreams";
import KeyCharacteristicsOfStreams from "./components/Topics/KeyCharOfStreams";
import InternalWorkingsOfStream from "./components/Topics/Internals";
import CoreOperationsOfStreams from "./components/Topics/Core";
import IntermediateOperations from "./components/Topics/Intermediate";
import TerminalOperations from "./components/Topics/Terminal";
import ShortCircuitOperations from "./components/Topics/ShortCircuit";
import MaxProductStreamExample from "./components/Topics/MaxProdExample";
import Presentation from "./components/Presentation/Presentation";

export default function App() {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleViewMode = () => {
    setIsPresentationMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="max-w-screen-2xl min-h-screen mx-auto selection:bg-pink-500 selection:text-blk
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk"
    >
      <Header isPresentationMode={isPresentationMode} />

      <div className="fixed top-0 right-0 m-4 flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isPresentationMode}
            onChange={toggleViewMode}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
        <span className="ml-2 text-white">Presentation Mode</span>
      </div>

      {isPresentationMode ? (
        <Presentation />
      ) : (
        <div className="pr-6 px-4">
          <IntroductionToStreams />
          <KeyCharacteristicsOfStreams />
          <InternalWorkingsOfStream />
          <CoreOperationsOfStreams />
          <IntermediateOperations />
          <TerminalOperations />
          <ShortCircuitOperations />
          <MaxProductStreamExample />
          <AggregationDemo />
        </div>
      )}

      <OpenToWork />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          &uarr; Top
        </button>
      )}
    </div>
  );
}
