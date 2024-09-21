import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import HighPriceCalculation from "./HighPriceExample";
import StartTimeCalculation from "./StartTimeExample";
import TriggerPriceUpCalculation from "./TriggerPriceExample";
import TargetPriceUpCalculation from "./TargetPriceExample";

export default function AggregationDemo() {
  const aggregates = [
    {
      high: 120,
      low: 100,
      open: 110,
      close: 115,
      startTime: "2023-08-25T10:00:00Z",
      endTime: "2023-08-25T10:01:00Z",
    },
    {
      high: 130,
      low: 105,
      open: 115,
      close: 125,
      startTime: "2023-08-25T10:01:00Z",
      endTime: "2023-08-25T10:02:00Z",
    },
    {
      high: 128,
      low: 102,
      open: 123,
      close: 107,
      startTime: "2023-08-25T10:02:00Z",
      endTime: "2023-08-25T10:03:00Z",
    },
    {
      high: 135,
      low: 110,
      open: 130,
      close: 132,
      startTime: "2023-08-25T10:03:00Z",
      endTime: "2023-08-25T10:04:00Z",
    },
    {
      high: 140,
      low: 115,
      open: 134,
      close: 138,
      startTime: "2023-08-25T10:04:00Z",
      endTime: "2023-08-25T10:05:00Z",
    },
  ];

  return (
    <div className=" text-gray-300 max-w-7xl mx-auto pb-48">
      <h2 className="text-6xl md:text-9xl max-w-4xl mb-12 tracking-tighter drop-shadow-lg uppercase font-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
        Java Streams API Examples
      </h2>

      <div className="mb-8 sticky top-0 bg-zinc-950/50 ring-1 ring-zinc-700/60 backdrop-blur-md rounded-2xl p-4 z-10">
        <h3 className="text-2xl font-semibold mb-2">Sample Data</h3>
        <SyntaxHighlighter
          language="json"
          style={oneDark}
          className="rounded-md mb-4"
        >
          {`  { high: 120, low: 100, open: 110, close: 115, startTime: "2023-08-25T10:00:00Z", endTime: "2023-08-25T10:01:00Z" },
  { high: 130, low: 105, open: 115, close: 125, startTime: "2023-08-25T10:01:00Z", endTime: "2023-08-25T10:02:00Z" },
  { high: 128, low: 102, open: 123, close: 107, startTime: "2023-08-25T10:02:00Z", endTime: "2023-08-25T10:03:00Z" },
  { high: 135, low: 110, open: 130, close: 132, startTime: "2023-08-25T10:03:00Z", endTime: "2023-08-25T10:04:00Z" },
  { high: 140, low: 115, open: 134, close: 138, startTime: "2023-08-25T10:04:00Z", endTime: "2023-08-25T10:05:00Z" }
`}
        </SyntaxHighlighter>
      </div>

      <HighPriceCalculation aggregates={aggregates} />
      <StartTimeCalculation aggregates={aggregates} />
      <TriggerPriceUpCalculation aggregates={aggregates} />
      <TargetPriceUpCalculation aggregates={aggregates} />
    </div>
  );
}
