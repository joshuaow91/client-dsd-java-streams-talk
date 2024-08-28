import { useState } from "react";
import AdditionalAspectsOfPipeline from "./components/AdditionalAspectPipeline";
import AggregationDemo from "./components/Examples";
import Header from "./components/Header";
import HowStreamsWork from "./components/HowStreamsWork";
import ImmutabilityInStreams from "./components/ImmutabilityStreams";
import LazinessAndShortCircuiting from "./components/LazinessShortCircuting";
import LimitationsOfStreams from "./components/LimitationsStreams";
import OpenToWork from "./components/OpenToWork";
import WhatAreStreams from "./components/WhatAreStreams";

export default function App() {
  const [isConcise, setIsConcise] = useState(false);

  const toggleContent = () => {
    setIsConcise((prev) => !prev);
  };

  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk">
      <Header />
      <div className="absolute top-0 right-0 m-4">
        <button
          onClick={toggleContent}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md"
        >
          {isConcise ? "Detailed View" : "Presentation Mode"}
        </button>
      </div>
      <WhatAreStreams isConcise={isConcise} />
      <HowStreamsWork isConcise={isConcise} />
      <ImmutabilityInStreams isConcise={isConcise} />
      <LazinessAndShortCircuiting isConcise={isConcise} />
      <AdditionalAspectsOfPipeline isConcise={isConcise} />
      <LimitationsOfStreams isConcise={isConcise} />
      <AggregationDemo />
      <OpenToWork />
    </div>
  );
}
