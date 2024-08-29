import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function ShortCircuitOperations({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Short-Circuit Operations
      </h2>

      {isConcise ? (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Short-circuit operations optimize performance by stopping further
            processing when a condition is met.
          </p>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">
                anyMatch(Predicate&lt;T&gt;)
              </span>
              : Checks if any elements match a condition.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Check if any name starts with "A"
boolean hasNameStartingWithA = names.stream()
                                    .anyMatch(name -> name.startsWith("A"));`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">findFirst()</span>:
              Returns the first element that matches a condition.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Find the first even number
Optional<Integer> firstEven = numbers.stream()
                                     .filter(n -> n % 2 == 0)
                                     .findFirst();`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">findAny()</span>:
              Returns any element that matches a condition (useful in parallel
              streams).
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Find any name starting with "D"
Optional<String> anyNameWithD = names.parallelStream()
                                    .filter(name -> name.startsWith("D"))
                                    .findAny();`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Short-circuit operations provide efficiency by terminating the
            stream early when a specified condition is met. These operations are
            particularly useful in large datasets or infinite streams, as they
            can prevent unnecessary processing and optimize performance.
          </p>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">
                anyMatch(Predicate&lt;T&gt;)
              </span>
              : Returns <span className="font-bold">true</span> if any element
              matches the provided predicate. This is often used to check for
              the existence of an element that meets certain criteria.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-green-300 font-bold">anyMatch()</span>{" "}
            method evaluates the elements of the stream and stops once an
            element matching the condition is found. This operation is efficient
            for large datasets as it does not require processing all elements.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Check if any name starts with "A"
boolean hasNameStartingWithA = names.stream()
                                    .anyMatch(name -> name.startsWith("A"));`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">findFirst()</span>:
              Returns the first element that matches a specified condition.
              Useful when you are only interested in the first occurrence of a
              match.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-blue-300 font-bold">findFirst()</span>{" "}
            method finds the first element that meets the given condition.
            It&apos;s particularly useful in ordered streams where the order of
            processing is important.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Find the first even number
Optional<Integer> firstEven = numbers.stream()
                                     .filter(n -> n % 2 == 0)
                                     .findFirst();`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">findAny()</span>:
              Retrieves any element matching a condition, particularly useful in
              parallel processing for optimizing performance. The result may
              vary in a parallel stream.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-orange-300 font-bold">findAny()</span>{" "}
            method returns any element that meets the condition. It is
            particularly beneficial in parallel streams, where it can take
            advantage of the concurrent nature to return any matching element
            quickly, without processing the entire stream.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Find any name starting with "D"
Optional<String> anyNameWithD = names.parallelStream()
                                    .filter(name -> name.startsWith("D"))
                                    .findAny();`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-purple-300 font-bold">
                noneMatch(Predicate&lt;T&gt;)
              </span>
              : Returns <span className="font-bold">true</span> if no elements
              match the provided predicate. This operation stops at the first
              occurrence of a match and does not process the remaining elements.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-purple-300 font-bold">noneMatch()</span>{" "}
            method evaluates the elements and returns <code>true</code> if none
            of them match the condition. It terminates as soon as a match is
            found, providing a short-circuiting behavior.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Check if no name starts with "Z"
boolean noNameStartingWithZ = names.stream()
                                   .noneMatch(name -> name.startsWith("Z"));`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-teal-300 font-bold">
                allMatch(Predicate&lt;T&gt;)
              </span>
              : Returns <span className="font-bold">true</span> if all elements
              match the provided predicate. This operation stops if any element
              does not match the condition.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-teal-300 font-bold">allMatch()</span>{" "}
            method checks if all elements satisfy the given predicate. It stops
            processing as soon as it encounters an element that does not meet
            the condition.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Check if all names are longer than 3 characters
boolean allNamesLongerThan3 = names.stream()
                                   .allMatch(name -> name.length() > 3);`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

ShortCircuitOperations.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
