export default function ProjectsLoading() {
  return (
    <div className="space-y-8">
      {/* Featured project skeleton */}
      <div className="bg-foreground/5 rounded-xl p-6 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="h-6 bg-foreground/10 rounded w-1/3"></div>
            <div className="h-8 bg-foreground/10 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-foreground/10 rounded"></div>
              <div className="h-4 bg-foreground/10 rounded w-5/6"></div>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-16 bg-foreground/10 rounded"></div>
              ))}
            </div>
          </div>
          <div className="aspect-video bg-foreground/10 rounded-lg"></div>
        </div>
      </div>

      {/* Project grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-foreground/5 rounded-xl p-6 animate-pulse">
            <div className="space-y-4">
              <div className="aspect-video bg-foreground/10 rounded-lg"></div>
              <div className="h-6 bg-foreground/10 rounded w-2/3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-foreground/10 rounded"></div>
                <div className="h-4 bg-foreground/10 rounded w-4/5"></div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-5 w-12 bg-foreground/10 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}