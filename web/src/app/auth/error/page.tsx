import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md text-center space-y-6 bg-background/95 backdrop-blur p-8 rounded-2xl border shadow-xl">
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertCircle className="h-16 w-16 text-destructive" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Authentication Error</h1>
          <p className="text-muted-foreground">
            There was a problem confirming your email address. The link may have
            expired or already been used.
          </p>
        </div>
        <div className="space-y-3 pt-4">
          <Button asChild className="w-full">
            <Link href="/join">Try Signing Up Again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
