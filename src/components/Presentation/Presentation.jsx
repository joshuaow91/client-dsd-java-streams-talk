import Intro from "./Intro";
import LazyShortCircuiting from "./LazyShortCircuit";
import ParallelStreams from "./ParallelStreams";
import StreamPipeline from "./StreamPipeline";
import WhenStreamsNotIdeal from "./WhenStreamsNotIdeal";
import WhenToUseParallelStreams from "./WhenToUseParallel";

export default function Presentation() {
  return (
    <div className="max-w-screen-2xl px-4 min-h-screen mx-auto selection:bg-pink-500 selection:text-blk bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk">
      <Intro />
      <StreamPipeline />
      <LazyShortCircuiting />
      <ParallelStreams />
      <WhenToUseParallelStreams />
      <WhenStreamsNotIdeal />
    </div>
  );
}
