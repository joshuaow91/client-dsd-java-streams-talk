import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StartTimeCalculation({ aggregates }) {
  const [startTime, setStartTime] = useState(null);

  const calculateStartTime = () => {
    const earliestStart = aggregates
      .map((a) => new Date(a.startTime))
      .sort((a, b) => a - b)[0];
    setStartTime(earliestStart.toISOString());
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">
        Calculate Start Time
      </h3>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        className="rounded-md mb-4"
      >
        {`// Java Streams Code
private ZonedDateTime calculateStartTime(List<Aggregates> aggregates) {
    return aggregates.stream() // Source: list of aggregates
            .map(Aggregates::getStartTime) // Intermediate Operation: transforms each 'Aggregates' to its 'startTime'
            .min(ZonedDateTime::compareTo) // Terminal Operation: min is stateful, it must process all elements to find the minimum
            .orElse(ZonedDateTime.now()); // Default value if stream is empty
}
`}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        className="rounded-md mb-4"
      >
        {`// For Loop Equivalent
private ZonedDateTime calculateStartTime(List<Aggregates> aggregates) {
    ZonedDateTime earliestStart = ZonedDateTime.now(); // Initial state
    for (Aggregates aggregate : aggregates) { // Iterative approach: loops through each element
        if (aggregate.getStartTime().isBefore(earliestStart)) { // Checks if the current 'startTime' is earlier
            earliestStart = aggregate.getStartTime(); // Updates to the earliest time if current is earlier
        }
    }
    return earliestStart; // Returns the earliest start time found
}
`}
      </SyntaxHighlighter>

      <button
        onClick={calculateStartTime}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Calculate Start Time
      </button>

      <p className="mt-4 text-lg">Expected Start Time: 2023-08-25T10:00:00Z</p>
      {startTime !== null && (
        <p className="mt-1 text-lg">Calculated Start Time: {startTime}</p>
      )}
    </div>
  );
}

StartTimeCalculation.propTypes = {
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
