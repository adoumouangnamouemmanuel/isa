import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Brand Section */}
        <div className="mb-6 sm:mb-10 pb-6 sm:pb-8 border-b border-border/40">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8">
            {/* Logo & Tagline */}
            <div className="space-y-2 sm:space-y-3 max-w-md">
              <div className="flex items-center gap-2.5">
                {/* Enhanced Logo */}
                <Link href="/" className="flex items-center space-x-2.5 group">
                  <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/icons/logo.png"
                      alt="ISA Logo"
                      width={40}
                      height={40}
                      className="object-contain bg-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      ISA
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      Ashesi University
                    </p>
                  </div>
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Connecting international students through community, events, and
                resources.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                Follow Us
              </h4>
              <div className="flex gap-2 sm:gap-3">
                <Link
                  href="https://facebook.com/ISAAshesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="https://twitter.com/ISAAshesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="https://instagram.com/ISAAshesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-10">
          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/events"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:isa@ashesi.edu.gh"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer break-all"
                >
                  isa@ashesi.edu.gh
                </a>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Ashesi University
                  <br />
                  Berekuso, Ghana
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">
              Legal
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-[10px] sm:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ISA Ashesi. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with{" "}
              <Heart
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-red-500"
                fill="currentColor"
              />{" "}
              by ISA Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
