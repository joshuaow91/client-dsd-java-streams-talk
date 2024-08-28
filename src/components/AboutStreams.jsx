import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AboutSection() {
  return (
    <section className="py-16 text-gray-300 rounded-3xl">
      <div className="max-w-5xl mx-auto">
        {/* What are Java Streams */}
        <h2 className="text-6xl font-bold mb-4">What are Java Streams?</h2>
        <p className="text-2xl mb-6 leading-10">
          Java 8 introduced the Streams API, revolutionizing the way we perform
          operations on collections by providing a more functional, declarative
          approach. Streams allow Java to bridge the gap between imperative
          programming (using explicit loops and conditionals) and functional
          programming (using operations like{" "}
          <code className="text-red-300">map</code>,{" "}
          <code className="text-red-300">filter</code>, and{" "}
          <code className="text-red-300">reduce</code>).
        </p>
        <ul className="list-disc marker:text-pink-500 list-inside text-2xl mb-6 leading-10">
          <li>
            Simplifies data processing with <u>concise</u> and <u>readable</u>{" "}
            code.
          </li>
          <li>
            Allows for easy manipulation of collections, arrays, and more.
          </li>
          <li>
            Supports parallel processing, making it easier to write concurrent
            code.
          </li>
          <li>
            Offers a functional approach, making your code more{" "}
            <u>expressive.</u>
          </li>
        </ul>

        {/* Example of Declarative Approach */}
        <SyntaxHighlighter language="java" style={oneDark}>
          {`//Streams Code
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

public List<String> filterNamesUsingStream(List<String> names) {
    List<String> filteredNames = names.stream()
                                      .filter(name -> name.startsWith("A"))
                                      .collect(Collectors.toList());
    return filteredNames;
}`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="java" style={oneDark}>
          {`//For Loop Equivalent
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

public List<String> filterNamesUsingLoop(List<String> names) {
    List<String> filteredNames = new ArrayList<>();
    for (String name : names) {
        if (name.startsWith("A")) {
            filteredNames.add(name);
        }
    }
    return filteredNames;
}`}
        </SyntaxHighlighter>

        <p className="text-2xl mt-6 mb-4 leading-10">
          In the <strong>Streams</strong> example, we&apos;re using a more{" "}
          <em>declarative approach</em>. This means we&apos;re focusing on{" "}
          <strong>what</strong> we want to achieve—filtering names that start
          with &apos;A&apos;—without worrying about the <strong>how</strong>
          —like writing the actual loop or conditions. The{" "}
          <code className="text-red-300">filter()</code> method takes care of
          those details for us.
        </p>

        <p className="text-2xl mb-4 leading-10">
          On the other hand, in the <strong>For Loop</strong> example,
          we&apos;re writing out every single step ourselves. We tell the
          program exactly <strong>how</strong> to loop through the list, check
          each name, and add it to a new list if it meets our condition.
        </p>

        <p className="text-2xl mb-48 leading-10">
          Using <strong>Streams</strong> makes our code shorter and easier to
          read, because we let Java handle the low-level details.
        </p>

        {/* How Streams Work */}
        <h2 className="text-6xl font-bold mb-6 max-w-3xl">
          How Streams Work (Stream Pipeline)
        </h2>
        <p className="text-2xl mb-2 leading-10">
          A Stream pipeline consists of three parts:{" "}
          <strong className="text-orange-300">Source</strong>,{" "}
          <strong className="text-blue-300">Intermediate Operations</strong>,
          and a <strong className="text-red-300">Terminal Operation</strong>.
        </p>

        <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
          <li>
            <strong className="text-orange-300">Source</strong>: The data source
            for the stream (like a collection or an array).
          </li>
          <li>
            <strong className="text-blue-300">Intermediate Operations</strong>:
            The steps that transform the data (e.g.,{" "}
            <code className="text-blue-300">filter()</code>,{" "}
            <code className="text-blue-300">map()</code>). These operations are
            lazy, meaning they don’t execute until a terminal operation is
            invoked.
          </li>
          <li>
            <strong className="text-red-300">Terminal Operation</strong>: The
            final step that triggers the execution of the stream pipeline and
            produces a result or a side effect (e.g.,{" "}
            <code className="text-red-300">collect()</code>,{" "}
            <code className="text-red-300">forEach()</code>).
          </li>
        </ul>

        <SyntaxHighlighter language="java" style={oneDark}>
          {`// Example of Stream Pipeline

// Source: A list of names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

// Stream pipeline: Source -> Intermediate Operations -> Terminal Operation
List<String> filteredNames = names.stream()                 // Source
                                  .filter(name -> name.startsWith("A"))  // Intermediate Operation
                                  .map(String::toUpperCase)  // Intermediate Operation
                                  .collect(Collectors.toList());  // Terminal Operation
                                  // .toList(); - Introduced as Terminal Operation in Java 16

// The resulting list: ["ALICE"]
`}
        </SyntaxHighlighter>

        {/* Immutability in Streams */}
        <h3 className="text-6xl font-semibold mb-4 mt-16">
          Immutability in Streams
        </h3>
        <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
          <li>
            <strong className="text-orange-300">
              Non-Destructive Operations:
            </strong>{" "}
            Operations performed on a stream, such as{" "}
            <code className="text-red-300">filter()</code>,{" "}
            <code className="text-red-300">map()</code>, or{" "}
            <code className="text-red-300">sorted()</code>, create a new stream
            representing the result without modifying the original data source.
          </li>
          <li>
            <strong className="text-orange-300">Chaining Operations:</strong>{" "}
            Multiple operations can be chained together to build a processing
            pipeline. Each operation creates a new stream object reflecting the
            applied transformations or filtering, while the original data
            structure remains unaffected.
          </li>
        </ul>

        <SyntaxHighlighter language="java" style={oneDark}>
          {`// Example of immutability in streams

List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");

// Chaining operations on the stream
List<String> processedNames = names.stream()                   // Original data source unchanged
                                   .filter(name -> name.length() > 3) // Intermediate: filter
                                   .map(String::toUpperCase)          // Intermediate: map
                                   .sorted()                          // Intermediate: sorted
                                   .toList();                         // Terminal: toList

// The original list 'names' is unchanged
// The resulting list 'processedNames' contains the modified elements: ["ANGELA", "DWIGHT", "MICHAEL"]
`}
        </SyntaxHighlighter>

        <p className="text-2xl mb-6 mt-6 leading-10">
          This code example shows how multiple operations can be applied to a
          stream without changing the original list. The stream pipeline starts
          with the original list <code className="text-red-300">names</code> and
          creates a new list{" "}
          <code className="text-red-300">processedNames</code> containing
          filtered, mapped, and sorted names. The original data remains
          unchanged, demonstrating the immutability of streams.
        </p>

        {/* Explanation of Laziness and Short-Circuiting */}
        <h3 className="text-6xl font-semibold mt-16 mb-4">
          Laziness and Short-Circuiting
        </h3>
        <p className="text-2xl mb-6 leading-10">
          Streams are lazy, meaning they only process elements as needed. This
          allows for optimizations such as short-circuiting, where processing
          stops as soon as a result is found <br />
          For Example (<code className="text-blue-300">findFirst()</code>,{" "}
          <code className="text-blue-300">anyMatch()</code>).
        </p>

        {/* Short-Circuiting Example */}
        <SyntaxHighlighter language="java" style={oneDark}>
          {`// Example of short-circuiting with findFirst()
List<String> names = Arrays.asList("Michael", "Angela", "Jim", "Pam", "Dwight");
String firstNameStartingWithA = names.stream()
                                     .filter(name -> name.startsWith("A"))
                                     .findFirst()
                                     .orElse("No match");`}
        </SyntaxHighlighter>

        {/* Additional Important Aspects of a Pipeline */}
        <h3 className="text-6xl font-semibold mb-4 mt-16">
          Additional Aspects of a Pipeline
        </h3>
        <ul className="list-disc list-inside text-2xl mb-6 leading-10 marker:text-pink-500">
          <li>
            <strong className="text-orange-300">
              Statefulness vs. Statelessness:
            </strong>{" "}
            Operations like <code className="text-blue-300">sorted()</code> and{" "}
            <code className="text-blue-300">distinct()</code> are stateful
            because they require examining multiple elements to produce a
            result. In contrast, operations like{" "}
            <code className="text-blue-300">map()</code> and{" "}
            <code className="text-blue-300">filter()</code> are stateless as
            they do not rely on the state from previous elements in the stream.
          </li>
          <li>
            <strong className="text-orange-300">
              Performance Considerations:
            </strong>{" "}
            Operations like <code className="text-blue-300">limit()</code> and{" "}
            <code className="text-blue-300">skip()</code> are particularly
            useful when working with large datasets because they can reduce the
            number of elements processed. Lazy operations help avoid unnecessary
            computation.
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

        {/* Parallel Streams */}
        {/* <h3 className="text-6xl font-semibold mb-4 mt-16">Parallel Streams</h3>
        <p className="text-2xl mb-6 leading-10">
          Parallel streams allow for concurrent processing by splitting tasks
          across multiple threads, which can significantly improve performance,
          especially with large datasets.
        </p>

        <SyntaxHighlighter
          language="java"
          style={oneDark}
        >
          {`// Example of a parallel stream
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
int sum = numbers.parallelStream()
                 .filter(num -> num % 2 == 0)
                 .reduce(0, Integer::sum);`}
        </SyntaxHighlighter>

        <p className="text-xl leading-10">
          By using <code>parallelStream()</code>, the operations are
          automatically distributed across multiple threads, enhancing
          performance on multi-core systems.
        </p> */}

        {/* Limitations of Streams */}
        <h3 className="text-6xl font-semibold mb-4 mt-16">
          Limitations of Streams
        </h3>
        <ul className="list-disc list-inside text-2xl mb-48 leading-10">
          <li>
            <strong className="text-orange-300">Once-Only Usage:</strong>{" "}
            Streams cannot be reused once they’ve been operated upon or
            consumed. If you need to traverse a stream more than once, create a
            new stream.
          </li>
          <li>
            <strong className="text-orange-300">No Direct Index Access:</strong>{" "}
            Unlike traditional loops, streams do not support indexed access,
            which can make certain operations less straightforward.
          </li>
          <li>
            <strong className="text-orange-300">
              Debugging and Stack Traces:
            </strong>{" "}
            Debugging streams can be more challenging due to the functional and
            lambda-based syntax, which can lead to less informative stack
            traces.
          </li>
        </ul>
      </div>
    </section>
  );
}
