import {useRef,useState} from 'react';
import "./portfolio.scss";
import {motion,useScroll,useSpring,useTransform,} from "framer-motion"


const items = [
  {
    id: 1,
    title: "Mini hiring platform",
    image: "image copy 9.png",
    desc: "TalentFlow is a mini hiring platform built with React that enables HR teams to manage jobs, candidates, and assessments—all without a backend. It supports drag-and-drop reordering, virtualized lists, live assessment previews, and offline persistence using IndexedDB.",
    link:"https://talentflow-nine.vercel.app/"
  },
  
  {
   
    
    
      id: 2,
    title: "YELPCAMP 2023",
    image: "Screenshot 2024-04-01 132238.png",
    desc: "YelpCamp is a web application showcasing tourist destinations, their locations, and prices, employing HTML, CSS, JavaScript,  for the frontend, and Node.js, Express.js, MongoDB for the backend, featuring user authentication, CRUD operations, and interactive location display.LINK: https://yelpcamp99.onrender.com/",
    link:"https://yelpcamp99.onrender.com/"
    
    
  },
  
  {

 id: 3,
    title: "Yoom",
    image: "Screenshot 2024-08-16 165246.png",
    desc:"Yoom is a cutting-edge online meeting platform built with Next.js, Tailwind CSS, and TypeScript. Designed as an alternative to Zoom, it offers a seamless and intuitive user experience for virtual meetings. With a focus on speed, simplicity, and modern web standards, Yoom ensures reliable and efficient communication for users worldwide. LINK: https://doom-six.vercel.app/",
    link:"https://yoom-adarshthakur398s-projects.vercel.app/"

    
  
  },
  
  {
     id: 4,
    title: "Blockchain-Decentralized-Auth",
    image: "image copy 8.png",
    desc:"Developed a blockchain based dApp using Next.js, Node.js, and MongoDB Atlas for user management Implemented MetaMask login via nonce-based signature verification and jwt tokens. Built protected routes displaying account balance and current blockchain network (Ethereum, Polygon, BSC). LINK: https://blockchain-decentralized-auth.onrender.com/",
    link:"https://blockchain-decentralized-auth.onrender.com/"
    
    
  },
  {
   
    id: 5,
    title: "PERSONAL PORTFOLIO",
    image: "Screenshot 2024-04-01 140555.png",
    desc: "I have crafted a visually dynamic portfolio using React and Framer Motion, leveraging the power of declarative components and smooth animations to showcase my skills, projects, and experiences in an engaging and interactive manner.LINK:https://github.com/AdarshThakur398/portfolio1",
    link:"https://github.com/AdarshThakur398/portfolio1"
    
    
    
  }
];

   


const Single = ({ item }) => {
  const ref = useRef(); 
  const { scrollYProgress } = useScroll({
    target: ref
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
  const handleButton = (link) => {
    window.open(link, "_blank"); 
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt={item.title}></img>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => handleButton(item.link)} aria-label={`Go to ${item.title}`}>
              SHOW
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




const Portfolio = () => {
 
    const ref=useRef();
    const {scrollYProgress}= useScroll( {
        target:ref,
        offset:["end end ", "start start"]
    })

    const scaleX= useSpring(scrollYProgress, {
        stiffness:100,
        damping:30
    })
  return (
    <div className="portfolio">
        <div className="progress">
            <h1 className="mobo">Featured Work</h1>
            <motion.div  style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      
      ))}
    </div>
  );
};

export default Portfolio;
