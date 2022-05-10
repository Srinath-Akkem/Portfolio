const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
    title: "Srinath Akkem's Portfolio",
    description: "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
    og: {
        title: "Srinath Akkem Portfolio",
        type: "website",
        url: "https://srinathakkem.github.io/",
    },
};

//Home Page
const greeting = {
    title: "Srinath Reddy Akkem",
    logo_name: "SrinathAkkem",
    nickname: "Sai",
    subTitle: "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
    resumeLink: "https://drive.google.com/file/d/1u9EV2YxWUWUmYGgsbzohdM4K4EqhMWW7/view?usp=sharing",
    portfolio_repository: "https://github.com/SrinathAkkem/myPortfolio",
    githubProfile: "https://github.com/SrinathAkkem",
};

const socialMediaLinks = [
    /* Your Social Media Link */
    // github: "https://github.com/SrinathAkkem",
    // linkedin: "https://www.linkedin.com/in/srinath-akkem-36b56a175/",
    // gmail: "srinathreddy.akkem@gmail.com",
    // gitlab: "https://gitlab.com/srinathreddy.akkem",
    // facebook: "https://www.facebook.com/akkem/",
    // twitter: "https://twitter.com/srinath_akkem",
    // instagram: "https://www.instagram.com/srinath_akkem/"

    {
        name: "Github",
        link: "https://github.com/SrinathAkkem",
        fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
        backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/srinath-akkem-36b56a175/",
        fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
        backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UChR794LtprQfCb2JINrfq9A",
        fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
        backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    },
    {
        name: "Gmail",
        link: "mailto:srinathreddy.akkem@gmail.com",
        fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
    {
        name: "Twitter",
        link: "https://twitter.com/srinath_akkem",
        fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
        backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/akkem/",
        fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
        backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/srinath_akkem/",
        fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
        backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    },
];

const skills = {
    data: [{
        title: "Full Stack Development",
        fileName: "FullStackImg",
        skills: [
            "⚡ Build, manage, and improve server-side operating systems, databases, libraries, and frameworks",
            "⚡ Building resposive websites and deploy.",
            "⚡ Creating application backend in NodeJS",
        ],
        softwareSkills: [{
                skillName: "HTML5",
                fontAwesomeClassname: "simple-icons:html5",
                style: {
                    color: "#E34F26",
                },
            },
            {
                skillName: "CSS3",
                fontAwesomeClassname: "fa-css3",
                style: {
                    color: "#1572B6",
                },
            },
            {
                skillName: "JavaScript",
                fontAwesomeClassname: "simple-icons:javascript",
                style: {
                    backgroundColor: "#000000",
                    color: "#F7DF1E",
                },
            },
            {
                skillName: "ReactJS",
                fontAwesomeClassname: "simple-icons:react",
                style: {
                    color: "#61DAFB",
                },
            },
            {
                skillName: "NodeJS",
                fontAwesomeClassname: "simple-icons:node-dot-js",
                style: {
                    color: "#339933",
                },
            },
            {
                skillName: "MySQL",
                fontAwesomeClassname: "simple-icons:mysql",
                style: {
                    color: "#4479A1",
                },
            },
        ],
    }, ],
};

// Education Page
const competitiveSites = {
    competitiveSites: [{
            siteName: "HackerRank",
            iconifyClassname: "simple-icons:hackerrank",
            style: {
                color: "#2EC866",
            },
            profileLink: "https://www.hackerrank.com/srinath_akkem",
        },
        {
            siteName: "Codechef",
            iconifyClassname: "simple-icons:codechef",
            style: {
                color: "#5B4638",
            },
            profileLink: "https://www.codechef.com/users/srinath_akkem",
        },
        {
            siteName: "Codeforces",
            iconifyClassname: "simple-icons:codeforces",
            style: {
                color: "#1F8ACB",
            },
            profileLink: "https://codeforces.com/profile/srinath_akkem_26",
        },
        {
            siteName: "Hackerearth",
            iconifyClassname: "simple-icons:hackerearth",
            style: {
                color: "#323754",
            },
            profileLink: "https://www.hackerearth.com/@Srinath_Akkem",
        },
        {
            siteName: "Leetcode",
            iconifyClassname: "simple-icons:leetcode",
            style: {
                color: "#000000",
            },
            profileLink: "https://leetcode.com/19501a0503/",
        },
    ],
};

const degrees = {
    degrees: [{
            title: "Prasad V. Potluri Siddhartha Institute Of Technology",
            subtitle: "B.Tech. in Computer Engineering",
            logo_path: "pvpsit_logo.png",
            alt_name: "PVPSIT",
            duration: "2019 - Present",
            descriptions: [
                "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
                "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
                "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college.",
            ],
            website_link: "https://www.pvpsiddhartha.ac.in/",
        },
        {
            title: "Narayana Jr. College",
            subtitle: "Intermediate in MPC stream",
            logo_path: "narayana.png",
            alt_name: "Narayana",
            duration: "2017 - 2019",
            descriptions: [
                "⚡ I have studied basic concepts in Mathematics, Physics, and Chemistry.",
                "⚡ I Secured 9.73 CGPA and also got 95 percentile in JEE Mains and 7527th rank in AP Eamcet.",
            ],
        },
        {
            title: "Sri Krishnaveni EM High School",
            subtitle: "SSC",
            logo_path: "krishnaveni.png",
            alt_name: "SKVGTS",
            duration: "2009 - 2017",
            descriptions: [
                "⚡ I Secured 10 CGPA and received many medals and prizes for my excellence in studies as well as extra curricular activities.",
                "⚡ I also received an award from Teachers Association,AP for securing 10 CGPA in my SSC.",
            ],
        },
    ],
};

const certifications = {
    certifications: [{
            title: "C Programming",
            subtitle: "- Spoken Tutorials",
            logo_path: "spoken.png",
            certificate_link: "https://drive.google.com/file/d/1mvALZc9bOwPhdw0YfpnPg997W_YISkiC/view",
            alt_name: "Spoken Tutorials",
            color_code: "#FFFFFF",
        },
        {
            title: "C++ Programming",
            subtitle: "- Spoken Tutorials",
            logo_path: "spoken.png",
            certificate_link: "https://drive.google.com/file/d/1CYUn724ZBfW6u6o1uw379qS-vZBhyhOQ/view",
            alt_name: "Spoken Tutorials",
            color_code: "#FFFFFF",
        },
        {
            title: "Java Programming",
            subtitle: "- Spoken Tutorials",
            logo_path: "spoken.png",
            certificate_link: "https://drive.google.com/file/d/1_ejbOrVfmOaMOEh5UA-18HYnGkDZVSj3/view",
            alt_name: "Spoken Tutorials",
            color_code: "#FFFFFF",
        },
        {
            title: "React",
            subtitle: "- Udemy",
            logo_path: "udemy.png",
            certificate_link: "https://www.udemy.com/certificate/UC-6549edb1-4b48-452d-a263-4c01f7120d37/",
            alt_name: "Udemy",
            color_code: "#FFFFFF",
        },
        {
            title: "Ethical Hacking",
            subtitle: "- Z Security",
            logo_path: "udemy.png",
            certificate_link: "https://www.udemy.com/certificate/UC-R8FNRACC/",
            alt_name: "Udemy",
            color_code: "#FFFFFF",
        },
        {
            title: "Getting Started With AWS",
            subtitle: "- Coursera",
            logo_path: "coursera.png",
            certificate_link: "https://coursera.org/share/0877b11f1e20769818063dc727a16cdc",
            alt_name: "Coursera",
            color_code: "#FFFFFF",
        },
    ],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description: "Aspiring to explore myself in the world of programming by solving challenging problems of the world and exposing myself to different environments. I always work to enhance my skills alongside being resourceful to the organisation I work with.",
    header_image_path: "experience.svg",
    sections: [{
            title: "Work",
            experiences: [{
                title: "",
                company: "",
                company_url: "",
                logo_path: "s.png",
                duration: "",
                location: "",
                description: "",
                color: "",
            }, ],
        },
        {
            title: "Internships",
            experiences: [{
                title: "Internship on Cyber Security",
                company: "Hyper Techno Solutions",
                company_url: "www.hypertechnos.com",
                logo_path: "hyper.png",
                duration: "Apr 2021 - Jun 2021",
                location: "Poranki, Vijayawada",
                description: "I have worked on project related to CyberSecurity",
                color: "#ee3c26",
            }, ],
        },
        {
            title: "Volunteerships",
            experiences: [{
                title: "",
                company: "",
                company_url: "",
                logo_path: "s.png",
                duration: "",
                location: "",
                description: "",
                color: "#181717",
            }, ],
        },
    ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description: "My projects makes use of vast variety of latest technology tools. My best experience is to create projects and deploy them to web applications using cloud infrastructure.",
    avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
    title: "Publications",
    description: "I have worked on and published a few research papers and publications of my own.",
    avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "s.png",
        description: "I am available on almost every social media. You can message me, I will reply within 24 hours.",
    },
    blogSection: {
        title: "Blogs",
        subtitle: "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
        link: "https://srinathakkem.blogspot.com/",
        avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
        title: "Address",
        subtitle: "16-14-16, Sivasankara street,Road No 7, Ramalingeswara Nagar, Vijayawada, Andhra Pradesh - 520013",
        avatar_image_path: "address_image.svg",
        location_map_link: "https://goo.gl/maps/ejrz7ST7hdHMcNSu6",
    },
    phoneSection: {
        title: "Phone Number",
        subtitle: "+91 9849765477",
    },
};

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
    publicationsHeader,
    contactPageData,
};