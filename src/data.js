import Logo from "../src/assets/logo.png";
import ProfileImg from "../src/assets/profile.png";
import AboutImg from "../src/assets/about.png";
import SkillsImg from "../src/assets/skills.png";
import EducationsImg from "../src/assets/educations.png";

// Logo card image
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

// Icons
import { FiMapPin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiBookOpen } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";

// ProjectList image
import AcademicImg from "../src/assets/ProjectImg/academic.png"
import CloudKitchenImg from "../src/assets/ProjectImg/cloudkitchen.png"
import CalculatorImg from "../src/assets/ProjectImg/calculator.png"
import WeatherImg from "../src/assets/ProjectImg/weather.png"
import AnalogClockImg from "../src/assets/ProjectImg/analogclock.png"
import DigitalClockImg from "../src/assets/ProjectImg/digitalclock.png"
import StopwatchImg from "../src/assets/ProjectImg/stopwatch.png"
import GuessMyNumberImg from "../src/assets/ProjectImg/guessmynumber.png"
import ModalShowImg from "../src/assets/ProjectImg/modalshow.png"
import PigGameImg from "../src/assets/ProjectImg/piggame.png"
import ElearningImg from "../src/assets/ProjectImg/elearning.png"
import CocaColaImg from "../src/assets/ProjectImg/cocacola.png"
import BankTransactionImg from "../src/assets/ProjectImg/bankingtransaction.png"
import TodoListImg from "../src/assets/ProjectImg/todolist.png"




/////////////////////////////////////////////
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
    { id: "projectslist", title: "Projects", type: "route" },
    { id: "contact", title: "Contact", type: "scroll" }
];


//////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////
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



/////////////////////////////////////////////////////
// Conract icon section
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



//////////////////////////////////////////////
// ProjectList section
// Project Tabs
export const projectsTabs = [
    {
        id: "allprojects",
        label: "All Projects"
    },
    {
        id: "mern stack",
        label: "MERN Stack"
    },
    {
        id: "react.js",
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


// ProjectList Data
export const projectListData = [




    /////////////////////////////
    // React.JS
    {
        image: CocaColaImg,
        title: "react.js",
        name: "Coca Cola",
        description:
            "Technologies: React, Tailwind CSS, Framer-motion",
        github: "https://github.com/dev-debabrata/CocaCola-react",
        webapp: "https://cocacola-house.netlify.app/",
    },




    ////////////////////////////
    // Mern stack
    {
        image: ElearningImg,
        title: "mern stack",
        name: "E-Learning",
        description:
            "Technologies: React, Tailwind CSS, Node.JS, Express.js, MongoDB",
        github: "https://github.com/dev-debabrata/e-learning-mern",
        webapp: "https://education-learnig.netlify.app/",
    },



    /////////////////////////////////////
    // JavaScript
    {
        image: BankTransactionImg,
        title: "javascript",
        name: "Banking Transaction",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/banking-transaction-app",
        webapp: "https://banking-transaction.netlify.app/",
    },
    {
        image: PigGameImg,
        title: "javascript",
        name: "Guess My Number",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/pig-game",
        webapp: "https://dev-debabrata.github.io/projects-javascript/pig-game",
    },
    {
        image: ModalShowImg,
        title: "javascript",
        name: "Modal Show",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/modal-show",
        webapp: "https://dev-debabrata.github.io/projects-javascript/modal-show",
    },
    {
        image: GuessMyNumberImg,
        title: "javascript",
        name: "Guess My Number",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/guess-my-number",
        webapp: "https://dev-debabrata.github.io/projects-javascript/guess-my-number",
    },
    {
        image: StopwatchImg,
        title: "javascript",
        name: "Stopwatch",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/stopwatch-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/stopwatch-app",
    },

    {
        image: DigitalClockImg,
        title: "javascript",
        name: "Digital Clock",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/digital-clock-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/digital-clock-app",
    },
    {
        image: AnalogClockImg,
        title: "javascript",
        name: "Analog Clock",
        description: "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/analog-clock-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/analog-clock-app",
    },
    {
        image: WeatherImg,
        title: "javascript",
        name: "Weather",
        description: "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/weather-app-javascript",
        webapp: "https://weather-debu.netlify.app/",
    },

    {
        image: CalculatorImg,
        title: "javascript",
        name: "Calculator",
        description: "Technologies: HTML, CSS, JavaScript ",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/calculator-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/calculator-app",
    },

    {
        image: TodoListImg,
        title: "django",
        name: "Todo List Django",
        description:
            "Technologies: HTML, CSS, JavaScript, Django",
        github: "https://github.com/dev-debabrata/django-todo-list",
        webapp: "",
    },


    /////////////////////////////////////
    // HTML CSS
    {
        image: CloudKitchenImg,
        title: "htmlcss",
        name: "Cloud Kitchen",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/cloud-kitchen-htmlcss",
        webapp: "https://cloud-kitchen.netlify.app/",
    },
    {
        image: AcademicImg,
        title: "htmlcss",
        name: "Academic web",
        description:
            "Technologies: HTM, CSS only",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/college-web-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/college-web-app",
    },
];


///////////////////////////////////////////
// Project home section data
export const projectData = [
    {
        id: 0,
        title: "GitHub Profile Detective",
        description:
            "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",

        tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
        github: "",
        webapp: "",
    },
    // {
    //     id: 1,
    //     title: "CS Prep",
    //     description:
    //         "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //     image: csprepLogo,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //     github: "https://github.com/codingmastr/CSPrep",
    //     webapp: "https://csprep.netlify.app/",
    // },
    // {
    //     id: 2,
    //     title: "Movie Recommendation App",
    //     description:
    //         "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //     image: movierecLogo,
    //     tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //     github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //     webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //     id: 3,
    //     title: "Email Validator NPM Package",
    //     description:
    //         "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //     image: npmLogo,
    //     tags: ["React JS", "Node.js", "NPM", "Validation"],
    //     github: "https://github.com/codingmastr/cmtk-email-validator",
    //     webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //     id: 4,
    //     title: "Task Reminder Chrome Extension Tool",
    //     description:
    //         "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //     image: taskremLogo,
    //     tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //     github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //     webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //     id: 5,
    //     title: "Webverse Digital",
    //     description:
    //         "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //     image: webverLogo,
    //     tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //     github: "https://github.com/codingmastr/Webverse-Digital",
    //     webapp: "https://webversedigital.com/",
    // },
    // {
    //     id: 6,
    //     title: "Coding Master",
    //     description:
    //         "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //     image: cmLogo,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //     github: "https://codingmasterweb.in/",
    //     webapp: "https://codingmasterweb.in/",
    // },
    // {
    //     id: 7,
    //     title: "Image Search App",
    //     description:
    //         "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //     image: imagesearchLogo,
    //     tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //     github: "https://github.com/codingmastr/Image-Search-App",
    //     webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //     id: 8,
    //     title: "Image Background Remover",
    //     description:
    //         "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //     image: removebgLogo,
    //     tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //     github: "https://github.com/codingmastr/Image-Background-Remover",
    //     webapp: "https://removeyourbg.netlify.app/",
    // },
];  