export default function WhenToUseParallelStreams() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        When to Use Parallel Streams
      </h2>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          - Large datasets: When large enough to justify the overhead of
          managing multiple threads.
        </li>
        <li>
          - Computationally heavy operations: If operations are computationally
          heavy, parallelism will reduce runtime.
        </li>
        <li>
          - Multi-core systems: Parallel streams are more beneficial on machines
          with multiple CPU cores.
        </li>
      </ul>
    </div>
  );
}
