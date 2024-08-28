import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import PropTypes from "prop-types";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
        className="rounded-md mb-4"
      >
        {`// Java Streams Code
private double calculateHighPrice(List<Aggregates> aggregates) {
    return aggregates.stream()
            .mapToDouble(Aggregates::getHigh)
            .max()
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
private double calculateHighPrice(List<Aggregates> aggregates) {
    double maxHigh = Double.NaN;
    for (Aggregates aggregate : aggregates) {
        if (Double.isNaN(maxHigh) || aggregate.getHigh() > maxHigh) {
            maxHigh = aggregate.getHigh();
        }
    }
    return maxHigh;
}
`}
      </SyntaxHighlighter>

      <button
        onClick={calculateHighPrice}
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold"
      >
        Calculate High Price
      </button>
      <p className="mt-4 text-lg">Expected High Price: 130</p>
      {highPrice !== null && (
        <p className="mt-1 text-lg">Calculated High Price: {highPrice}</p>
      )}
    </div>
  );
};

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
