import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import PropTypes from "prop-types";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/codeBlockStyles";

export default function HighPriceCalculation({ aggregates }) {
  const [highPrice, setHighPrice] = useState(null);

  const calculateHighPrice = () => {
    const maxHigh = Math.max(...aggregates.map((a) => a.high));
    setHighPrice(maxHigh);
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">
        Calculate High Price
      </h3>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
        className="rounded-md mb-4"
      >
        {`private double calculateHighPrice(List<Aggregates> aggregates) {
    return aggregates.stream()  // Source: the data source is a list of aggregates
            .mapToDouble(Aggregates::getHigh) // Intermediate Operation, Stateless, transforms each 'Aggregates' to its 'high' value
            .max() // Terminal Operation, Stateful operation that processes all elements to determine the highest value
            .orElse(Double.NaN); // Provides a default value if the stream is empty
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
private double calculateHighPrice(List<Aggregates> aggregates) {
    double maxHigh = Double.NaN; // Initial state
    for (Aggregates aggregate : aggregates) { // Iterative approach: loops through each element
        if (Double.isNaN(maxHigh) || aggregate.getHigh() > maxHigh) { // Checks if current 'high' is greater
            maxHigh = aggregate.getHigh(); // Updates the maximum if current is higher
        }
    }
    return maxHigh; // Returns the final maximum value
}
`}
      </SyntaxHighlighter>

      <button
        onClick={calculateHighPrice}
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold"
      >
        Calculate High Price
      </button>
      <p className="mt-4 text-lg">Expected High Price: 140</p>
      {highPrice !== null && (
        <p className="mt-1 text-lg">Calculated High Price: {highPrice}</p>
      )}
    </div>
  );
}

HighPriceCalculation.propTypes = {
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
