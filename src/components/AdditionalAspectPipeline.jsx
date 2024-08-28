export default function AdditionalAspectsOfPipeline() {
  return (
      <div className="max-w-5xl mx-auto pb-48">
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
      </div>
  );
}
