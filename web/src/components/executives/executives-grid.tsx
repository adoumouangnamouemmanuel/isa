"use client";

import { ExecutiveCard } from "./executive-card";

export interface Executive {
  id: number;
  name: string;
  position: string;
  image: string;
  country: string;
  major: string;
  classYear: string;
  category: "leadership" | "executive" | "regional";
  email?: string;
  linkedin?: string;
}

const executives: Executive[] = [
  {
    id: 1,
    name: "Emmanuel Adoum",
    position: "President",
    image: "/emmanuel-jpg.jpg",
    country: "Chad",
    major: "Computer Engineering",
    classYear: "2027",
    category: "leadership",
    email: "emmanuel.adoum@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/emmanueladoum",
  },
  {
    id: 2,
    name: "Suzie Youyou",
    position: "Vice-President",
    image: "/executives_pictures/suzie.jpg",
    country: "Cameroon",
    major: "Computer Science",
    classYear: "2027",
    category: "leadership",
    email: "agatha.youyou@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/suzie-youyou",
  },
  {
    id: 3,
    name: "Favour Amourzang",
    position: "Secretary General",
    image: "/placeholder.svg?height=400&width=400",
    country: "Cameroon",
    major: "Computer Science",
    classYear: "2027",
    category: "executive",
    email: "favour.amourzang@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/favour-amourzang-fri-fon",
  },
  {
    id: 4,
    name: "Adelard Borauzima",
    position: "Treasurer",
    image: "/executives_pictures/Adelard.jpg",
    country: "DRC",
    major: "Computer Science",
    classYear: "2027",
    category: "executive",
    email: "borauzima.adelard@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/borauzima-adelard-a6875b2ab",
  },
  {
    id: 5,
    name: "Kur Malual Majok",
    position: "Public Relations Officer",
    image: "/executives_pictures/kur.jpg",
    country: "South Sudan",
    major: "Computer Science",
    classYear: "2027",
    category: "executive",
    email: "kur.malual@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/kur-malual",
  },
  {
    id: 6,
    name: "Bachira Mamane",
    position: "Event Organizer",
    image: "/executives_pictures/bachira.jpg",
    country: "Niger",
    major: "Business Administration",
    classYear: "2027",
    category: "executive",
    email: "bachira.niandou@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/mamane-niandou-bachira",
  },
  {
    id: 7,
    name: "Abraham Aguer",
    position: "East Africa Rep",
    image: "/executives_pictures/abraham.jpg",
    country: "South Sudan",
    major: "Computer Science",
    classYear: "2027",
    category: "regional",
    email: "abraham.garangatem@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/abraham-aguer-garang-atem",
  },
  {
    id: 8,
    name: "Raicha Adamou Ibrahim",
    position: "West Africa Rep",
    image: "/placeholder.svg?height=400&width=400",
    country: "Niger",
    major: "Management Information Systems",
    classYear: "2027",
    category: "regional",
    email: "raicha.ibrahim@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/raicha-adamou",
  },
  {
    id: 9,
    name: "Brenda Ngie Nyah",
    position: "Central Africa Rep",
    image: "/executives_pictures/brenda.jpg",
    country: "Cameroon",
    major: "Management Information Systems",
    classYear: "2027",
    category: "regional",
    email: "brenda.nyah@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/brenda-ngie-nyah-a7467525b",
  },
  {
    id: 10,
    name: "Hillary Kiduhu Ndeda",
    position: "Graduate Rep",
    image: "/executives_pictures/hillary.jpg",
    country: "Kenya",
    major: "Mechatronics Engineering",
    classYear: "Graduate",
    category: "regional",
    email: "hillary.ndeda@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/hillary-kiduhu-a1435b158",
  },
];

export function ExecutivesGrid() {
  const leadershipTeam = executives.filter(
    (exec) => exec.category === "leadership"
  );
  const executiveTeam = executives.filter(
    (exec) => exec.category === "executive"
  );
  const regionalReps = executives.filter(
    (exec) => exec.category === "regional"
  );

  return (
    <div className="space-y-16">
      {/* Leadership Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Leadership Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Guiding the vision and direction of ISA
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadershipTeam.map((exec, index) => (
            <div
              key={exec.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up"
            >
              <ExecutiveCard executive={exec} />
            </div>
          ))}
        </div>
      </section>

      {/* Executive Team Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Executive Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Managing operations and events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveTeam.map((exec, index) => (
            <div
              key={exec.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up"
            >
              <ExecutiveCard executive={exec} />
            </div>
          ))}
        </div>
      </section>

      {/* Regional Representatives Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Regional Representatives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Representing our diverse African regions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regionalReps.map((exec, index) => (
            <div
              key={exec.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up"
            >
              <ExecutiveCard executive={exec} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
