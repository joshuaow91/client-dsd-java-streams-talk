import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customStyle } from "../../utils/codeBlockStyles";

export default function StreamPipeline() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-7xl font-bold text-white/90 mb-4">
        Stream Pipeline
      </h2>

      <ul className="list-disc marker:text-pink-500 pl-6 text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          Streams create a pipeline with three stages:
          <ul className="list-disc marker:text-pink-400 pl-6">
            <li>
              <span className="text-orange-300 font-bold">Source</span>
            </li>
            <li>
              <span className="text-green-300 font-bold">Intermediate</span>:
              Lazy, doesn&apos;t immediately affect memory, only impacts runtime
              when a terminal operation is invoked.
            </li>
            <li>
              <span className="text-blue-300 font-bold">Terminal</span>:
              Triggers stream execution and determines the actual runtime cost.
            </li>
          </ul>
        </li>
        <li>
          The more complex the terminal operation, the higher the potential
          memory and runtime usage.
        </li>
      </ul>

      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={customStyle}
      >
        {`// Example: Filtering Names
List<String> names = Arrays.asList("Michael", "Jim", "Pam", "Dwight", "Angela");
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"))
                                  .toList();
// Result: ["Angela"]`}
      </SyntaxHighlighter>
    </div>
  );
}
