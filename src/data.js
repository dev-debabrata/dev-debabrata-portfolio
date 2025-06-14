import { FiMapPin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";




// Navbar data
export const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#home",
    },
    {
        id: 2,
        title: "About Me",
        link: "#about",
    },
    {
        id: 3,
        title: "Skills",
        link: "#skills",
    },
    {
        id: 4,
        title: "Project",
        link: "#project",
    },
    {
        id: 5,
        title: "Contact",
        link: "#contact",
    },
];


// About section data
export const EXAMPLES = {
    education: {
        title: 'Education',
        description:
            'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
        code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    skills: {
        title: 'Skills',
        description:
            'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',

    },
};

export const infoData = [

    {
        icon: MdMailOutline,
        text: "debabratadas711@gmail.com"
    },
    {
        icon: FiMapPin,
        text: "Kolkata, West Bengal, India"
    },
];

export const qualificationData = [
    {
        school: "Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex",
        qualification: "Computer Science and Engineering",
        years: "2023 - PRESENT",
    },
    {
        school: "Kingston Educational Institute",
        qualification: "Mechanical Engineering",
        years: "2016 - 2019",
    },
    {
        school: "Purunda Ramkrishna Siksha Sadhan",
        qualification: "H.S",
        years: "2014 - 2016",
    },
];
