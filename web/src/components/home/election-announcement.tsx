"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Info,
  Users2,
  Vote,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ElectionAnnouncement() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("isa-elections-2025-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    } else {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("isa-elections-2025-dismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <div
      className={`relative transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-3 border-b-4 border-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold">
            <Vote className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>IMPORTANT ANNOUNCEMENT</span>
            <Vote className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </div>

      {/* Main Announcement Card */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-0 right-0 p-2 rounded-lg bg-background hover:bg-muted shadow-md transition-all hover:scale-110 z-10"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-primary text-primary-foreground mb-4 sm:mb-6 shadow-xl sm:shadow-2xl">
                  <Vote className="h-8 w-8 sm:h-12 sm:w-12" />
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-foreground mb-4 sm:mb-6 leading-tight px-2">
                  ISA Elections 2025-2026
                </h2>
                <div className="max-w-4xl mx-auto mb-4 sm:mb-6">
                  <div className="inline-block bg-primary/10 border-2 border-primary px-3 py-2 sm:px-6 sm:py-3 rounded-full mb-3 sm:mb-4">
                    <p className="text-sm sm:text-lg text-primary font-bold flex items-center gap-1.5 sm:gap-2 justify-center">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      Declaration of Intent Now Open
                    </p>
                  </div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-foreground max-w-3xl mx-auto font-medium leading-relaxed px-2">
                  Step forward and shape the future of ISA. Declaration period
                  ends November 17th.
                </p>
              </div>

              {/* Key Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
                <Card className="p-4 sm:p-6 text-center bg-background hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2">
                    Declaration Period
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                    Nov 13 - 17, 2025
                  </p>
                  <p className="text-xs text-primary font-semibold">
                    Act fast!
                  </p>
                </Card>

                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="p-4 sm:p-6 text-center bg-background hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer group relative">
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Users2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">
                        Who Can Run?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        All Eligible ISA Members
                      </p>
                      <p className="text-xs text-primary font-semibold group-hover:underline">
                        Click to view eligibility criteria
                      </p>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold mb-4">
                        Eligibility Criteria
                      </DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-4 text-left">
                          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                              President & Vice President Requirements
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>Must be in second or third year</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>
                                  Must not have violated the academic or social
                                  honor code
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>Must have a minimum GPA of 2.6</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>
                                  Must have never held the same position
                                  previously
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>
                                  Must demonstrate high leadership skills,
                                  initiative, and the attitude to lead
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>
                                  President brings their own Vice President (run
                                  as a pair)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>
                                  President and Vice President must not be of
                                  the same nationality
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5">
                                  •
                                </span>
                                <span>
                                  Must have never been president or
                                  vice-president (exception: VP can run for
                                  President)
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-muted/50 rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-3">
                              Other Executive Positions
                            </h4>
                            <div className="space-y-4 text-sm">
                              <div>
                                <p className="font-semibold text-foreground mb-2">
                                  General Secretary:
                                </p>
                                <ul className="space-y-1.5 text-muted-foreground ml-4">
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>Must be in second or third year</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                      Must not have violated academic or social
                                      honor code
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>Must have minimum GPA of 2.6</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                      Must demonstrate high leadership skills
                                      and initiative
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground mb-2">
                                  Treasurer, Event Organizer, Public Relations
                                  Officer:
                                </p>
                                <ul className="space-y-1.5 text-muted-foreground ml-4">
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                      Must not have violated academic or social
                                      honor code
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>Must have minimum GPA of 2.6</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                      Must demonstrate high leadership skills
                                      and initiative
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground mb-2">
                                  Regional Representatives:
                                </p>
                                <ul className="space-y-1.5 text-muted-foreground ml-4">
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                      Same requirements as Treasurer, Event
                                      Organizer, and PRO
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                      Must be formally elected (not appointed or
                                      volunteering)
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Note:</strong>{" "}
                              All requirements are detailed in the ISA
                              Constitution. Please review the full document
                              before declaring your intent.
                            </p>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Card className="p-4 sm:p-6 text-center bg-background hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Vote className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Positions Available
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Executive & Leadership Roles
                  </p>
                  <p className="text-xs text-primary font-semibold">
                    10+ positions to fill
                  </p>
                </Card>
              </div>

              {/* Main Message */}
              <Card className="p-4 sm:p-8 lg:p-10 bg-background shadow-xl mb-6 sm:mb-8 border-2 border-primary/20">
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-primary/5 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-primary/20">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 text-center">
                      📅 Election Timeline
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                        <p className="font-bold text-primary mb-1 text-sm sm:text-base">
                          Declaration of Intent
                        </p>
                        <p className="text-xs sm:text-sm text-foreground font-semibold">
                          Nov 13 - 17, 2025
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                        <p className="font-bold text-primary mb-1 text-sm sm:text-base">
                          Vetting
                        </p>
                        <p className="text-xs sm:text-sm text-foreground font-semibold">
                          Nov 19, 2025
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                        <p className="font-bold text-primary mb-1 text-sm sm:text-base">
                          Manifesto Reading
                        </p>
                        <p className="text-xs sm:text-sm text-foreground font-semibold">
                          Nov 21, 2025
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                        <p className="font-bold text-primary mb-1 text-sm sm:text-base">
                          Campaign Period
                        </p>
                        <p className="text-xs sm:text-sm text-foreground font-semibold">
                          Nov 20 - 27, 2025
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                        <p className="font-bold text-primary mb-1 text-sm sm:text-base">
                          Voting
                        </p>
                        <p className="text-xs sm:text-sm text-foreground font-semibold">
                          Nov 28 - 29, 2025
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                        <p className="font-bold text-primary mb-1 text-sm sm:text-base">
                          Results
                        </p>
                        <p className="text-xs sm:text-sm text-foreground font-semibold">
                          Nov 30, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="text-center space-y-4 sm:space-y-8">
                <div className="bg-primary/5 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-primary/20">
                  <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-xl px-6 py-6 sm:px-14 sm:py-8 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300 hover:scale-105 group w-full"
                    >
                      <Link
                        href="https://forms.microsoft.com/r/jBfUpZJ8c2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 sm:gap-3"
                      >
                        <Vote className="h-5 w-5 sm:h-7 sm:w-7 group-hover:rotate-12 transition-transform" />
                        <span>DECLARE YOUR INTENT NOW</span>
                        <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-base sm:text-xl px-6 py-6 sm:px-14 sm:py-8 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full"
                    >
                      <Link
                        href="/documents/ISA-Constitution.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 sm:gap-3"
                      >
                        <FileText className="h-5 w-5 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
                        <span>VIEW CONSTITUTION</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Questions? Contact the ISA executive team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
