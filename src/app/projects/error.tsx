"use client";

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Something went wrong</h2>
        <p className="text-foreground/70 max-w-md">
          We encountered an error while loading the projects. This might be a temporary issue.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200"
        >
          Try Again
        </button>
        
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200"
        >
          Back to Home
        </a>
      </div>
      
      {process.env.NODE_ENV === "development" && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-foreground/60 hover:text-foreground/80">
            Error Details (Development)
          </summary>
          <pre className="mt-2 p-4 bg-foreground/5 rounded-lg text-xs overflow-auto max-w-2xl">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  );
}