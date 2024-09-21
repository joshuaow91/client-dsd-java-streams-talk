import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

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
    return aggregates.stream() // Source: Stream of aggregates
            // Stateful: sorts elements in reverse order by 'endTime'
            .sorted(Comparator.comparing(Aggregates::getEndTime).reversed())
            .skip(1) // Stateless: skips the first element
            .findFirst() // Terminal, short-circuit: finds first element after 'skip'
            .map(Aggregates::getHigh) // Optional Op: maps to 'high' value if present
            .orElse(Double.NaN); // Default value if Optional is empty
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
    if (aggregates.size() < 2) return Double.NaN;

    Aggregates latest = aggregates.get(0);
    Aggregates secondLatest = null;

    for (Aggregates aggregate : aggregates) {
        if (aggregate.getEndTime().isAfter(latest.getEndTime())) {
            secondLatest = latest;
            latest = aggregate;
        } else if (secondLatest == null ||
                    aggregate.getEndTime().isAfter(secondLatest.getEndTime())) {
            secondLatest = aggregate;
        }
    }

    return secondLatest != null ? secondLatest.getHigh() : Double.NaN;
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
