export default function WhenStreamsNotIdeal() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        When Streams May Not Be Ideal
      </h2>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          - Small datasets: The overhead of setting up a stream can outweigh the
          benefits.
        </li>
        <li>
          - Simple operations: Streams may add unnecessary complexity for
          simpler operations.
        </li>
        <li>
          - I/O heavy operations: Latency issues, such as waiting for data from
          a database, will dominate runtime regardless of lazy evaluation or
          parallelism.
        </li>
        <li>
          - Memory constraints: Operations like sorting or collecting large
          datasets can require a lot of memory, especially if multiple
          operations are chained.
        </li>
      </ul>
    </div>
  );
}
