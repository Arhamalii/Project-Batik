export const aboutList = [
  {
    text: "Who are we",
    path: "https://www.malindoair.com/about-us",
  },
  {
    text: "Where We Fly",
    path: "https://www.malindoair.com/destinations/route-map",
  },

  {
    text: "Our Fleet",
    path: "https://www.malindoair.com/experiences/our-fleet",
  },

  {
    text: "Terms & conditions",
    path: "https://www.malindoair.com/terms-and-conditions",
  },
  {
    text: "FAQ",
    path: "https://www.malindoair.com/faqs",
  },
];

export const expirenceList = [
  {
    text: "Business Class",
    path: "https://www.malindoair.com/experiences/our-business-class",
  },
  {
    text: "Our Seats",
    path: "https://www.malindoair.com/experiences/seating",
  },

  {
    text: "Baggage",
    path: "https://www.malindoair.com/experiences/baggage",
  },

  {
    text: "Meals",
    path: "https://www.malindoair.com/experiences/Meals",
  },
];

export const contactUsList = [
  {
    text: "Call centre",
    path: "https://www.malindoair.com/contact-us",
  },
  {
    text: "Sales office",
    path: "https://www.malindoair.com/contact-us/sales-office",
  },

  {
    text: "Careers",
    path: "https://www.malindoair.com/contact-us/career",
  },

  {
    text: "Ad space",
    path: "https://www.malindoair.com/contact-us/Ad-Space",
  },
];
export const productList = [
  {
    text: "Malindo Miles",
    path: "http://malindomiles.com/",
  },
  {
    text: "Batik Air Corporate",
    path: "https://www.malindoair.com/Corporate",
  },
];

export const addonNavLinks = [
  {
    text: "Home",
    path: "https://search.malindoair.com/OD/UserProfile/Home.aspx?t=A3",
  },
  {
    text: "Book Flight",
    path: "https://www.batikair.com.my/",
  },
  {
    text: "Registration",
    path: "https://search.malindoair.com/OD/UserProfile/Profile.aspx?t=A3",
  },
  {
    text: "Malindo Miles",
    path: "https://www.malindomiles.com/inspirenetz/app/",
  },
  {
    text: "Contact Us",
    path: "https://search.malindoair.com/OD/UserProfile/ContactUs.aspx?t=A3",
  },
];
export function transformDate(dateStr) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(dateStr);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${day}-${month}-${year}`;
}
