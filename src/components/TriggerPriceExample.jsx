import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TriggerPriceUpCalculation({ aggregates }){
  const [triggerPriceUp, setTriggerPriceUp] = useState(null);

  const calculateTriggerPriceUp = () => {
    const latestAggregate = aggregates.reduce(
      (latest, current) =>
        new Date(current.endTime) > new Date(latest.endTime) ? current : latest,
      aggregates[0],
    );
    setTriggerPriceUp(latestAggregate.high);
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">
        Calculate Trigger Price Up
      </h3>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        className="rounded-md mb-4"
      >
        {`// Java Streams Code
private double calculateTriggerPriceUp(List<Aggregates> aggregates) {
    return aggregates.stream()
            .max(Comparator.comparing(Aggregates::getEndTime))
            .map(Aggregates::getHigh)
            .orElse(Double.NaN);
}
`}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        className="rounded-md mb-4"
      >
        {`// For Loop Equivalent
private double calculateTriggerPriceUp(List<Aggregates> aggregates) {
    Aggregates latestAggregate = aggregates.get(0);
    for (Aggregates aggregate : aggregates) {
        if (aggregate.getEndTime().isAfter(latestAggregate.getEndTime())) {
            latestAggregate = aggregate;
        }
    }
    return latestAggregate.getHigh();
}
`}
      </SyntaxHighlighter>

      <button
        onClick={calculateTriggerPriceUp}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Calculate Trigger Price Up
      </button>
      <p className="mt-4 text-lg">Expected Trigger Price Up: 128</p>
      {triggerPriceUp !== null && (
        <p className="mt-1 text-lg">
          Calculated Trigger Price Up: {triggerPriceUp}
        </p>
      )}
    </div>
  );
};

TriggerPriceUpCalculation.propTypes = {
  aggregates: PropTypes.arrayOf(
    PropTypes.shape({
      high: PropTypes.number.isRequired,
      low: PropTypes.number.isRequired,
      open: PropTypes.number.isRequired,
      close: PropTypes.number.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
    }),
  ).isRequired,
};