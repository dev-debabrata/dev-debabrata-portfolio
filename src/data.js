// General assets
import Logo from "./assets/logo.png";
import ProfileImg from "./assets/profile.png";
import AboutImg from "./assets/about.png";
import SkillsImg from "./assets/skills.png";
import EducationsImg from "./assets/educations.png";

// Logo card images
import HTMLCard from "./assets/Banner/html.png";
import CssCard from "./assets/Banner/css.png";
import JavascriptCard from "./assets/Banner/javascript.png";
import ReactCard from "./assets/Banner/react.png";
import NodeCard from "./assets/Banner/node.png";
import ExpressCard from "./assets/Banner/express.png";
import AngularCard from "./assets/Banner/angular.png";
import AzureCard from "./assets/Banner/azure.png";
import GithubCard from "./assets/Banner/github.png";
import MongodbCard from "./assets/Banner/mongodb.png";
import NextCard from "./assets/Banner/nextjs.png";
import PythonCard from "./assets/Banner/python.png";
import SassCard from "./assets/Banner/sass.png";
import TypescriptCard from "./assets/Banner/typescript.png";
import VScodeCard from "./assets/Banner/vscode.png";
import MysqlCard from "./assets/Banner/mysql.png";
import VueCard from "./assets/Banner/vue.png";

// Icons
import { FiMapPin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiBookOpen } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";




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
                list: "Git, GitHub, VS Code, Render, Vercel, Netlify ",
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
    // {
    //     id: "full stack",
    //     label: "Full Stack"
    // },
    {
        id: "mern stack",
        label: "MERN Stack"
    },
    {
        id: "react.js",
        label: "React.JS"
    },
    {
        id: "next.js",
        label: "Next.JS"
    },
    {
        id: "javascript",
        label: "JavaScript"
    },

];


// ProjectList Data
import ComingSoonImg from "./assets/ProjectImg/comingSoon.png";


// Project images
import AcademicImg from "./assets/ProjectImg/academic.png";
import CloudKitchenImg from "./assets/ProjectImg/cloudkitchen.png";
import CalculatorImg from "./assets/ProjectImg/calculator.png";
import WeatherImg from "./assets/ProjectImg/weather.png";
import AnalogClockImg from "./assets/ProjectImg/analogclock.png";
import DigitalClockImg from "./assets/ProjectImg/digitalclock.png";
import StopwatchImg from "./assets/ProjectImg/stopwatch.png";
import QRcodeImg from "./assets/ProjectImg/qrcode.png";
import GuessMyNumberImg from "./assets/ProjectImg/guessmynumber.png";
import ModalShowImg from "./assets/ProjectImg/modalshow.png";
import PigGameImg from "./assets/ProjectImg/piggame.png";
import ElearningImg from "./assets/ProjectImg/elearning.png";
import CocaColaImg from "./assets/ProjectImg/cocacola.png";
import BankTransactionImg from "./assets/ProjectImg/bankingtransaction.png";
import TodoListImg from "./assets/ProjectImg/todolist.png";
import TicTacToeImg from "./assets/ProjectImg/tictactoe.png";
import OutdoorTravelImg from "./assets/ProjectImg/outdoortravel.png";
import BankingSystemImg from "./assets/ProjectImg/bankingsystem.png";
import AuthImg from "./assets/ProjectImg/auth.png";
import MindMateImg from "./assets/ProjectImg/mindMate.png";
import TravelMapImg from "./assets/ProjectImg/travelMap.png";
import GroLeafImg from "./assets/ProjectImg/groLeaf.png";
import AmazonCloneImg from "./assets/ProjectImg/amazonClone.png";
import LinkedInCloneImg from "./assets/ProjectImg/linkedinClone.png";
import InvoiceImg from "./assets/ProjectImg/invoice.png";


export const projectListData = [









    {
        image: LinkedInCloneImg,
        title: "mern stack",
        name: "LinkedIn Clone",
        description:
            "Technologies: React, Tailwind CSS, Node JS, Express.JS, MongoDB",
        github: "https://github.com/dev-debabrata/linkedin-clone-mern",
        webapp: "https://linkedin-clone-dev.vercel.app",
    },
    {
        image: AmazonCloneImg,
        title: "react.js",
        name: "Amazon Clone",
        description:
            "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/amazon-clone-react",
        webapp: "https://amazon-clone-dev-debabrata.netlify.app",
    },
    {
        image: GroLeafImg,
        title: "react.js",
        name: "GroLeaf",
        description:
            "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/groleaf-react",
        webapp: "https://groleaf-dev.netlify.app/",
    },
    {
        image: MindMateImg,
        title: "react.js",
        name: "MindMate AI Chat App",
        description:
            "Technologies: React, Tailwind CSS, React Just Parallax, React Scroll Lock",
        github: "https://github.com/dev-debabrata/MindMate-react",
        webapp: "https://mindmate-dev.netlify.app/",
    },
    {
        image: AuthImg,
        title: "mern stack",
        name: "Athentication App",
        description:
            "Technologies: React, Tailwind CSS, Node.JS, Express.JS, MongoDB, Framer-motion",
        github: "https://github.com/dev-debabrata/auth-mern",
        webapp: "",
    },
    /////////////////////////////
    // React.JS
    {
        image: CocaColaImg,
        title: "react.js",
        name: "Coca Cola",
        description:
            "Technologies: React, Tailwind CSS, Framer-motion",
        github: "https://github.com/dev-debabrata/CocaCola-react",
        webapp: "https://cocacola-dev.netlify.app/",
    },
    {
        image: OutdoorTravelImg,
        title: "react.js",
        name: "Outdoor Travel",
        description:
            "Technologies: React, Tailwind CSS, Framer-motion",
        github: "https://github.com/dev-debabrata/outdoor-travel-react",
        webapp: "https://outdoor-travel-dev.netlify.app/",
    },

    {
        image: InvoiceImg,
        title: "react.js",
        name: "Invoice Generator",
        description:
            "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/invoice-generator-react",
        webapp: "https://invoice-dev.netlify.app",
    },

    {
        image: TicTacToeImg,
        title: "react.js",
        name: "Tic Tac Toe",
        description:
            "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/tic-tac-toe-react",
        webapp: "https://tictactoe-dev.netlify.app/",
    },


    ////////////////////////////
    // Mern stack
    {
        image: ElearningImg,
        title: "mern stack",
        name: "E-Learning",
        description:
            "Technologies: React, Tailwind CSS, Node.JS, Express.JS, MongoDB",
        github: "https://github.com/dev-debabrata/e-learning-mern",
        webapp: "https://education-learnig-dev.netlify.app/",
    },



    /////////////////////////////////////
    // JavaScript
    {
        image: TravelMapImg,
        title: "javascript",
        name: "Travel Map",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/travel-map-javascript",
        webapp: "https://travelmap-dev.netlify.app/",
    },
    {
        image: BankingSystemImg,
        title: "javascript",
        name: "Banking System",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/banking-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/banking-app",
    },
    {
        image: BankTransactionImg,
        title: "javascript",
        name: "Banking Transaction",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/banking-transaction-app",
        webapp: "https://banking-transaction-dev.netlify.app/",
    },
    {
        image: PigGameImg,
        title: "javascript",
        name: "Ludo Game",
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
        image: QRcodeImg,
        title: "javascript",
        name: "QR Code Generator",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/QR-code-generator-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/QR-code-generator-app",
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
        webapp: "https://weatherweb-dev.netlify.app/",
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
        title: "javascript",
        name: "Cloud Kitchen",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/cloud-kitchen-htmlcss",
        webapp: "https://cloud-kitchen-dev.netlify.app/",
    },
    {
        image: AcademicImg,
        title: "javascript",
        name: "Academic web",
        description:
            "Technologies: HTM, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/projects-javascript/tree/main/college-web-app",
        webapp: "https://dev-debabrata.github.io/projects-javascript/college-web-app",
    },
];


///////////////////////////////////////////
// Project home section data
export const projectData = [


    {
        id: 0,
        image: CocaColaImg,
        title: "react.js",
        name: "Coca Cola",
        description:
            "Technologies: React, Tailwind CSS, Framer-motion",
        github: "https://github.com/dev-debabrata/CocaCola-react",
        webapp: "https://cocacola-dev.netlify.app/",
    },

    {
        id: 1,
        image: TicTacToeImg,
        title: "react.js",
        name: "Tic Tac Toe",
        description: "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/tic-tac-toe-react",
        webapp: "https://tictactoe-dev.netlify.app/",
    },

    {
        id: 2,
        image: AuthImg,
        title: "mern stack",
        name: "Authentication App",
        description:
            "Technologies: React, Tailwind CSS, Node.JS, Express.JS, MongoDB, Framer-motion",
        github: "https://github.com/dev-debabrata/auth-mern",
        webapp: "",
    },
    // {
    //     id: 3,
    //     image: OutdoorTravelImg,
    //     title: "react.js",
    //     name: "Outdoor Travel",
    //     description:
    //         "Technologies: React, Tailwind CSS, Framer-motion",
    //     github: "https://github.com/dev-debabrata/outdoor-travel-react",
    //     webapp: "https://outdoor-travel-dev.netlify.app/",
    // },
    {
        id: 4,
        image: CloudKitchenImg,
        title: "javascript",
        name: "Cloud Kitchen",
        description:
            "Technologies: HTML, CSS, JavaScript",
        github: "https://github.com/dev-debabrata/cloud-kitchen-htmlcss",
        webapp: "https://cloud-kitchen-dev.netlify.app/",
    },
    {
        id: 5,
        image: GroLeafImg,
        title: "react.js",
        name: "GroLeaf",
        description:
            "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/groleaf-react",
        webapp: "https://groleaf-dev.netlify.app/",
    },
    {
        id: 6,
        image: AmazonCloneImg,
        title: "react.js",
        name: "Amazon Clone",
        description:
            "Technologies: React, Tailwind CSS",
        github: "https://github.com/dev-debabrata/amazon-clone-react",
        webapp: "https://amazon-clone-dev-debabrata.netlify.app",
    },
];  