import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import AggregationDemo from "./components/Examples";
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
  return (
    <Router>
      <div className="max-w-screen-2xl px-4 min-h-screen mx-auto selection:bg-pink-500 selection:text-blk bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk">
        <Header />
        <div className="fixed top-0 right-0 m-4">
          <Link to="/presentation">
            <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md">
              Presentation Mode
            </button>
          </Link>
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md ml-4">
              Detailed View
            </button>
          </Link>
        </div>

        <Routes>
          <Route path="/presentation" element={<Presentation />} />

          <Route
            path="/"
            element={
              <>
                <IntroductionToStreams isConcise={false} />
                <KeyCharacteristicsOfStreams isConcise={false} />
                <InternalWorkingsOfStream isConcise={false} />
                <CoreOperationsOfStreams isConcise={false} />
                <IntermediateOperations isConcise={false} />
                <TerminalOperations isConcise={false} />
                <ShortCircuitOperations isConcise={false} />
                <MaxProductStreamExample isConcise={false} />
                <AggregationDemo />
              </>
            }
          />
        </Routes>
        <OpenToWork />
      </div>
    </Router>
  );
}
