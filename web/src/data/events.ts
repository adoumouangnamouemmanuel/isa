export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Cultural" | "Social" | "Professional" | "Academic" | "Sports";
  description: string;
  attendees: number;
  maxAttendees: number;
  image: string;
  isUpcoming: boolean;
  organizer: string;
  tags: string[];
}

export const events: Event[] = [
  // Upcoming Events
  {
    id: 1,
    title: "International Students Futsal Tournament 4th Edition",
    date: "2025-11-1",
    time: "9:00 AM - 5:00 PM",
    location: "Old Basketball Yard",
    category: "Sports",
    description:
      "Join us for the 4th edition of our annual Futsal Tournament! Compete with teams from different countries and showcase your skills.",
    attendees: 85,
    maxAttendees: 120,
    image: "/soccer-tournament.jpg",
    isUpcoming: true,
    organizer: "ISA Sports Committee",
    tags: ["Futsal", "Tournament", "Sports", "Competition"],
  },
  {
    id: 2,
    title: "Get Together",
    date: "2025-12-27",
    time: "6:00 PM - 10:00 PM",
    location: "Courtyard",
    category: "Social",
    description:
      "End the year with our traditional Get Together! A perfect opportunity to connect with fellow international students, share experiences, and celebrate our diverse community.",
    attendees: 150,
    maxAttendees: 200,
    image: "/coffee-hour.jpg",
    isUpcoming: true,
    organizer: "ISA Social Committee",
    tags: ["Social", "Networking", "Community", "Year End"],
  },
  // Past Events
  {
    id: 3,
    title: "Visit to Kwame Nkrumah Park and Art Center",
    date: "2025-10-26",
    time: "10:00 AM - 4:00 PM",
    location: "Kwame Nkrumah Memorial Park, Accra",
    category: "Cultural",
    description:
      "An enriching cultural excursion to explore Ghana's history and art at the Kwame Nkrumah Memorial Park and Art Center. Students learned about Pan-Africanism and Ghana's independence.",
    attendees: 45,
    maxAttendees: 50,
    image: "/international-food-festival.jpg",
    isUpcoming: false,
    organizer: "ISA Cultural Committee",
    tags: ["Cultural", "Trip", "History", "Art", "Ghana"],
  },
  {
    id: 4,
    title: "International Students Tournament 3rd Edition",
    date: "2025-03-08",
    time: "10:00 AM - 5:00 PM",
    location: "New Basketball Courtyard",
    category: "Sports",
    description:
      "The 3rd edition of our annual sports tournament brought together teams from across campus for an exciting day of competition and camaraderie.",
    attendees: 95,
    maxAttendees: 120,
    image: "/soccer-tournament.jpg",
    isUpcoming: false,
    organizer: "ISA Sports Committee",
    tags: ["Tournament", "Sports", "Basketball", "Competition"],
  },
  {
    id: 5,
    title: "Get Together Party 1st Edition",
    date: "2025-04-24",
    time: "7:00 PM - 11:00 PM",
    location: "The Hive",
    category: "Social",
    description:
      "Our inaugural Get Together Party was a huge success! Students enjoyed music, food, and great conversations in a vibrant atmosphere.",
    attendees: 180,
    maxAttendees: 200,
    image: "/coffee-hour.jpg",
    isUpcoming: false,
    organizer: "ISA Social Committee",
    tags: ["Party", "Social", "Music", "Community"],
  },
  {
    id: 6,
    title: "Global Cafe",
    date: "2025-03-04",
    time: "4:00 PM - 7:00 PM",
    location: "Engineering Courtyard",
    category: "Cultural",
    description:
      "Students shared coffee, snacks, and stories from their home countries in this relaxed cultural exchange event.",
    attendees: 65,
    maxAttendees: 80,
    image: "/international-food-festival.jpg",
    isUpcoming: false,
    organizer: "ISA Cultural Committee",
    tags: ["Coffee", "Culture", "Networking", "Food"],
  },
];

// Helper functions to get filtered events
export const getUpcomingEvents = () => {
  return events
    .filter((event) => event.isUpcoming)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = () => {
  return events
    .filter((event) => !event.isUpcoming)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestUpcomingEvents = (limit: number = 3) => {
  return getUpcomingEvents().slice(0, limit);
};
