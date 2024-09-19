import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function LazyShortCircuiting() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Lazy Evaluation / Short-Circuiting
      </h2>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - Lazy evaluation helps optimize performance by delaying execution of
        operations until a result is required.
      </p>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - If we had a large list of 1000 elements and streams were eagerly
        processed, then every element would be processed even if we only needed
        one result. With lazy evaluation, the stream stops processing as soon as
        the condition is satisfied.
      </p>
      <SyntaxHighlighter language="java" style={oneDark}>
        {`List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> result = names.stream()
    .filter(name -> name.length() > 3) // This won’t run yet
    .map(String::toUpperCase)          // Still won’t run
    .findFirst()                       // Triggers the execution
    .orElse("No match"); // provides default if no matching element found`}
      </SyntaxHighlighter>
    </div>
  );
}
