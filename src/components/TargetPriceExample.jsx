import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/codeBlockStyles";

export default function TargetPriceUpCalculation({ aggregates }) {
  const [targetPriceUp, setTargetPriceUp] = useState(null);

  const calculateTargetPriceUp = () => {
    if (aggregates.length < 2) {
      setTargetPriceUp(Number.NaN);
      return;
    }

    let latest = aggregates[0];
    let secondLatest = null;

    for (let i = 1; i < aggregates.length; i++) {
      const aggregate = aggregates[i];
      if (new Date(aggregate.endTime) > new Date(latest.endTime)) {
        secondLatest = latest;
        latest = aggregate;
      } else if (
        !secondLatest ||
        new Date(aggregate.endTime) > new Date(secondLatest.endTime)
      ) {
        secondLatest = aggregate;
      }
    }

    setTargetPriceUp(secondLatest ? secondLatest.high : Number.NaN);
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">
        Calculate Target Price Up
      </h3>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
        className="rounded-md mb-4"
      >
        {`private double calculateTargetPriceUp(List<Aggregates> aggregates) {
    return aggregates.stream() // Source: list of aggregates
            .sorted(Comparator.comparing(Aggregates::getEndTime).reversed()) // Intermediate Operation: 'sorted' is stateful and requires a full pass over the data
            .skip(1) // Intermediate Operation: 'skip' is stateless but still processes all preceding elements
            .findFirst() // Terminal Operation: finds the first element after 'skip', short-circuiting operation
            .map(Aggregates::getHigh) // Intermediate Operation: 'map' transforms the stream elements
            .orElse(Double.NaN); // Provides a default value if stream is empty or has fewer than 2 elements
}
`}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
        className="rounded-md mb-4"
      >
        {`// For Loop Equivalent
private double calculateTargetPriceUp(List<Aggregates> aggregates) {
    if (aggregates.size() < 2) return Double.NaN; // Ensure there are at least two items

    Aggregates latest = aggregates.get(0); // Initialize the latest aggregate
    Aggregates secondLatest = null; // Initialize secondLatest to null

    // Find the latest and second latest aggregates
    for (Aggregates aggregate : aggregates) { // Iterative approach: loops through each element
        if (aggregate.getEndTime().isAfter(latest.getEndTime())) { // Compares each 'endTime' to find the latest
            secondLatest = latest;  // The current latest becomes secondLatest
            latest = aggregate; // Update latest to the current aggregate
        } else if (secondLatest == null || aggregate.getEndTime().isAfter(secondLatest.getEndTime())) {
            // Find the second latest aggregate
            secondLatest = aggregate;
        }
    }

    return secondLatest != null ? secondLatest.getHigh() : Double.NaN; // Returns the 'high' value of the second latest aggregate
}
`}
      </SyntaxHighlighter>

      <button
        onClick={calculateTargetPriceUp}
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold"
      >
        Calculate Target Price Up
      </button>

      <p className="mt-4 text-lg">Expected Target Price Up: 140</p>
      {targetPriceUp !== null && (
        <p className="mt-1 text-lg">
          Calculated Target Price Up: {targetPriceUp}
        </p>
      )}
    </div>
  );
}

TargetPriceUpCalculation.propTypes = {
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
