"use client";

import { getUser } from "@/app/actions/auth";
import { getProfileImageUrl } from "@/app/actions/storage";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenu } from "@/components/user-menu";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Calendar,
  Home,
  Image as ImageIcon,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Members", href: "/members", icon: Users },
  { name: "Executives", href: "/executives", icon: Shield },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch user and profile image on mount
    getUser().then(async (fetchedUser) => {
      setUser(fetchedUser);
      if (fetchedUser) {
        const imageUrl = await getProfileImageUrl(fetchedUser.id);
        setProfileImageUrl(imageUrl);
      }
    });
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        // Mobile: always solid background
        "bg-background shadow-lg border-b border-border/50 lg:shadow-none",
        // Desktop: transparent with blur when scrolled
        scrolled
          ? "lg:bg-background/80 lg:backdrop-blur-xl lg:shadow-lg lg:border-b lg:border-border/50"
          : "lg:bg-background/60 lg:backdrop-blur-md lg:border-b lg:border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Image
                src="/icons/logo.png"
                alt="ISA Logo"
                width={44}
                height={44}
                className="object-contain bg-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                ISA
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground tracking-wide -mt-1">
                ASHESI
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group",
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isActive && "animate-pulse"
                    )}
                  />
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <UserMenu user={user} profileImageUrl={profileImageUrl} />
            ) : (
              <Button
                asChild
                className="relative bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <Link href="/join" className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Join ISA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
              </Button>
            )}
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-all duration-300 hover:scale-105"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-background/95 backdrop-blur-xl border-l border-border/50"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-border/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/icons/logo.png"
                        alt="ISA Logo"
                        width={40}
                        height={40}
                        className="object-contain bg-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-foreground">
                        ISA
                      </span>
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        Ashesi University
                      </span>
                    </div>
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="flex flex-col space-y-1.5 flex-1">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "relative flex items-center space-x-2.5 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300",
                            isActive
                              ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              isActive && "animate-pulse"
                            )}
                          />
                          <span>{item.name}</span>
                          {isActive && (
                            <div className="absolute right-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse"></div>
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="pt-4 border-t border-border/50 space-y-2.5">
                    {user ? (
                      <div className="space-y-2">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-10 text-sm"
                        >
                          <Link
                            href="/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center"
                          >
                            <Users className="mr-2 h-4 w-4" />
                            View Profile
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-10 text-sm border-primary/30 text-primary hover:bg-primary/10"
                        >
                          <Link
                            href="/settings"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            Settings
                          </Link>
                        </Button>
                        <p className="text-[10px] text-center text-muted-foreground px-3 truncate">
                          {user.email}
                        </p>
                      </div>
                    ) : (
                      <>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold shadow-lg h-10 text-sm"
                        >
                          <Link
                            href="/join"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center"
                          >
                            <Sparkles className="mr-2 h-4 w-4" />
                            Join ISA Today
                          </Link>
                        </Button>
                        <p className="text-[10px] text-center text-muted-foreground px-3 leading-tight">
                          Join our community of 500+ international students
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
