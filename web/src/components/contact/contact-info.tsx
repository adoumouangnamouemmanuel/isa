import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-foreground font-bold">
            Contact Information
          </CardTitle>
          <p className="text-muted-foreground">
            Get in touch with us through any of these channels.
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          <a
            href="mailto:isa@university.edu"
            className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                isa@ashesi.edu.gh
              </p>
            </div>
          </a>

          <a
            href="tel:+15551234567"
            className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                +233 50 367 3195
              </p>
            </div>
          </a>

          <div className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 bg-muted/30">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                Office Location
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ashesi University Campus
                <br />
                1 University Avenue, Berekuso
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media & Quick Links */}
      <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl text-foreground font-bold">
            Connect With Us
          </CardTitle>
          <p className="text-muted-foreground">
            Follow us on social media for the latest updates.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              className="h-12 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Link
                href="https://instagram.com/isa_university"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Instagram
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Link
                href="https://facebook.com/isa.university"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="mr-2 h-4 w-4" />
                Facebook
              </Link>
            </Button>
          </div>

          <div className="pt-4 border-t border-border/50">
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
              Quick Actions
            </h4>
            <div className="space-y-2">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Link href="/events">View Upcoming Events</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Link href="/members">Browse Member Directory</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Link href="/resources">Access Resources</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl text-foreground font-bold">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold mr-2">
                Q
              </span>
              How do I join ISA?
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              Simply attend one of our events or contact us directly. Membership
              is free for all international students.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold mr-2">
                Q
              </span>
              When do you meet?
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              We hold general meetings every two weeks and organize various
              events throughout the semester.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold mr-2">
                Q
              </span>
              Can I volunteer?
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              We&apos;re always looking for volunteers to help with events and
              activities. Contact us to learn more.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
