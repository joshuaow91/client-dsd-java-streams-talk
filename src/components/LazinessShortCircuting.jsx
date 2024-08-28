import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function LazinessAndShortCircuiting() {
  return (
      <div className="max-w-5xl mx-auto pb-48">
        <h3 className="text-6xl font-semibold mt-16 mb-4">
          Laziness and Short-Circuiting
        </h3>
        <p className="text-2xl mb-6 leading-10">
          Streams are lazy, meaning they only process elements as needed. This
          allows for optimizations such as short-circuiting, where processing
          stops as soon as a result is found. For Example (
          <code className="text-blue-300">findFirst()</code>,{" "}
          <code className="text-blue-300">anyMatch()</code>).
        </p>

        <SyntaxHighlighter language="java" style={oneDark}>
          {`// Example of short-circuiting with findFirst()
List<String> names = Arrays.asList("Michael", "Angela", "Jim", "Pam", "Dwight");
String firstNameStartingWithA = names.stream()
                                     .filter(name -> name.startsWith("A"))
                                     .findFirst()
                                     .orElse("No match");`}
        </SyntaxHighlighter>
      </div>
  );
}
