import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function IntermediateOperations({ isConcise }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Intermediate Operations
      </h2>

      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        Intermediate operations return a new stream and are lazily executed,
        meaning they are only performed when a terminal operation is invoked.
        These operations can be either{" "}
        <span className="text-blue-300 font-bold">stateless</span> or{" "}
        <span className="text-green-300 font-bold">stateful</span>:
      </p>

      {isConcise ? (
        <>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                filter(Predicate&lt;T&gt;)
              </span>
              : Filters elements based on a condition.{" "}
              <span className="text-blue-300 font-bold">(Stateless)</span>
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Filtering elements
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"));`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                map(Function&lt;T, R&gt;)
              </span>
              : Transforms each element in the stream.{" "}
              <span className="text-blue-300 font-bold">(Stateless)</span>
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Mapping elements to uppercase
List<String> upperCaseNames = names.stream()
                                   .map(String::toUpperCase);`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">
                sorted(Comparator&lt;T&gt;)
              </span>
              : Sorts the elements of a stream.{" "}
              <span className="text-green-300 font-bold">(Stateful)</span>
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Sorting elements
List<String> sortedNames = names.stream()
                                .sorted();`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">distinct()</span>:
              Removes duplicate elements.{" "}
              <span className="text-green-300 font-bold">(Stateful)</span>
            </li>
          </ul>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Removing duplicates
List<Integer> uniqueNumbers = numbers.stream()
                                     .distinct();`}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">
                filter(Predicate&lt;T&gt;)
              </span>
              : Filters elements that match a condition. This is a{" "}
              <span className="text-blue-300 font-bold">stateless</span>{" "}
              operation because it processes each element independently without
              relying on the state from previous elements.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-orange-300 font-bold">filter()</span>{" "}
            method allows for the exclusion of elements that do not meet a
            specified condition. Since each element is evaluated independently,
            the operation does not need to maintain any state about previous
            elements.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Filtering elements
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"));`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-blue-300 font-bold">
                map(Function&lt;T, R&gt;)
              </span>
              : Transforms each element. This is a{" "}
              <span className="text-blue-300 font-bold">stateless</span>{" "}
              operation because it applies the function to each element
              independently.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-blue-300 font-bold">map()</span> method is
            used to apply a function to each element of the stream, transforming
            it into another element. It does not rely on any external state,
            making it a stateless operation.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Mapping elements to uppercase
List<String> upperCaseNames = names.stream()
                                   .map(String::toUpperCase);`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-green-300 font-bold">
                sorted(Comparator&lt;T&gt;)
              </span>
              : Sorts elements in natural order or by a comparator. This is a{" "}
              <span className="text-green-300 font-bold">stateful</span>{" "}
              operation because it requires holding state about the entire input
              stream to sort all the elements.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-green-300 font-bold">sorted()</span>{" "}
            method sorts the elements of the stream according to natural order
            or a specified comparator. This operation is stateful because it
            needs to know the relative ordering of all elements, requiring it to
            hold onto them during processing.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Sorting elements
List<String> sortedNames = names.stream()
                                .sorted();`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-orange-300 font-bold">distinct()</span>:
              Removes duplicate elements from the stream. This is a{" "}
              <span className="text-green-300 font-bold">stateful</span>{" "}
              operation because it must remember the elements it has already
              seen to remove duplicates.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-orange-300 font-bold">distinct()</span>{" "}
            method ensures that the stream contains only unique elements. As it
            needs to track which elements have been encountered, it requires
            maintaining state about the entire set of processed elements, making
            it stateful.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Removing duplicates
List<Integer> uniqueNumbers = numbers.stream()
                                     .distinct();`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-teal-300 font-bold">skip(long n)</span>:
              Skips the first <code>n</code> elements in the stream. This
              operation is useful for pagination or when you want to ignore a
              certain number of elements.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-teal-300 font-bold">skip()</span> method
            allows you to skip over a specified number of elements in a stream.
            It is stateless because it does not depend on the previous elements
            except to count them.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Skipping elements
List<String> skippedNames = names.stream()
                                 .skip(2)
                                 .collect(Collectors.toList());`}
          </SyntaxHighlighter>

          <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            <li>
              <span className="text-purple-300 font-bold">limit(long n)</span>:
              Limits the number of elements in the stream to <code>n</code>.
              This is useful for truncating a stream to a desired size.
            </li>
          </ul>
          <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
            The <span className="text-purple-300 font-bold">limit()</span>{" "}
            method restricts the stream to a certain number of elements. It is
            stateless because it does not need to maintain any information about
            the elements beyond counting them.
          </p>
          <SyntaxHighlighter
            language="java"
            style={oneDark}
            customStyle={customStyle}
          >
            {`// Example: Limiting elements
List<String> limitedNames = names.stream()
                                 .limit(3)
                                 .collect(Collectors.toList());`}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

IntermediateOperations.propTypes = {
  isConcise: PropTypes.bool.isRequired,
};
