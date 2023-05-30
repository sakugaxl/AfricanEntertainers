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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "products",
      title: "Products",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Talent Management",
      icon: web,
    },
    {
      title: "Production Services",
      icon: mobile,
    },
    {
      title: "Consulting",
      icon: backend,
    },
    {
      title: "Film Financing",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const products = [
    {
      name: "SAGE",
      description: "ACRYLIC ON DALA PAPER 50gsm",
      price: "4500.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "POETRY PAINT",
          color: "blue-text-gradient",
        },
        {
          name: "50x65cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "SAI",
      description: "ACRYLIC ON DALA PAPER 50gsm",
      price: "5 000.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "POETRY PAINT",
          color: "blue-text-gradient",
        },
        {
          name: "50x65cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "DESE DESE",
      description: "ACRYLIC ON CANVAS",
      price: "8 500.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "BLACK MANSO COLLECTION",
          color: "blue-text-gradient",
        },
        {
          name: "102x76cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "SONS OF SOLOMON",
      description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
      price: "9 000.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "POETRY PAINT",
          color: "blue-text-gradient",
        },
        {
          name: "70x100cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "PONDER",
      description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
      price: "9 000.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "POETRY PAINT",
          color: "blue-text-gradient",
        },
        {
          name: "70x100cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "199SOMETHING",
      description: "ACRYLIC ON CANVAS",
      price: "11 000.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "BLACK MANSO COLLECTION",
          color: "blue-text-gradient",
        },
        {
          name: "102x96cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "CHILDREN OF THE SUN",
      description: "ACRYLIC ON CANVAS",
      price: "9 500.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "BLACK MANSO COLLECTION",
          color: "blue-text-gradient",
        },
        {
          name: "76x76cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "RAPHADU",
      description: "ACRYLIC ON CANVAS",
      price: "11 000.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "BLACK MANSO COLLECTION",
          color: "blue-text-gradient",
        },
        {
          name: "102x96cm",
          color: "green-text-gradient",
        },
      ],
    },
    {
      name: "ITS ALL THE SAME",
      description: "ACRYLIC ON CANVAS",
      price: "8 000.00",
      image: "https://via.placeholder.com/150",
      tags: [
        {
          name: "BLACK MANSO COLLECTION",
          color: "blue-text-gradient",
        },
        {
          name: "102x96cm",
          color: "green-text-gradient",
        },
      ],
    },
    // {
    //   name: "TYMA",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "11 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "102x96cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "CASUAL DAY",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "8 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "76x76cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "CHILLAS",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "8 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "76x76cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "LETTERS TO MY CRUSH",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "N/A",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "75x90cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "16V",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "25 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "122x92cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "THE LOST SHEEP",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "10 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "75x90cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "MEN OF THE MOUNTAIN",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "25 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "122x92cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "WITHOUT DOUBT",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "18 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "122x92cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "MAKHI KA DI PLASTIC",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "16 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "122x92cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "MAKHI KA DI PLASTIC",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "16 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "BLACK MANSO COLLECTION",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "122x92cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "BLUE",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "10 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "75x90cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "MM.NORBET",
    //   description: "ACRYLIC ON DALA PAPER 600gsm",
    //   price: "12 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "80x106cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "SHAMISOS SUNSET",
    //   description: "ACRYLIC ON DALA PAPER 105gsm",
    //   price: "20 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "80x110cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "KEKE",
    //   description: "ACRYLIC ON DALA PAPER 600gsm",
    //   price: "12 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "80x106cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "MM.NOBERT",
    //   description: "ACRYLIC ON DALA PAPER 600gsm",
    //   price: "12 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "80x106cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "SELF",
    //   description: "ACRYLIC ON DALA PAPER 120gsm",
    //   price: "15 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "80x110cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "THE RETURNING SEED",
    //   description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
    //   price: "25 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "75x126cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "THE SAGE",
    //   description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
    //   price: "12 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "70x100cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "THE HEALING CITY",
    //   description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
    //   price: "10 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "70x100cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "KHAKUZA",
    //   description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
    //   price: "15 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "70x100cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "NGWEDI",
    //   description: "ACRYLIC ON CANVAS",
    //   price: "12 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "75x120cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "AZANIA",
    //   description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
    //   price: "15 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "70x100cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
    // {
    //   name: "BLUES",
    //   description: "ACRYLIC PAINT ON FABIANO PAPER 300gsm",
    //   price: "8 000.00",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     {
    //       name: "POETRY PAINT",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "70x100cm",
    //       color: "green-text-gradient",
    //     },
    //   ],
    // },
  ];
  
  export { services, technologies, experiences, testimonials, products };