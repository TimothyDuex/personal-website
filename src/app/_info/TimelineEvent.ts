export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  type: "job" | "location" | "education" | "achievement";
  location?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "2",
    date: "July 2025",
    title: "First Professional DJ Gig",
    subtitle: "Self taught bedroom hobby turns profitable",
    description:
      "Played my first professional DJ gig in NYC. Providing the music for a sunset yacht cruise around the Hudson and East River. Managed by Rosegold.",
    type: "achievement",
    location: "New York, NY",
  },
  {
    id: "3",
    date: "March 2025",
    title: "Completed NYC Half Marathon",
    subtitle: "My first half-marathon",
    description: "Completed the NYC Half Marathon, with a time of 1:42.",
    type: "achievement",
    location: "New York, NY",
  },
  {
    id: "4",
    date: "December 2024",
    title: "Left Amazon",
    subtitle: "Respectfully of course",
    description:
      "Voluntarily resigned from Amazon to take time off work. After 5+ years in industry I felt ready to pursue creative passions in music and production for a time. As well as aligning myself with what it is that gives me fufillment in the Software industry.",
    type: "job",
    location: "New York, NY",
  },
  {
    id: "5",
    date: "May 2024",
    title: "Attend EDC Las Vegas",
    subtitle: "The United States' largest dance music festival",
    description:
      "Experienced the magic of EDC Vegas, the premiere festival for EDM in the United States. Further igniting a passion for the dance music scene.",
    type: "achievement",
    location: "Las Vegas, NV",
  },
  {
    id: "6",
    date: "May 2024",
    title: "Moved to New York City",
    description:
      "Relocated to New York City to pursue new opportunities in life and explore a bigger market within the music industry.",
    type: "location",
    location: "New York, NY",
  },
  {
    id: "7",
    date: "March 2024",
    title: "Ski the Alps",
    subtitle: "Also food poisoning via mountain side chicken panini",
    description:
      "Snowboarded for a week in Chamonix France. Increasing my progress to 2/7 of my lifetime goal to snowboard on every continent.",
    type: "achievement",
    location: "Chamonix, FR",
  },
  {
    id: "8",
    date: "June 2022",
    title: "Software Development Engineer II",
    subtitle: "Amazon, People Experience and Technology (PXT)",
    description:
      "Transferred internally to the retail side of Amazon. Joining a team to do Fullstack/Web Dev focused work, building internal tooling for Amazon's new venture into its own internal HR system.",
    type: "job",
    location: "Seattle, WA",
  },
  {
    id: "9",
    date: "Oct 2021",
    title: "Software Development Engineer II",
    subtitle: "Amazon Web Services, S3",
    description:
      "Promoted to Software Development Engineer II after successful E2E completion of a distributed system supporting S3 Async APIs.",
    type: "job",
    location: "Seattle, WA",
  },
  {
    id: "10",
    date: "November 2020",
    title: "Learn to Snowboard",
    subtitle: "Ouch...",
    description:
      "Spent 50 days this winter falling in love with snowboarding and firmly placing it as what will be one of my lifelong hobbies.",
    type: "achievement",
    location: "Crystal Mountain, WA",
  },
  {
    id: "11",
    date: "July 2019",
    title: "Software Development Engineer I",
    subtitle: "Amazon Web Services, S3",
    description:
      "Started my professional journey as a Software Development Engineer I, working primarily as an infrastructure engineer in Java. Building for S3.",
    type: "job",
    location: "Seattle, WA",
  },
  {
    id: "12",
    date: "July 2019",
    title: "Moved to Seattle",
    description:
      "Relocated to Seattle to begin my post-grad career as a Software Engineer. Embracing the great change that would be living on the west coast after growing up in Chicago Suburbs my whole life prior.",
    type: "location",
    location: "Seattle, WA",
  },
  {
    id: "13",
    date: "May 2019",
    title: "Bachelor of Science in Computer Engineering",
    subtitle: "Purdue University",
    description:
      "Focusing on software engineering, web technologies, and data structures.",
    type: "education",
    location: "West Lafayette, IN",
  },
];

function getTimelineEvents() {
  return timelineEvents;
}

export default getTimelineEvents;
