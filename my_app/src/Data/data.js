/**src/Data/data.js**/
const HEADER = "Phil";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" },
];
const BANNER_DATA = {
  HEADING: "Phil Choi",
  DECRIPTION:
    "I am a full stack developer with a passion for building web applications.",
  TUTORIAL_URL: "https://www.linkedin.com/in/phillip-choi-aba95a141",
  WATCH_TUTORIAL: "Click here",
};
const SERVICE_DATA = {
  HEADING: "SERVICES",
  ALL_SERVICES: "PROGRAMMER | DEVELOPER | CODER",
  SERVICE_LIST: [
    {
      LABEL: "MOBILE APP DEVELOPMENT",
      DESCRIPTION: "CROSS PLATFORM REACT-NATIVE AND FLUTTER",
      URL: "images/service3.png",
    },
    {
      LABEL: "WEB APP DEVELOPMENT",
      DESCRIPTION: "REACT JS, VUE JS, and SVELTE",
      URL: "images/service2.png",
    },
    {
      LABEL: "SERVER-SIDE DEVELOPMENT",
      DESCRIPTION: "Python and Node.js",
      URL: "images/service1.png",
    },
  ],
};

const ABOUT_DATA = {
  HEADING: "ABOUT",
  TITLE: "Software Developer",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "Cross-platform development",
    "Flexible and scalable",
    "Highly skilled",
    "Experienced",
    "Creative",
    "Passionate",
    // "We provides Cost-Effective Digital Marketing than Others.",
    // "High customer statisfaction and experience.",
    // "Marketing efficiency and quick time to value.",
    // "Clear & transparent fee structure.",
    // "We provides Marketing automation which is an integral platform that ties all of your digital marketing together.",
    // "A strong desire to establish long lasting business partnerships.",
    // "Provide digital marketing to mobile consumer.",
    // "We provides wide range to services in reasonable prices",
  ],
};
const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION: "lorem ipsum",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Co-founder at ABC",
    },
    {
      DESCRIPTION: "lorem ipsum",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Co-founder at xyz",
    },
  ],
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png",
  ],
};

const FOOTER_DATA = {
  DESCRIPTION: "Lorem ipsum",
  CONTACT_DETAILS: {
    HEADING: "Contact me",
    ADDRESS: "Seoul",
    MOBILE: "+82-10-3392-5605",
    EMAIL: "Philchoi@icloud.com",
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe",
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA,
};
export default MOCK_DATA;
