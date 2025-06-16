import Logo from "../src/assets/logo.png";
import ProfileImg from "../src/assets/profile.png";
import AboutImg from "../src/assets/about.png";
import SkillsImg from "../src/assets/skills.png";
import EducationsImg from "../src/assets/educations.png";
import { FiMapPin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiBookOpen } from "react-icons/pi";




// Image
export const assets = {
    Logo,
    ProfileImg,
    AboutImg,
    SkillsImg,
    EducationsImg,
}

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
        title: "Exprience",
        link: "#expriences",
    },
    {
        id: 4,
        title: "Project",
        link: "#projects",
    },
    {
        id: 5,
        title: "Contact",
        link: "#contact",
    },
];


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
                title: "Frontend:",
                list: "HTML, CSS, Tailwind CSS, React JS",
            },
            {
                title: "Backend:",
                list: "Node JS, Express, MySQL, MoongoDB",
            },
            {
                title: "Languages:",
                list: "C, JavaScript",
            },
            {
                title: "Tools:",
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

