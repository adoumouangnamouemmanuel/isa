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
  photos?: string[]; // Array of photo URLs for gallery
}

export const events: Event[] = [
  // Upcoming Events
  {
    id: 1,
    title: "International Students Futsal Tournament 4th Edition",
    date: "2025-11-1",
    time: "7:00 PM - 10:00 PM",
    location: "New Basketball Courtyard",
    category: "Sports",
    description:
      "Join us for the 4th edition of our annual Futsal Tournament! Compete with teams from different countries and showcase your skills.",
    attendees: 190,
    maxAttendees: 200,
    image: "/events/futsal3.jpg",
    isUpcoming: true,
    organizer: "ISA Sports Committee",
    tags: ["Futsal", "Tournament", "Sports", "Competition"],
    photos: ["/images/futsal_edition_4/f1.jpg",
    "/images/futsal_edition_4/f2.jpg",
    "/images/futsal_edition_4/f3.jpg",
    "/images/futsal_edition_4/f4.jpg",
    "/images/futsal_edition_4/f5.jpg",
    "/images/futsal_edition_4/f6.jpg",
    "/images/futsal_edition_4/f7.jpg",
    "/images/futsal_edition_4/f8.jpg",
    "/images/futsal_edition_4/f9.jpg",
    // "/images/futsal_edition_4/f10.jpg",
    ],
  },
  {
    id: 2,
    title: "Get Together",
    date: "2025-12-27",
    time: "4:00 PM - 6:00 PM",
    location: "Courtyard",
    category: "Social",
    description:
      "End the year with our traditional Get Together! A perfect opportunity to connect with fellow international students, share experiences, and celebrate our diverse community.",
    attendees: 150,
    maxAttendees: 200,
    image: "/events/getTogether1.jpg",
    isUpcoming: true,
    organizer: "ISA Social Committee",
    tags: ["Social", "Networking", "Community", "Year End"],
  },
  // Past Events
  {
    id: 3,
    title: "Visit to Kwame Nkrumah Park and Art Center",
    date: "2025-10-26",
    time: "8:00 AM - 5:00 PM",
    location: "Kwame Nkrumah Memorial Park, Accra",
    category: "Cultural",
    description:
      "An enriching cultural excursion to explore Ghana's history and art at the Kwame Nkrumah Memorial Park and Art Center. Students learned about Pan-Africanism and Ghana's independence.",
    attendees: 85,
    maxAttendees: 85,
    image: "/hero/hero1.jpg",
    isUpcoming: false,
    organizer: "ISA Cultural Committee",
    tags: ["Cultural", "Trip", "History", "Art", "Ghana"],
    photos: [
      "/images/kwame_museum/KNM3.jpg",
      "/images/kwame_museum/KNM1.jpg",
      // "/images/kwame_museum/KNM2.jpg",
      "/images/kwame_museum/KNM4.jpg",
      "/images/kwame_museum/KNM5.jpg",
      "/images/kwame_museum/KNM6.jpg",
      "/images/kwame_museum/KNM7.jpg",
      "/images/kwame_museum/KNM8.jpg",
      "/images/kwame_museum/KNM9.jpg",
      "/images/kwame_museum/KNM10.jpg",
      "/images/kwame_museum/KNM11.jpg",
      "/images/kwame_museum/KNM12.jpg",
      "/images/kwame_museum/KNM13.jpg",
      "/images/kwame_museum/KNM14.jpg",
    ],
  },
  {
    id: 4,
    title: "International Students Tournament 3rd Edition",
    date: "2025-03-08",
    time: "7:00 AM - 9:00 PM",
    location: "New Basketball Courtyard",
    category: "Sports",
    description:
      "The 3rd edition of our annual sports tournament brought together teams from across campus for an exciting day of competition and camaraderie.",
    attendees: 200,
    maxAttendees: 200,
    image: "/events/event9.jpg",
    isUpcoming: false,
    organizer: "ISA Sports Committee",
    tags: ["Tournament", "Sports", "Basketball", "Competition"],
    photos: [
      "/images/futsal_edition_3/f1.jpg",
      "/images/futsal_edition_3/f2.jpg",
      "/images/futsal_edition_3/f3.jpg",
      "/images/futsal_edition_3/f4.jpg",
      "/images/futsal_edition_3/f5.jpg",
      "/images/futsal_edition_3/f6.jpg",
      "/images/futsal_edition_3/f7.jpg",
      "/images/futsal_edition_3/f8.jpg",
      "/images/futsal_edition_3/f9.jpg",
    ],
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
    attendees: 150,
    maxAttendees: 200,
    image: "/events/event8.jpg",
    isUpcoming: false,
    organizer: "ISA Social Committee",
    tags: ["Party", "Social", "Music", "Community"],
    photos: [
      "/images/get_together_party/g1.jpg",
      "/images/get_together_party/g2.jpg",
      "/images/get_together_party/g3.jpg",
      "/images/get_together_party/g4.jpg",
      "/images/get_together_party/g5.jpg",
      "/images/get_together_party/g6.jpg",
      "/images/get_together_party/g7.jpg",
      "/images/get_together_party/g8.jpg",
      "/images/get_together_party/g9.jpg",
      "/images/get_together_party/g10.jpg",
      "/images/get_together_party/g11.jpg",
      "/images/get_together_party/g12.jpg",
      "/images/get_together_party/g13.jpg",
      "/images/get_together_party/g14.jpg",
      // "/images/get_together_party/g15.jpg",
    ],
  },
  {
    id: 6,
    title: "Global Cafe",
    date: "2025-03-04",
    time: "8:00 PM - 6:00 PM",
    location: "Engineering Courtyard",
    category: "Cultural",
    description:
      "Students shared coffee, snacks, and stories from their home countries in this relaxed cultural exchange event.",
    attendees: 200,
    maxAttendees: 200,
    image: "/hero/hero3.jpg",
    isUpcoming: false,
    organizer: "ISA Cultural Committee",
    tags: ["Coffee", "Culture", "Networking", "Food"],
    photos: [
      "/international-food-festival.jpg",
      "/coffee-hour.jpg",
      "/international-food-festival.jpg",
      "/hero/hero3.jpg",
      "/coffee-hour.jpg",
    ],
  },
];

// Helper functions to get filtered events
export const getUpcomingEvents = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Set to start of day for comparison

  return events
    .filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= now;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Set to start of day for comparison

  return events
    .filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate < now;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestUpcomingEvents = (limit: number = 3) => {
  return getUpcomingEvents().slice(0, limit);
};
