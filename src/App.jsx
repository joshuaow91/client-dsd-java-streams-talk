import AggregationDemo from "./components/Examples";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-blk">
      <Header />
      <div className="max-w-5xl mx-auto">
        <AggregationDemo />
      </div>
    </div>
  );
}
