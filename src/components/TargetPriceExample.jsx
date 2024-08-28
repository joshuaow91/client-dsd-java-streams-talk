import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TargetPriceDownCalculation = ({ aggregates }) => {
  const [targetPriceDown, setTargetPriceDown] = useState(null);

  const calculateTargetPriceDown = () => {
    if (aggregates.length < 2) {
      setTargetPriceDown(Number.NaN);
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

    setTargetPriceDown(secondLatest ? secondLatest.low : Number.NaN);
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">
        Calculate Target Price Down
      </h3>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        className="rounded-md mb-4"
      >
        {`// Java Streams Code
private double calculateTargetPriceDown(List<Aggregates> aggregates) {
    return aggregates.stream()
            .sorted(Comparator.comparing(Aggregates::getEndTime).reversed())
            .skip(1)
            .findFirst()
            .map(Aggregates::getLow)
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
private double calculateTargetPriceDown(List<Aggregates> aggregates) {
    if (aggregates.size() < 2) return Double.NaN; // Ensure there are at least two items

    Aggregates latest = aggregates.get(0);
    Aggregates secondLatest = null;

    // Find the latest aggregate
    for (Aggregates aggregate : aggregates) {
        if (aggregate.getEndTime().isAfter(latest.getEndTime())) {
            secondLatest = latest;  // The current latest becomes secondLatest
            latest = aggregate;
        } else if (secondLatest == null || aggregate.getEndTime().isAfter(secondLatest.getEndTime())) {
            // Find the second latest
            secondLatest = aggregate;
        }
    }

    return secondLatest != null ? secondLatest.getLow() : Double.NaN;
}
`}
      </SyntaxHighlighter>

      <button
        onClick={calculateTargetPriceDown}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Calculate Target Price Down
      </button>
      <p className="mt-4 text-lg">Expected Target Price Down: 105</p>
      {targetPriceDown !== null && (
        <p className="mt-1 text-lg">
          Calculated Target Price Down: {targetPriceDown}
        </p>
      )}
    </div>
  );
};

TargetPriceDownCalculation.propTypes = {
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

export default TargetPriceDownCalculation;
