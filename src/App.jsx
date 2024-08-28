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
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk">
      <Header />
      <WhatAreStreams/>
      <HowStreamsWork/>
      <ImmutabilityInStreams/>
      <LazinessAndShortCircuiting/>
      <AdditionalAspectsOfPipeline/>
      <LimitationsOfStreams/>
      <AggregationDemo />
      <OpenToWork/>
    </div>
  );
}
