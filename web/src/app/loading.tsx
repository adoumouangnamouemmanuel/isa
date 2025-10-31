export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl animate-float">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-foreground">Loading ISA</h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            Preparing your experience...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden relative">
          <div className="h-full w-full bg-gradient-to-r from-primary via-secondary to-accent absolute animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
