import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    django,
    rest,
    itgate,
    ecommerce,
    bitcoin,
    fulls,
    ui,
    bootstrap,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "UI/UX designing",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Web security",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },


  ];
  
  const experiences = [
    {
      title: "Django Developer",
      company_name: "",
      icon: django,
      iconBg: "#4A5568",
      date: "Freelancer",
      points: [
        "Building and maintaining web applications using Django and related technologies.",
        "Collaborating with cross-functional teams, including designers and other developers, to deliver high-quality products.",
        "Implementing efficient and scalable backend solutions while ensuring code quality.",
        "Participating in code reviews and offering valuable feedback to enhance overall development processes.",
        "Conducting security audits and ensuring compliance with industry standards.",
      ],
    },
    {
      title: "Django RESTful API Developer",
      company_name: "",
      icon: rest,
      iconBg: "#4A5568",
      date: "Freelancer",
      points: [
        "Designing and implementing RESTful APIs using Django REST Framework.",
        "Collaborating with cross-functional teams for seamless integration of API services.",
        "Ensuring data security and optimal performance in API endpoints.",
        "Participating in code reviews and maintaining codebase quality standards.",
        "Documenting API endpoints and providing developer support."
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "",
      icon: fulls,
      iconBg: "#4A5568",
      date: "Freelancer",
      points: [
        "Developed and maintained robust web applications, ensuring both front-end and back-end functionality.",
        "Collaborated with cross-functional teams to gather requirements, plan features, and deliver high-quality products.",
        "Utilized a wide range of technologies, including but not limited to React.js, Django, and other related frameworks.",
        "Implemented responsive design principles for optimal user experiences across various devices.",
        "Conducted code reviews, provided constructive feedback, and contributed to an iterative and collaborative development process.",
        // Add any additional technologies or methodologies you've used.
        // Highlight specific achievements or projects.
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "",
      icon: ui,
      iconBg: "#4A5568",
      date: "Freelancer",
      points: [
        "Designed and crafted user interfaces for various digital products.",
        "Conducted user research to understand and incorporate user needs into the design process.",
        "Created wireframes, prototypes, and visual designs for websites and applications.",
        "Collaborated with cross-functional teams, including developers, to ensure seamless implementation of designs.",
        // Include any specific design tools or methodologies you used.
        // Highlight any notable projects or achievements.
      ],
    },
    {
      title: "Cryptocurrency Trader",
      company_name: "",
      icon: bitcoin, // Replace with an appropriate icon or logo
      iconBg: "#4A5568", // Replace with an appropriate background color
      date: "Independent", // Use the relevant dates for your trading activities
      points: [
        "Engaged in independent cryptocurrency trading, exploring diverse markets and assets.",
        "Conducted thorough market research and analysis to inform trading decisions.",
        "Managed and executed cryptocurrency trades based on technical and fundamental analysis.",
        "Implemented risk management strategies to optimize trading outcomes.",
        "Maintained up-to-date knowledge of market trends, news, and regulatory developments.",
        "Achieved successful trading outcomes and demonstrated consistent profitability.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "build secure, efficient backend solutions, prioritizing seamless web performance through API design and server-side scripting.",
      name: "Oussama ayari",
      designation: "backend developer",
      company: "Potato academy",
      image: "https://cdn.discordapp.com/attachments/1093393807313219707/1204339968093462599/oussama.jpg?ex=65d45fff&is=65c1eaff&hm=515a268a87fa07c13a4cd146e9fa1103503aa9a2e8719ac6a20a5a8b4a358b46&",
    },
    {
      testimonial:
        " design user-friendly interfaces with a focus on aesthetics and functionality, ensuring a seamless and delightful user experience.",
      name: "Mariem ben a.b",
      designation: "UI/UX Designer",
      company: "Potato academy",
      image: "https://cdn.discordapp.com/attachments/1093393807313219707/1204339967807979530/mimi.png?ex=65d45fff&is=65c1eaff&hm=ab453a15eb5526daddf3b044ef59e0869863ba120123270299ff80773aa49281&"
    },
    {
      testimonial:
        "Strategic React architect, meticulously crafting sophisticated and user-centric interfaces with foresight.",
      name: "Mohamed amine",
      designation: "Frontend Developer",
      company: "Potato academy",
      image: "https://cdn.discordapp.com/attachments/1093393807313219707/1204339968479199262/amine.png?ex=65d46000&is=65c1eb00&hm=8b968bbe3bc380d25715a59b89038b58b55eec41249f52c791efd95629d94e8e&",
    },
  ];
  
  const projects = [
    {
      name: "E-commerce Store",
      description:
        "ecommerce site excels with a tech stack featuring Django, React, Scss, HTML, and CSS. It ensures a seamless, secure, and scalable shopping experience, with easy customization options.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-learning platform",
      description:
        "Our E-learning platform uses Django, RESTful API, and a frontend with JavaScript, React, SASS, HTML, and CSS. This ensures a responsive, secure, and scalable learning experience with an intuitive interface.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Considering ideas",
      description:
        "Exploring diverse concepts and contemplating options for our upcoming third project. Open to innovative ideas and seeking inspiration for the next impactful endeavor.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  