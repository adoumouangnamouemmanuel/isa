import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, Phone, MessageCircle, Users } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
          <p className="text-muted-foreground">Get in touch with us through any of these channels.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">isa@university.edu</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Office Location</p>
              <p className="text-sm text-muted-foreground">
                Student Union Building, Room 205
                <br />
                123 University Ave
                <br />
                University City, State 12345
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Office Hours</p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: 10:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media & Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Connect With Us</CardTitle>
          <p className="text-muted-foreground">Follow us on social media for the latest updates.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="outline" size="sm" className="bg-transparent">
              <Link href="https://instagram.com/isa_university" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Instagram
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="bg-transparent">
              <Link href="https://facebook.com/isa.university" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-4 w-4" />
                Facebook
              </Link>
            </Button>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium text-foreground mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                <Link href="/events">View Upcoming Events</Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                <Link href="/members">Browse Member Directory</Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                <Link href="/resources">Access Resources</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground text-sm mb-1">How do I join ISA?</h4>
            <p className="text-sm text-muted-foreground">
              Simply attend one of our events or contact us directly. Membership is free for all international students.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground text-sm mb-1">When do you meet?</h4>
            <p className="text-sm text-muted-foreground">
              We hold general meetings every two weeks and organize various events throughout the semester.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground text-sm mb-1">Can I volunteer?</h4>
            <p className="text-sm text-muted-foreground">
              We're always looking for volunteers to help with events and activities. Contact us to learn more.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
