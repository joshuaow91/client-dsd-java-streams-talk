import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/SyntaxStyles";

export default function AdditionalAspectsOfPipeline({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto pb-48">
      <h3 className="text-6xl font-semibold mb-4">
        Additional Aspects of a Pipeline
      </h3>

      {isConcise ? (
        <>
          <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
            <li>
              <strong className="text-orange-300">
                Stateful vs. Stateless:
              </strong>{" "}
              <span className="text-blue-300"> Stateful </span>operations like{" "}
              <code className="text-blue-300">sorted()</code> and{" "}
              <code className="text-blue-300">distinct()</code> examine multiple
              elements.
              <span className="text-green-300"> Stateless </span>operations like{" "}
              <code className="text-green-300">map()</code> and{" "}
              <code className="text-green-300">filter()</code> don&apos;t need
              prior context.
            </li>
            <li>
              <strong className="text-orange-300">Performance:</strong> Use{" "}
              <code className="text-blue-300">limit()</code> and{" "}
              <code className="text-blue-300">skip()</code> to handle large
              datasets efficiently. Only process what you need.
            </li>
            <li>
              <strong className="text-orange-300">
                Handling Nulls & Exceptions:
              </strong>{" "}
              Streams don&apos;t handle{" "}
              <code className="text-blue-300">null</code> values automatically.
              Use{" "}
              <code className="text-blue-300">filter(Objects::nonNull)</code>.
              Wrap lambdas for exceptions.
            </li>
          </ul>

          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`// Example showcasing statefulness, performance, and handling nulls

List<String> names = Arrays.asList("Michael", null, "Jim", "Pam", "Dwight", "Angela");

// Stream pipeline: Handle nulls, transform data, and limit processed elements
List<String> result = names.stream()
                           .filter(Objects::nonNull)  // Handling nulls with Method Ref Op.
                           .filter(obj -> obj != null)  // Handling nulls with a lambda
                           .map(String::toUpperCase)  // Stateless transformation
                           .distinct()                // Stateful operation
                           .limit(3)                  // Performance optimization
                           .toList();  // Terminal operation (Java 16+)

// Result: ["MICHAEL", "JIM", "PAM"]
`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
            <li>
              <strong className="text-orange-300">
                Statefulness vs. Statelessness:
              </strong>{" "}
              Operations like <code className="text-blue-300">sorted()</code>{" "}
              and <code className="text-blue-300">distinct()</code> are stateful
              because they require examining multiple elements to produce a
              result. In contrast, operations like{" "}
              <code className="text-green-300">map()</code> and{" "}
              <code className="text-green-300">filter()</code> are stateless as
              they do not rely on the state from previous elements in the
              stream.
            </li>
            <li>
              <strong className="text-orange-300">
                Performance Considerations:
              </strong>{" "}
              Operations like <code className="text-blue-300">limit()</code> and{" "}
              <code className="text-blue-300">skip()</code> are particularly
              useful when working with large datasets because they can reduce
              the number of elements processed. Lazy operations help avoid
              unnecessary computation.
            </li>
            <li>
              <strong className="text-orange-300">
                Handling Nulls and Exceptions:
              </strong>{" "}
              Streams do not inherently handle{" "}
              <code className="text-blue-300">null</code> values well. Use{" "}
              <code className="text-blue-300">filter(Objects::nonNull)</code> to
              filter out nulls. For exceptions, consider wrapping lambda
              expressions in utility functions.
            </li>
          </ul>

          <SyntaxHighlighter language="java" style={oneDark} customStyle={customStyle}>
            {`// Example showcasing statefulness, performance, and handling nulls

List<String> names = Arrays.asList("Michael", null, "Jim", "Pam", "Dwight", "Angela");

// Stream pipeline: Handle nulls, transform data, and limit processed elements
List<String> result = names.stream()
                           .filter(Objects::nonNull)  // Handling nulls with Method Ref Op.
                           .filter(obj -> obj != null)  // Handling nulls with a lambda
                           .map(String::toUpperCase)  // Stateless transformation
                           .distinct()                // Stateful operation
                           .limit(3)                  // Performance optimization
                           .toList();  // Terminal operation (Java 16+)

// Result: ["MICHAEL", "JIM", "PAM"]
`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

AdditionalAspectsOfPipeline.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
