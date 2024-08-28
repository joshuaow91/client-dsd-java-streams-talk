import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../utils/codeBlockStyles";

export default function LazinessAndShortCircuiting({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto pb-48">
      <h3 className="text-6xl font-semibold mb-4">
        Laziness and Short-Circuiting
      </h3>

      {isConcise ? (
        <>
          <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
            <li>
              <strong>Lazy Processing:</strong> Streams only process elements as
              needed.
            </li>
            <li>
              <strong>Short-Circuiting:</strong> Stops processing when a result
              is found (e.g., <code className="text-blue-300">findFirst()</code>
              , <code className="text-blue-300">anyMatch()</code>).
            </li>
          </ul>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example of short-circuiting with findFirst()
List<String> names = Arrays.asList("Michael", "Angela", "Jim", "Pam", "Dwight");
String firstNameStartingWithA = names.stream()
                                     .filter(name -> name.startsWith("A"))
                                     .findFirst()
                                     .orElse("No match");`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-2xl mb-6 leading-10">
            Streams are lazy, meaning they only process elements as needed. This
            laziness allows for optimizations such as short-circuiting, where
            processing stops as soon as a result is found. For example, methods
            like <code className="text-blue-300">findFirst()</code> and{" "}
            <code className="text-blue-300">anyMatch()</code> can terminate the
            stream operations early if a condition is met.
          </p>

          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example of short-circuiting with findFirst()
List<String> names = Arrays.asList("Michael", "Angela", "Jim", "Pam", "Dwight");
String firstNameStartingWithA = names.stream()
                                     .filter(name -> name.startsWith("A"))
                                     .findFirst()
                                     .orElse("No match");`}
          </SyntaxHighlighter>

          <p className="text-2xl mt-6 leading-10">
            In this example, the stream will stop processing once it finds the
            first name that starts with &apos;A&apos;. If &quot;Angela&quot; is
            the first in the list, the rest of the names are not processed,
            demonstrating both laziness and short-circuiting.
          </p>
        </>
      )}
    </div>
  );
}

LazinessAndShortCircuiting.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
