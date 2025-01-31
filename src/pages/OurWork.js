import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
// Import The OurWork Page Components

// Images
// import athlete from "../img/athlete-small.png";
// import theracer from "../img/theracer-small.png";
// import goodtimes from "../img/goodtimes-small.png";

// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimate,
  lineAnimate,
  slider,
  sliderContainer,
  scrollReveal,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className="frame-1"></motion.div>
        <motion.div variants={slider} className="frame-2"></motion.div>
        <motion.div variants={slider} className="frame-3"></motion.div>
        <motion.div variants={slider} className="frame-4"></motion.div>
      </motion.div>

      <div className="movie">
        <motion.h2 variants={fade}>Portfolio ReactJS</motion.h2>
        <motion.div variants={lineAnimate} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <motion.img variants={photoAnimate} src="https://wallpapercave.com/wp/wp7718053.png" alt="athlete" />
        </Link>
      </div>

      <motion.div
        className="movie"
        ref={element}
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Portfolio VueJS</motion.h2>
        <motion.div variants={lineAnimate} className="line"></motion.div>
        <Link to="/work/theracer">
          <motion.img variants={photoAnimate} src="https://miro.medium.com/v2/resize:fit:770/1*vfUSAwgoa_qnM_1nCmWO3g.png" alt="theracer" />
        </Link>
      </motion.div>

      <motion.div
        className="movie"
        ref={element2}
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>FullStack ReactJS</motion.h2>
        <motion.div variants={lineAnimate} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img variants={photoAnimate} src="https://strapi.dhiwise.com/uploads/full_stack_react_app_Main_Image_ccf4975772.webp" alt="goodtimes" />
        </Link>
      </motion.div>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 0;
  .movie {
    padding-bottom: 10rem;
    h2 {
      padding: 1rem 0;
      color: white;
    }
    .line {
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
    a {
      display: block;
      overflow: hidden;
    }
  }
  .frame-1,
  .frame-2,
  .frame-3,
  .frame-4 {
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
  }
  .frame-2 {
    background: #ff8efb;
  }
  .frame-3 {
    background: #8ed2ff;
  }
  .frame-4 {
    background: #8effa0;
  }
`;

export default OurWork;
