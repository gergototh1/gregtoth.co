export default function Loading() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="space-y-4">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-20"></div>
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-32"></div>
      </div>

      <div className="space-y-6">
        <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-48"></div>
        <div className="space-y-3">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  )
}