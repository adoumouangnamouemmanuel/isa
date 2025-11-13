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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
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
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary text-primary-foreground mb-6 shadow-2xl">
                  <Vote className="h-12 w-12" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                  ISA Elections 2025-2026
                </h2>
                <div className="max-w-4xl mx-auto mb-6">
                  <div className="inline-block bg-primary/10 border-2 border-primary px-6 py-3 rounded-full mb-4">
                    <p className="text-lg sm:text-xl text-primary font-bold flex items-center gap-2 justify-center">
                      <CheckCircle2 className="h-5 w-5" />
                      Declaration of Intent Now Open
                    </p>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                  Are you ready to lead, inspire, and make a lasting impact? The
                  ISA Executive Council is calling for passionate leaders to
                  step forward and shape the future of our community.
                </p>
              </div>

              {/* Key Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="p-6 text-center bg-background hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Declaration Period
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Open Now</p>
                  <p className="text-xs text-primary font-semibold">
                    Limited time - Act fast!
                  </p>
                </Card>

                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="p-6 text-center bg-background hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer group relative">
                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Info className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Users2 className="h-7 w-7 text-primary" />
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

                <Card className="p-6 text-center bg-background hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Vote className="h-7 w-7 text-primary" />
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
              <Card className="p-8 sm:p-10 bg-background shadow-xl mb-8 border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-border">
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
                      🎯 Your Leadership Journey Starts Here
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                      The declaration period is your opportunity to express your
                      commitment to serving the ISA community. Whether
                      you&apos;re passionate about organizing unforgettable
                      events, managing finances, amplifying our voice, or
                      representing your region, there&apos;s a position for
                      you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                    <div className="text-center p-4 rounded-lg bg-primary/5">
                      <div className="text-3xl mb-2">🌍</div>
                      <p className="font-semibold text-foreground">Unite</p>
                      <p className="text-sm text-muted-foreground">
                        500+ Students
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-primary/5">
                      <div className="text-3xl mb-2">🎉</div>
                      <p className="font-semibold text-foreground">Organize</p>
                      <p className="text-sm text-muted-foreground">
                        Amazing Events
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-primary/5">
                      <div className="text-3xl mb-2">💡</div>
                      <p className="font-semibold text-foreground">Innovate</p>
                      <p className="text-sm text-muted-foreground">
                        New Initiatives
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <FileText className="h-6 w-6 text-primary" />
                      The Declaration Process
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                          1
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Read the Constitution
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Download and carefully review the ISA Constitution
                            to understand position requirements and
                            responsibilities.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                          2
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Check Your Eligibility
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Verify that you meet all eligibility criteria for
                            your desired position (GPA, year level, etc.).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                          3
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Submit Your Declaration
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Fill out the declaration form with accurate
                            information about yourself and your leadership
                            vision.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                          4
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Await Review & Prepare
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Your declaration will be reviewed. Approved
                            candidates will proceed to manifesto reading and
                            campaigning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Info className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-2">
                          Important Dates & Timeline
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>
                            • Declaration period opens immediately after ASC
                            presidency installation
                          </li>
                          <li>
                            • Manifesto reading follows one week after
                            declaration closes
                          </li>
                          <li>
                            • Campaign period: One week between manifesto
                            reading and elections
                          </li>
                          <li>
                            • Elections held via secret ballot (virtual or
                            in-person)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="text-center space-y-8">
                <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
                  <p className="text-lg font-semibold text-foreground mb-6">
                    Ready to take the next step in your leadership journey?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-14 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                    >
                      <Link
                        href="https://forms.microsoft.com/r/jBfUpZJ8c2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Vote className="h-7 w-7 group-hover:rotate-12 transition-transform" />
                        <span>DECLARE YOUR INTENT NOW</span>
                        <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-xl px-14 py-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                    >
                      <Link
                        href="/documents/ISA-Constitution.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <FileText className="h-7 w-7 group-hover:scale-110 transition-transform" />
                        <span>VIEW CONSTITUTION</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="bg-background rounded-xl p-6 border border-border shadow-lg">
                    <p className="font-semibold text-foreground mb-3 text-lg">
                      Need Help or Have Questions?
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The current ISA executive team is here to support you
                      throughout the declaration process. Reach out via email,
                      visit us during office hours, or connect with your
                      regional representative for guidance. We&apos;re excited
                      to see your leadership aspirations come to life!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
