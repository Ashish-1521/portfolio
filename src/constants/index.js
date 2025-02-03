import video from "../assets/projects/video-game.jpg";
import cache from "../assets/projects/cache.jpg";
import city from "../assets/projects/city.png";
import classification from "../assets/projects/classification.png";
import gd from "../assets/projects/gd.jpg";
import land from "../assets/projects/land-fill.png";
import mouse from "../assets/projects/virtual_mouse.jpg";

export const HERO_CONTENT = `I am a dynamic software engineer and full stack developer with a passion for crafting innovative digital solutions. Combining expertise in modern web technologies like React, Angular, and Node.js with cloud platforms and DevOps practices, I specialize in building scalable, user-centric applications. Currently pursuing my Master's in Computer Science while serving as a Graduate Teaching Associate, I bring a unique blend of academic insight and practical development experience to every project.`;

export const ABOUT_TEXT = `As a versatile software engineer, I thrive on transforming complex challenges into elegant solutions. My journey spans from developing immersive gaming applications at GamezeniQ Technologies to conducting advanced research in 3D visualization at UCF. I've built a strong foundation in both front-end (React, Angular, JavaScript) and back-end technologies (Node.js, MongoDB, Django), complemented by expertise in cloud services (Azure, AWS) and DevOps tools (Docker, Kubernetes). My experience in teaching Mobile Development has reinforced my ability to communicate complex technical concepts effectively. I'm driven by a constant curiosity to explore emerging technologies and a commitment to creating applications that not only meet technical requirements but also deliver exceptional user experiences. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest industry trends.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Graduate Teaching Associate",
    company: "University of Central Florida",
    description: `Lead instruction in Mobile Development courses, creating and managing comprehensive JavaScript-based curriculum and assignments. Developed engaging course content and provided mentorship while maintaining a positive learning environment. Enhanced student engagement through innovative teaching methods and practical programming assignments.`,
    technologies: ["JavaScript", "Mobile Development", "Web Development", "Course Management Systems"],
  },
  {
    year: "Dec 2023 - Apr 2024",
    role: "Graduate Research Assistant",
    company: "University of Central Florida",
    description: `Spearheaded development of advanced 3D visualization systems using LIDAR point cloud data. Engineered sophisticated data processing pipelines for transforming raw data into interactive 3D visualizations. Implemented real-time atmospheric effects using Niagara engine's particle system, significantly enhancing visual fidelity.`,
    technologies: ["3D Visualization", "Data Processing", "Niagara Engine", "Real-time Graphics"],
  },
  {
    year: "Mar 2022 - Apr 2023",
    role: "Junior Game Developer",
    company: "GamezeniQ Technologies Pvt Ltd",
    description: `Led development of four major game projects, including Gun Master: Action Shooter and Bubble Blast 2022. Implemented complex game logic combining 2D/3D animations with physics systems and AI character behavior. Enhanced game performance by 20% through optimization and collaboration with artists.`,
    technologies: ["Unity", "C#", "Game Development", "AI Systems"],
  },
];

export const PROJECTS = [
  {
    title: "3D Visualization of Landfill Gas Emissions",
    image: land, // You'll need to import the corresponding images
    description: "Advanced 3D visualization system using Unreal Engine that transforms LIDAR data into interactive environmental monitoring tools. Features real-time atmospheric effects and intuitive color-coded representation of gas concentrations with seamless CSV data integration.",
    technologies: ["Unreal Engine", "LIDAR", "Autodesk Recap", "Global Mapper", "Niagara System"],
  },
  {
    title: "Game Development Portfolio",
    image: gd,
    description: "Led development of four commercial games including Gun Master: Action Shooter and Sniper Shooting, achieving 20% improvement in user engagement. Implemented AI-driven character behaviors, physics systems, and dynamic gameplay mechanics for Google Play Store publication.",
    technologies: ["Unity", "C#", "OOP", "AI Systems", "2D/3D Animation", "XML", "JSON"],
  },
  {
    title: "Skin Cancer Classification Web App",
    image: classification,
    description: "Full-stack web application leveraging deep learning models (ResNet50, AlexNet, VGGNet) for skin cancer variant prediction. Features interactive visualization of predictions and scalable architecture for medical professionals.",
    technologies: ["Python", "Streamlit", "TensorFlow", "Deep Learning", "Image Processing"],
  },
  {
    title: "Memory and Branch Prediction Simulators",
    image: cache,
    description: "Performance optimization tools analyzing memory hierarchy configurations using SPEC-2000 benchmark suite. Implemented multiple cache replacement policies (LRU, FIFO) and comprehensive system analysis features.",
    technologies: ["Python", "Memory Systems", "Algorithms", "Performance Analysis"],
  },
  {
    title: "Video Game Sales Analysis",
    image: video,
    description: "Comprehensive analysis of video game industry trends (2000-2020) providing actionable insights for publishers. Analyzed genre preferences, regional patterns, and platform performance using R-based statistical modeling.",
    technologies: ["R", "Data Analysis", "Statistical Modeling", "Data Visualization"],
  },
  {
    title: "City Building Simulation",
    image: city,
    description: "Unity-based city-building simulation prototype featuring dynamic area instantiation and resource management. Implemented scalable city expansion mechanics using object-oriented programming principles.",
    technologies: ["Unity", "C#", "OOP", "Game Design"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "ashish.thatipalli@gmail.com",
};

export const PUBLICATIONS = [
  {
    title: "Virtual Mouse",
    image: mouse, // Ensure 'city' is defined/imported correctly
    description: `The "Virtual Mouse" research paper, published in the International Research Journal of Modernization in Engineering Technology and Science (IRJMETS), presents a vision-based system for touch-free human-computer interaction. Utilizing real-time hand gesture recognition, this system performs essential mouse operations such as clicking, dragging, and scrolling without requiring a physical device.
By leveraging computer vision techniques, the Virtual Mouse enhances accessibility and hygiene, making it ideal for healthcare environments, public kiosks, and educational institutions where minimizing physical contact is crucial. The system is built using Python and OpenCV, incorporating Haar cascades and contour detection to recognize gestures efficiently.
This innovation offers a more natural and interactive computing experience, contributing to advancements in human-computer interaction (HCI), assistive technology, and computer vision applications.`,
    technologies: ["Python", "OpenCV", "Haar Cascades", "Contour Detection"],
    features: [
      "Real-time hand gesture recognition",
      "Supports left-click, right-click, double-click, drag, and scroll",
      "Touch-free interaction for hygienic and accessible computing"
    ],
    // applications: [
    //   "Healthcare environments",
    //   "Public kiosks",
    //   "Educational institutions"
    // ],
    journal: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
    date: "April 2022",
    paperId: "IRJMETS40400115863",
    publicationLink: "https://www.irjmets.com/uploadedfiles/paper/issue_4_april_2022/21664/final/fin_irjmets1651296943.pdf"
  }
];
