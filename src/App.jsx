import { useState } from "react";
// import AdditionalAspectsOfPipeline from "./components/AdditionalAspectPipeline";
import AggregationDemo from "./components/Examples";
import Header from "./components/Header";
// import HowStreamsWork from "./components/HowStreamsWork";
// import ImmutabilityInStreams from "./components/ImmutabilityStreams";
// import LazinessAndShortCircuiting from "./components/LazinessShortCircuting";
// import LimitationsOfStreams from "./components/LimitationsStreams";
import OpenToWork from "./components/OpenToWork";
// import WhatAreStreams from "./components/WhatAreStreams";
// import KeyCharacteristics from "./components/KeyCharacteristics";
// import PhasesOfStreamProcessing from "./components/PhasesOfStreams";
// import StreamInternals from "./components/StreamInternals";
// import ExecutionModel from "./components/ExecutionModel";
// import ShortCircuitingOperations from "./components/ShortCircuiting";
// import StreamOperations from "./components/StreamOperations";
// import AdvancedExamples from "./components/Topics/MaxProdExample";
import IntroductionToStreams from "./components/Topics/IntroductionToStreams";
import KeyCharacteristicsOfStreams from "./components/Topics/KeyCharOfStreams";
import InternalWorkingsOfStream from "./components/Topics/Internals";
import CoreOperationsOfStreams from "./components/Topics/Core";
import IntermediateOperations from "./components/Topics/Intermediate";
import TerminalOperations from "./components/Topics/Terminal";
import ShortCircuitOperations from "./components/Topics/ShortCircuit";
import MaxProductStreamExample from "./components/Topics/MaxProdExample";

export default function App() {
  const [isConcise, setIsConcise] = useState(false);

  const toggleContent = () => {
    setIsConcise((prev) => !prev);
  };

  return (
    <div className="max-w-screen-2xl px-4 min-h-screen mx-auto selection:bg-pink-500 selection:text-blk bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk">
      <Header />
      <div className="fixed top-0 right-0 m-4">
        <button
          onClick={toggleContent}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md"
        >
          {isConcise ? "Detailed View" : "Presentation Mode"}
        </button>
      </div>
      <IntroductionToStreams isConcise={isConcise} />
      <KeyCharacteristicsOfStreams isConcise={isConcise} />
      <InternalWorkingsOfStream isConcise={isConcise} />
      <CoreOperationsOfStreams isConcise={isConcise} />
      <IntermediateOperations isConcise={isConcise} />
      <TerminalOperations isConcise={isConcise} />
      <ShortCircuitOperations isConcise={isConcise} />
      <MaxProductStreamExample isConcise={isConcise} />

      {/* <WhatAreStreams isConcise={isConcise} /> */}
      {/* <KeyCharacteristics isConcise={isConcise} /> */}
      {/* <PhasesOfStreamProcessing isConcise={isConcise} /> */}
      {/* <StreamInternals isConcise={isConcise} /> */}
      {/* <ExecutionModel isConcise={isConcise} /> */}
      {/* <ShortCircuitingOperations isConcise={isConcise} /> */}
      {/* <StreamOperations /> */}
      {/* <AdvancedExamples isConcise={isConcise} /> */}

      {/* <HowStreamsWork isConcise={isConcise} /> */}
      {/* <ImmutabilityInStreams isConcise={isConcise} /> */}
      {/* <LazinessAndShortCircuiting isConcise={isConcise} /> */}
      {/* <AdditionalAspectsOfPipeline isConcise={isConcise} /> */}
      {/* <LimitationsOfStreams isConcise={isConcise} /> */}
      <AggregationDemo />
      <OpenToWork />
    </div>
  );
}
