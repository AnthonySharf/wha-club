// WHA — shared content data
// Edit this file to add/remove resources or articles.

window.WHA_DATA = {

  // Hero carousel images — drop real photos at these exact paths.
  // Minimum 1920×1080px (landscape 16:9). Full-bleed WHA officer or club event photos.
  // The carousel cycles through all entries every 5 seconds.
  heroImages: [
    "/images/hero/officer-event-1.jpg",
    "/images/hero/officer-event-2.jpg",
    "/images/hero/officer-event-3.jpg",
    "/images/hero/officer-event-4.jpg"
  ],

  resources: [
    {
      title: "Endometriosis: What the Research Misses",
      date: "Jan 14, 2025",
      type: "Slides",
      link: "#",
      description: "A look at the diagnostic gap and why the average patient waits seven years for answers."
    },
    {
      title: "Understanding PCOS: Symptoms, Diagnosis, and Advocacy",
      date: "Jan 21, 2025",
      type: "Video",
      link: "#",
      description: "Recording of our session on polycystic ovary syndrome — patterns, treatments, and gaps."
    },
    {
      title: "The Gender Pain Gap",
      date: "Jan 28, 2025",
      type: "Slides",
      link: "#",
      description: "How pain is measured, who is believed, and what the literature reveals about disparities."
    }
  ],

  articles: [
    {
      source: "NIH",
      title: "Sex Differences in Pain Perception",
      description: "A review of how biological and social factors shape pain reporting, diagnosis, and treatment outcomes.",
      link: "https://www.nih.gov",
      type: "Study"
    },
    {
      source: "The Retrievals Podcast",
      title: "When Women Are Not Believed",
      description: "An investigation into a fertility clinic and the systemic dismissal of patient pain reports.",
      link: "https://www.nytimes.com/column/the-retrievals",
      type: "Podcast"
    },
    {
      source: "JAMA Internal Medicine",
      title: "Physician Gender and Patient Outcomes",
      description: "Mortality and readmission data linked to physician gender — a quiet but striking finding.",
      link: "https://jamanetwork.com",
      type: "Article"
    }
  ],

  // Officers — used by the scatter gallery on the homepage.
  // Replace placeholder bios and photos before launch.
  officers: [
    {
      name: "Lisa Borowik",
      role: "Co-President",
      photo: "images/LisaB.png",
      bio: "PLACEHOLDER: Replace with real bio."
    },
    {
      name: "Daria Gavrushin",
      role: "Co-President",
      photo: "images/Dasha.png",
      bio: "PLACEHOLDER: Replace with real bio."
    },
    {
      name: "Audrey Castro",
      role: "Vice President",
      photo: null, // PLACEHOLDER: add photo path when ready
      bio: "PLACEHOLDER: Replace with real bio."
    },
    {
      name: "Madelyn Char",
      role: "Secretary",
      photo: null, // PLACEHOLDER: add photo path when ready
      bio: "PLACEHOLDER: Replace with real bio."
    }
  ]
};
