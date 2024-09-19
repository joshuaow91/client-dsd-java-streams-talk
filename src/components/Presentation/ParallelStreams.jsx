export default function ParallelStreams() {
  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-16 pb-24 md:pb-48">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Parallel Streams</h2>
      <p className="text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        - Parallel streams provide a way to take advantage of multiple CPU cores
        by breaking down the work into smaller tasks that run concurrently.
      </p>
      <h3 className="text-xl font-semibold">Trade-offs:</h3>
      <ul className="list-disc marker:text-pink-500 list-inside text-lg md:text-2xl mb-6 leading-8 md:leading-10">
        <li>
          - Reduced runtime: With large datasets, the work can be divided among
          multiple threads, reducing the total time to complete the task.
        </li>
        <li>
          - Increased memory usage: Typically consumes more memory compared to
          sequential streams, as tasks are divided/executed in separate threads.
        </li>
        <li>
          - Considerations: Thread management, synchronization, and task
          coordination.
        </li>
      </ul>
    </div>
  );
}
