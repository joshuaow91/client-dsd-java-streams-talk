import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function TerminalOperations({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Terminal Operations
      </h2>

      {isConcise ? (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Terminal operations produce a result or side effect and mark the end
            of the stream pipeline.
          </p>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                collect(Collector&lt;T, A, R&gt;)
              </span>
              : Gathers elements into a collection.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Collecting elements to a list
List<String> collectedNames = names.stream()
                                   .collect(Collectors.toList());`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">
                forEach(Consumer&lt;T&gt;)
              </span>
              : Performs an action for each element.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Printing each element
names.stream().forEach(System.out::println);`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                reduce(BinaryOperator&lt;T&gt;)
              </span>
              : Combines elements to produce a single result.
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Reducing to sum
Integer sum = numbers.stream()
                     .reduce(0, Integer::sum);`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            Terminal operations trigger the processing of the stream and produce
            a final result or side effect. Once a terminal operation is
            executed, the stream is considered consumed and cannot be reused.
          </p>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                collect(Collector&lt;T, A, R&gt;)
              </span>
              : Accumulates elements into a collection, such as a{" "}
              <code>List</code>, <code>Set</code>, or <code>Map</code>. This
              operation is commonly used to gather the processed stream elements
              into a different data structure.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-blue-300 font-bold">collect()</span>{" "}
            method is a very versatile terminal operation that can be used to
            transform a stream into a collection or a summarized result. This
            makes it one of the most commonly used operations for converting the
            output of a stream back into a concrete collection.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Collecting elements to a list
List<String> collectedNames = names.stream()
                                   .collect(Collectors.toList());`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">
                forEach(Consumer&lt;T&gt;)
              </span>
              : Iterates over each element and performs a specified action. This
              is useful for executing a block of code on each element, such as
              printing them or updating a variable.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-green-300 font-bold">forEach()</span>{" "}
            method is often used for its side effects, like printing each
            element to the console. It is an easy way to iterate over elements
            and apply some action without modifying the original data structure.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Printing each element
names.stream().forEach(System.out::println);`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                reduce(BinaryOperator&lt;T&gt;)
              </span>
              : Reduces the stream to a single value using a binary operator.
              This operation is used to perform aggregation functions, such as
              summing numbers or concatenating strings.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-orange-300 font-bold">reduce()</span>{" "}
            method is a powerful terminal operation that takes a binary operator
            and applies it repeatedly to combine elements into a single result.
            It is highly useful for operations like summing, multiplying, or
            finding the maximum or minimum value.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Reducing to sum
Integer sum = numbers.stream()
                     .reduce(0, Integer::sum);`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-purple-300 font-bold">count()</span>:
              Returns the count of elements in the stream. This operation is
              particularly useful when you need to determine the number of
              elements that match a particular condition or to simply count the
              number of elements in a collection.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-purple-300 font-bold">count()</span>{" "}
            method is a straightforward terminal operation that returns the
            number of elements in the stream. It is often used to determine how
            many elements meet a certain condition after applying a filter.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Counting elements
long count = names.stream()
                  .filter(name -> name.length() > 3)
                  .count();
// Result: 3`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-teal-300 font-bold">
                anyMatch(Predicate&lt;T&gt;)
              </span>
              : Returns <code>true</code> if any elements of the stream match
              the provided predicate. It is a short-circuiting terminal
              operation that stops processing as soon as a matching element is
              found.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-teal-300 font-bold">anyMatch()</span>{" "}
            method is highly efficient for checking if at least one element
            meets a specific condition. It is especially useful in large
            datasets or streams where an early exit can save processing time.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Check if any names start with "M"
boolean hasNameStartingWithM = names.stream()
                                    .anyMatch(name -> name.startsWith("M"));
// Result: true`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

TerminalOperations.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
