import Logo from "../src/assets/logo.png";
import ProfileImg from "../src/assets/profile.png";
import AboutImg from "../src/assets/about.png";
import SkillsImg from "../src/assets/skills.png";
import EducationsImg from "../src/assets/educations.png";
import HTMLCard from "../src/assets/Banner/html.png";
import CssCard from "../src/assets/Banner/css.png";
import JavascriptCard from "../src/assets/Banner/javascript.png";
import ReactCard from "../src/assets/Banner/react.png";
import NodeCard from "../src/assets/Banner/node.png";
import ExpressCard from "../src/assets/Banner/express.png";
import AngularCard from "../src/assets/Banner/angular.png";
import AzureCard from "../src/assets/Banner/azure.png";
import GithubCard from "../src/assets/Banner/github.png";
import MongodbCard from "../src/assets/Banner/mongodb.png";
import NextCard from "../src/assets/Banner/nextjs.png";
import PythonCard from "../src/assets/Banner/python.png";
import SassCard from "../src/assets/Banner/sass.png";
import TypescriptCard from "../src/assets/Banner/typescript.png";
import VScodeCard from "../src/assets/Banner/vscode.png";
import MysqlCard from "../src/assets/Banner/mysql.png";
import VueCard from "../src/assets/Banner/vue.png";
import { FiMapPin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiBookOpen } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";




// Image
export const assets = {
    Logo,
    ProfileImg,
    AboutImg,
    SkillsImg,
    EducationsImg,
}

// Navbar data
// export const NavbarMenu = [
//     {
//         id: 1,
//         title: "Home",
//         link: "home",
//     },
//     {
//         id: 2,
//         title: "About Me",
//         link: "about",
//     },
//     {
//         id: 3,
//         title: "Experience",
//         link: "experiences",
//     },
//     {
//         id: 4,
//         title: "Project",
//         link: "projectsList",
//     },
//     {
//         id: 5,
//         title: "Contact",
//         link: "contact",
//     },
// ];



export const NavbarMenu = [
    { id: "home", title: "Home", type: "scroll" },
    { id: "about", title: "About", type: "scroll" },
    { id: "experience", title: "Experience", type: "scroll" },
    { id: "projectsList", title: "Projects", type: "route" },
    { id: "contact", title: "Contact", type: "scroll" }
];



// LogoCard section
export const logoCard = {
    HTMLCard,
    CssCard,
    JavascriptCard,
    ReactCard,
    VueCard,
    NodeCard,
    ExpressCard,
    AngularCard,
    AzureCard,
    PythonCard,
    NextCard,
    TypescriptCard,
    SassCard,
    MongodbCard,
    MysqlCard,
    GithubCard,
    VScodeCard,





}


// About tabs section data
export const tabs = [
    {
        id: "tab1",
        label: "🛠️ Skills"
    },
    {
        id: "tab2",
        label: "📚 Education"
    },
];


// About tabcontent section
export const tabContent = {
    tab1: {
        data: [
            {
                title: "Frontend",
                list: "HTML, CSS, Tailwind CSS, React JS",
            },
            {
                title: "Backend",
                list: "Node JS, Express, MySQL, MoongoDB",
            },
            {
                title: "Languages",
                list: "C, JavaScript",
            },
            {
                title: "Tools",
                list: "Git, GitHub, VS Code, Vercel, Netlify ",
            },
        ],
        image: assets.SkillsImg,
    },
    tab2: {
        data: [
            {
                school: "🎓 Dr. Sudhir Chandra Sur Institute <br/> of Technology & Sports Complex",
                qualification: "Computer Science and Engineering",
                icon: PiBookOpen,
                years: "2023 - PRESENT",
            },
            {
                school: "🎓📜 Kingston Educational Institute",
                qualification: "Mechanical Engineering",
                icon: PiBookOpen,
                years: "2016 - 2019",
            },
            {
                school: "🏫 Purunda Ramkrishna Siksha Sadhan",
                qualification: "Secondary & Higher Secondary",
                icon: PiBookOpen,
                years: "2009 - 2014 - 2016",
            },
        ],
        image: assets.EducationsImg,
    },
}

// About icon section
export const iconInfoData = [

    {
        icon: MdMailOutline,
        text: "debabratadas711@gmail.com"
    },
    {
        icon: FiMapPin,
        text: "Kolkata, West Bengal, India"
    },
];

export const iconInfoContact = [
    {
        icon: MdMailOutline,
        text: "debabratadas711@gmail.com"
    },
    {
        icon: BiPhoneCall,
        text: '+919734990919'
    },
    {
        icon: FiMapPin,
        text: "Kolkata, West Bengal, India"
    },
];

export const projectsTabs = [
    {
        id: "allprojects",
        label: "All Projects"
    },
    {
        id: "mernstack",
        label: "MERN Stack"
    },
    {
        id: "reactjs",
        label: "React.JS"
    },
    {
        id: "javascript",
        label: "JavaScript"
    },
    {
        id: "htmlcss",
        label: "HTML CSS"
    },
];

// export const projectListData = {
//     allprojects: {
//         title: 'All Projects',
//         description:
//             'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
//         link: '',
//     },
//     mernstack: {
//         title: 'MERN Stack',
//         description:
//             'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
//         link: '',
//     },
//     reactjs: {
//         title: 'React.JS',
//         description:
//             'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
//         link: '',
//     },
//     javascript: {
//         title: 'JavaScript',
//         description:
//             'Components accept arbitrary inputs called props. They are like function arguments.',
//         link: '',
//     },
//     htmlcss: {
//         title: 'HTML CSS',
//         description:
//             'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
//         link: '',
//     },
// };


export const projectListData = [
    {
        image:
            "",
        category: "allprojects",
        name: "",
        description:
            "Technologies: React.js, Framer Motion, & Tailwind CSS",
        link: "",
    },

    {
        image:
            "",
        category: "reactjs",
        name: "",
        description:
            "Technologies: React.js, Framer Motion, & Tailwind CSS",
        link: "",
    },
    {
        image:
            "",
        category: "reactjs",
        name: "",
        description: "Technologies: React.js, Tailwind CSS",
        link: "",
    },
    {
        image:
            "",
        category: "reactjs",
        name: "",
        description: "Technologies: React.js, Tailwind CSS",
        link: "",
    },

    {
        image:
            "",
        category: "reactjs",
        name: "",
        description: "Technologies: React, Tailwind CSS ",
        link: "",
    },

    {
        image:
            "",
        category: "reactjs",
        name: "",
        description:
            "Technologies: React.js, Tailwind CSS",
        link: "",
    },
    {
        image:
            "",
        category: "reactjs",
        name: "Digital Wallet",
        description:
            "Technologies: React.js, Tailwind CSS, Framer Motion",
        link: "",
    },
];