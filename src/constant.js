import {
  FaBrain,
  FaChartLine,
  FaCloud,
  FaCube,
  FaGlobe,
  FaLaptopCode,
  FaLock,
  FaMobileAlt,
  FaPencilRuler,
} from "react-icons/fa";
import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

export { logoImg };

export const companyDetails = {
  phone: "+91-96739531663",
  address: "Paschimpara,Amlapara,Bongaon,Pin-743235",
  email: "alphenexInformatic@gmail.com",
  linkedin: "https://www.linkedin.com/company/alphenex-informatic/",
  instagram:
    "https://www.instagram.com/alphenexinformatic?igsh=MTAzbW92c3B0YWljeQ==",
  facebook: "https://www.facebook.com/share/1UyWANTXHn/",
  whatappling:
    "https://api.whatsapp.com/send/?phone=916296199031&text&type=phone_number&app_absent=0",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

// testimonials
export const testimonialss = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with ALPHENEX INFORMATIC has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at ALPHENEX INFORMATIC took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“ALPHENEX INFORMATIC stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    position: "CEO, E-Commerce Business",
    img: null,
    desc: "“Working with ALPHENEX INFORMATIC, was a transformative experience for our company. They didn’t just build a website—they understood our business and helped us create a seamless online shopping platform that truly connects with our customers. The result was a fast, responsive, and user-friendly site that’s directly contributed to an increase in conversions. We now have a digital presence that aligns perfectly with our brand and goals.”",
  },
  {
    id: 2,
    name: "James L.",
    position: "CTO, Tech Startup",
    img: null,
    desc: "“The team at ALPHENEX INFORMATIC, exceeded all of our expectations when it came to developing our mobile app. We had a complex idea, and they turned it into an intuitive, high-performance app that resonates with our users. Their collaboration throughout the entire process—from brainstorming to launch—was invaluable. Our users are engaged and retention has improved thanks to their expertise. We couldn’t be happier with the results.”",
  },
  {
    id: 3,
    name: "Emily T.",
    position: "Founder, Financial Technology Firm",
    img: null,
    desc: "“We came to ALPHENEX INFORMATIC, with a vision to integrate blockchain into our services, and they delivered an outstanding solution. Their deep understanding of blockchain technology ensured we were able to launch a secure and transparent platform that truly set us apart in the industry. Their team worked with us every step of the way, ensuring the final product exceeded our expectations. We’ve gained both efficiency and trust with our customers because of their expertise.”",
  },
  {
    id: 4,
    name: "Michael D.",
    position: "COO, Manufacturing Company",
    img: null,
    desc: "“The AI solutions provided by ALPHENEX INFORMATIC, have been a game-changer for us. Their machine learning models now allow us to monitor and optimize our supply chain in real-time, leading to better decision-making and improved productivity. The results have been impressive—our processes are more streamlined, and we’ve reduced operational costs. Their ability to understand the specifics of our business and deliver customized AI-driven insights has truly set us on a path of growth.”",
  },
  {
    id: 5,
    name: "Rachel W.",
    position: "Data Science Lead, Healthcare Organization",
    img: null,
    desc: "“Partnering with ALPHENEX INFORMATIC, for our machine learning needs was one of the best decisions we made. They helped us develop predictive models that have enhanced the quality of care we provide. These models now support our clinicians in making faster, data-driven decisions, leading to better patient outcomes. Their team didn’t just build the technology—they deeply understood the complexities of the healthcare industry, making them a perfect fit for our needs.”",
  },
  {
    id: 6,
    name: "Daniel P.",
    position: "IT Manager, Retail Chain",
    img: null,
    desc: "“We needed to migrate our infrastructure to the cloud, and ALPHENEX INFORMATIC, made the entire process effortless. From strategy to execution, their team provided a detailed, step-by-step plan that minimized any disruptions to our operations. Since making the transition, we’ve experienced enhanced scalability, reduced costs, and improved performance across the board. They truly made cloud migration a smooth and beneficial experience.”",
  },
  {
    id: 7,
    name: "Lily G.",
    position: "Head of Digital Marketing, Hospitality Brand",
    img: null,
    desc: "“The UI/UX team at ALPHENEX INFORMATIC, created a website for us that’s both stunning and highly functional. They took the time to understand our target market, ensuring the design was user-friendly and visually aligned with our brand identity. The result is a seamless experience for our visitors, leading to increased engagement and more bookings. They didn’t just deliver a website—they crafted an experience that connects with our customers.”",
  },
  {
    id: 8,
    name: "Robert J.",
    position: "CEO, SaaS Business",
    img: null,
    desc: "“From web development to AI and blockchain, ALPHENEX INFORMATIC, has been our go-to partner for all things tech. They consistently deliver top-notch solutions that align perfectly with our business objectives. Their ability to understand our challenges and provide scalable, effective solutions has been invaluable. With their support, we’ve been able to grow and improve our product offering, always staying ahead of the competition.”",
  },
  {
    id: 9,
    name: "Sophie L.",
    position: "VP of Operations, Logistics Company",
    img: null,
    desc: "“We turned to ALPHENEX INFORMATIC, to help us revamp our entire digital ecosystem, and they delivered in every way. From redesigning our website to integrating a mobile app and leveraging AI-powered systems, they provided comprehensive solutions that improved efficiency and enhanced our customer experience. Their expertise across various domains has made them our trusted partner for ongoing digital transformation.”",
  },
  {
    id: 10,
    name: "David H.",
    position: "Director of IT, Educational Institution",
    img: null,
    desc: "“We needed a digital overhaul for our learning platform, and ALPHENEX INFORMATIC, was the perfect partner. They revamped our website, integrated cloud-based tools, and helped us develop an app for our students and faculty. The entire process was seamless, and now our platform is more user-friendly, secure, and scalable. The work they did has allowed us to provide a better experience for our community and manage everything with ease.”",
  },
  {
    id: 11,
    name: "Monica F.",
    position: "Marketing Director, Real Estate Firm",
    img: null,
    desc: "“We couldn’t be happier with the work ALPHENEX INFORMATIC, did for us. They helped us create a modern, intuitive website and a user-friendly app that directly enhances how we interact with our clients. Their creativity and attention to detail were impressive, and they kept us involved throughout the entire process. We’ve seen great results in terms of increased client engagement and an improved user experience, all thanks to their expert guidance.”",
  },
];

export const allServicess = [
  {
    id: 1,
    title: "Web Development",
    description:
      "In the digital era, your website is often the first point of interaction with your audience. At ALPHENEX INFORMATIC, our Web Development services focus on creating high-performance, secure, and visually captivating websites that not only meet but exceed user expectations. Whether you’re building an informative platform, an e-commerce store, or a custom web application, we ensure your site is both functional and user-friendly.",
    listHeading: "Our Web Development Expertise Includes:",
    list: [
      "Tailored Web Solutions",
      "E-Commerce Development",
      "Content Management Systems (CMS)",
      "API Integration & Customization",
      "Ongoing Maintenance & Optimization",
    ],
    icon: (
      <FaGlobe className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Mobile apps have become a powerful way to engage users, streamline operations, and grow your business. Our App Development team builds intuitive, efficient, and dynamic mobile applications for both iOS and Android platforms. From concept to deployment, we focus on creating apps that are easy to use, scalable, and aligned with your business goals.",
    listHeading: "What We Offer in App Development:",

    list: [
      "Native & Hybrid Mobile Apps",
      "Cross-Platform Development",
      "User-Centric UI/UX Design",
      "App Store Optimization (ASO)",
      "Continuous App Support & Updates",
    ],
    icon: (
      <FaMobileAlt className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 3,
    title: "Blockchain Development",
    description:
      "Blockchain technology is revolutionizing industries by providing a secure, transparent, and decentralized method for managing data. At ALPHENEX INFORMATIC, we help businesses unlock the potential of blockchain through customized solutions that ensure privacy, security, and efficiency. Whether you’re exploring cryptocurrency, smart contracts, or decentralized applications, we have the expertise to guide you.",
    listHeading: "Our Blockchain Development Services Include:",

    list: [
      "Custom Blockchain Solutions",
      "Smart Contract Development",
      "Decentralized Application (dApp) Development",
      "Cryptocurrency Solutions",
      "Blockchain Consulting & Strategy",
    ],
    icon: (
      <FaLock className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is changing the way businesses operate. At ALPHENEX INFORMATIC, we integrate AI to help you automate processes, enhance decision-making, and gain deeper insights from your data. Our AI-driven solutions range from predictive analytics to intelligent virtual assistants, empowering businesses to work smarter, not harder.",
    listHeading: "Our AI Development Services Include:",

    list: [
      "Machine Learning Integration",
      "Predictive Analytics",
      "Natural Language Processing (NLP)",
      "Chatbots & Virtual Assistants",
      "Automation Solutions",
    ],
    icon: (
      <FaBrain className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 5,
    title: "Machine Learning",
    description:
      "Data is one of your most valuable assets. Our Machine Learning services help businesses harness the power of data through sophisticated algorithms and predictive models. By transforming raw data into meaningful insights, we help you make informed decisions, optimize operations, and predict future trends with precision.",
    listHeading: "What We Offer in Machine Learning:",

    list: [
      "Data Analysis & Visualization",
      "Custom ML Models",
      "Predictive Analytics & Forecasting",
      "Algorithm Optimization",
      "Data-Driven Insights",
    ],
    icon: (
      <FaChartLine className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 6,
    title: "Cloud Computing",
    description:
      "As businesses increasingly rely on cloud infrastructure to scale operations, we provide comprehensive Cloud Computing services to help you harness the power of the cloud. Whether it’s cloud migration, application development, or infrastructure management, we ensure your cloud environment is secure, cost-effective, and adaptable to your needs.",
    listHeading: "Our Cloud Computing Services Include:",

    list: [
      "Cloud Migration & Strategy",
      "Cloud Application Development",
      "Infrastructure as a Service (IaaS)",
      "DevOps & Continuous Integration",
      "SaaS & PaaS Solutions",
    ],
    icon: (
      <FaCloud className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 7,
    title: "UI/UX Design",
    description:
      "The user experience (UX) and user interface (UI) are at the heart of every digital product. Our UI/UX Design team focuses on understanding the needs of your target audience, creating designs that are not only visually appealing but also intuitive and functional. We work closely with you to craft user experiences that engage, delight, and drive results.",
    listHeading: "Our UI/UX Design Process Includes:",
    list: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "Interactive UI Design",
      "User Testing & Feedback",
      "Responsive & Mobile-Friendly Design",
    ],
    icon: (
      <FaPencilRuler className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
];

export const allServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Your website is a crucial part of your brand, and it needs to do more than just look good—it has to perform well. Our Web Development services are focused on creating high-quality, responsive, and user-friendly websites that deliver exceptional value for your business. We take the time to understand your needs and goals, and work with you to create a website that is functional, visually appealing, and scalable. Whether you're looking for an e-commerce platform, a custom-built solution, or a content management system (CMS), we ensure that your website will be secure, easy to maintain, and ready to grow as your business expands.",
    listHeading: "Our Web Development Services Include:",
    listServices: [
      "Custom Website Development: Designed to suit your unique business requirements.",
      "E-Commerce Solutions: Secure and engaging online stores to help you reach more customers.",
      "CMS Integration: Easy-to-use systems that empower you to manage your content efficiently.",
      "API Development and Integration: Boost your website’s functionality with custom APIs.",
      "Performance Optimization: Ensuring your website loads quickly and works seamlessly for your visitors.",
    ],
    icon: (
      <FaLaptopCode className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 2,
    title: "App Development",
    description:
      "In today’s mobile-first world, an app can be a game-changer for your business. Whether it’s an internal tool or a customer-facing app, our App Development services are designed to build high-quality mobile applications that meet your business needs. Our approach focuses on delivering applications that are not only user-friendly but also scalable and secure. Whether you're looking to develop a native app for iOS or Android or a cross-platform solution, we ensure the end result is a seamless, engaging experience that your users will love.",
    listHeading: "Our App Development Services Include:",
    listServices: [
      "Native App Development: High-performance apps designed for iOS and Android.",
      "Cross-Platform Apps: A cost-effective approach to building apps for multiple platforms.",
      "UI/UX Design: Crafting beautiful and functional interfaces to enhance user engagement.",
      "App Maintenance and Support: Ongoing support to keep your app running smoothly.",
      "App Store Optimization (ASO): Boost your app’s visibility and downloads with effective strategies.",
    ],
    icon: (
      <FaMobileAlt className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 3,
    title: "Blockchain Development",
    description:
      "Blockchain technology is rapidly transforming industries by offering solutions that enhance security, transparency, and efficiency. At [Your Company Name], we offer a range of Blockchain Development services that help you harness the power of blockchain to create secure, decentralized applications and platforms. Whether you're interested in cryptocurrency development, smart contracts, or decentralized applications (dApps), our experienced blockchain developers will work with you to create secure and reliable solutions that add value to your business.",
    listHeading: "Our Blockchain Development Services Include:",
    listServices: [
      "Custom Blockchain Solutions: Tailored blockchain-based applications to meet your unique business needs.",
      "Smart Contract Development: Secure, automated contracts that enhance transparency and reduce risk.",
      "Decentralized Applications (dApps): Build secure and transparent platforms powered by blockchain technology.",
      "Cryptocurrency Solutions: Development of digital currencies and secure wallets.",
      "Blockchain Consulting: Expert advice on how to integrate blockchain into your business model.",
    ],
    icon: (
      <FaCube className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    description:
      "AI is changing the way businesses operate, offering new opportunities to enhance efficiency and make smarter decisions. At [Your Company Name], we integrate Artificial Intelligence into your operations, enabling you to leverage data, automate processes, and optimize customer interactions. We specialize in creating AI-driven solutions that fit seamlessly into your existing processes, from predictive analytics to natural language processing (NLP) and computer vision. Our team works closely with you to ensure your AI solutions drive meaningful business outcomes.",
    listHeading: "Our AI Development Services Include:",
    listServices: [
      "Machine Learning Models: Predictive models that allow for smarter decision-making.",
      "Natural Language Processing (NLP): Enhance user engagement with chatbots, virtual assistants, and language-based AI systems.",
      "Computer Vision: Use AI to analyze visual data for improved automation and decision-making.",
      "AI Automation: Streamline repetitive tasks and business processes with AI.",
      "AI Strategy Consulting: Help businesses integrate AI to maximize its potential across various functions.",
    ],
    icon: (
      <FaBrain className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 5,
    title: "Machine Learning",
    description:
      "With Machine Learning (ML), businesses can extract valuable insights from data and make data-driven decisions that push growth and innovation. Our Machine Learning services focus on building models that analyze large datasets and predict future trends, helping you stay ahead of the competition. From recommendation systems to predictive analytics, our team works closely with you to develop custom ML solutions that help you use data effectively to drive business success.",
    listHeading: "Our Machine Learning Services Include:",
    listServices: [
      "Data Analysis and Visualization: Transforming complex data into meaningful insights through advanced analytics.",
      "Predictive Analytics: Using past data to predict trends and inform decision-making.",
      "Custom ML Model Development: Tailored models to address your business’s specific challenges.",
      "Optimization Algorithms: Enhance the performance of your ML models for better results.",
      "Real-Time Data Processing: Real-time analysis to support quicker decision-making.",
    ],
    icon: (
      <FaChartLine className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 6,
    title: "Cloud Computing",
    description:
      "Cloud computing has become essential for businesses looking to scale quickly, reduce costs, and improve efficiency. At [Your Company Name], we offer Cloud Computing solutions that enable you to leverage the flexibility, security, and scalability of cloud technology to enhance your operations. Whether you're looking to migrate to the cloud, build cloud-native applications, or manage cloud resources more efficiently, our team is ready to help you unlock the full potential of the cloud.",
    listHeading: "Our Cloud Computing Services Include:",
    listServices: [
      "Cloud Migration: Seamlessly move your business to the cloud with minimal downtime.",
      "Cloud-Native App Development: Develop applications specifically designed for cloud environments.",
      "Cloud Infrastructure Management: Optimize cloud resources for cost-effective, high-performance operations.",
      "DevOps and CI/CD: Streamline development and deployment processes for continuous improvement.",
      "SaaS/PaaS Solutions: Build software and platform solutions that scale with your business needs.",
    ],
    icon: (
      <FaCloud className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
  {
    id: 7,
    title: "UI/UX Design",
    description:
      "A well-designed user interface (UI) and experience (UX) can make all the difference in how users interact with your digital products. Our UI/UX Design services are focused on creating designs that are not only visually stunning but also intuitive and easy to navigate. We take a user-centered approach, ensuring your digital products are crafted to meet your audience’s needs while delivering an engaging experience that keeps them coming back.",
    listHeading: "Our UI/UX Design Services Include:",
    listServices: [
      "User Research: Understanding your audience to design user-friendly interfaces that meet their needs.",
      "Wireframing and Prototyping: Building and testing wireframes and prototypes to visualize user journeys.",
      "UI Design: Crafting visually appealing interfaces that enhance usability.",
      "Usability Testing: Gathering feedback to refine and improve the user experience.",
      "Responsive Design: Ensuring your digital products are fully optimized across devices and screen sizes.",
    ],
    icon: (
      <FaPencilRuler className="h-[2.5rem] md:h-[3rem]  w-[2.5rem] md:w-[3rem] object-contain group-hover:scale-110 transition-all duration-300" />
    ),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
