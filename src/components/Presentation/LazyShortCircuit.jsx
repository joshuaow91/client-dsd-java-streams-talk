import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function LazyShortCircuiting() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-7xl font-bold text-white/90 mb-4">
        Lazy Evaluation / Short-Circuiting
      </h2>

      <ul className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          <span className="text-blue-300 font-bold">Lazy evaluation</span> helps
          optimize performance by delaying execution of operations until a
          result is required.
        </li>
        <li>
          If we had a large list of 1000 elements and streams were{" "}
          <span className="text-orange-300 font-bold">eagerly processed</span>,
          then every element would be processed, even if we only needed one
          result. With{" "}
          <span className="text-green-300 font-bold">lazy evaluation</span>, the
          stream stops processing as soon as the condition is satisfied.
        </li>
      </ul>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> result = names.stream()
    .filter(name -> name.length() > 3)  // This won’t run yet
    .map(String::toUpperCase)           // Still won’t run
    .findFirst()                        // Triggers the execution
    .orElse("No match");     // Provides default if no matching element is found`}
      </SyntaxHighlighter>
    </div>
  );
}
