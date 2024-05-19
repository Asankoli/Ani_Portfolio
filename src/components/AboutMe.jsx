import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";
import codingCat1 from "../images/codingCat1.gif";
import ninja1 from "../images/ninja.png";
import faceWithMonocle from "../images/faceWithMonocle.gif";




/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Hello 👋🏻! Nice to meet you!</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Graduate student who is continuously: </motion.h5>
              <motion.h4 variants={paragraphVariants}>Learning <motion.img src={codingCat1} alt="Loading" /> </motion.h4> 
              <motion.h4 variants={paragraphVariants}>Exploring <motion.img src={faceWithMonocle} alt="Loading" /> </motion.h4>
              <motion.h4 variants={paragraphVariants}>& Contributing <img src={ninja1} alt="loading..." width='24px'></img> </motion.h4>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Amid the exhilarating journey of my career, I passionately add new layers of technological skill to my repertoire.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Here, I wear my <span style={{ color: "var(--hl-color)" }}>problem-solving cape</span> and tackle
                 real-world challenges. With a <span style={{ color: "var(--hl-color)" }}>Master's degree</span> in Electrical and Computer Engineering 
                 from The Ohio State University, I juggle binary bits and real-life conundrums, crafting my success story and seeking new opportunities.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Life, much like a snowstorm, is a whirlwind of experiences, and I relish capturing these moments with my   
                <a class="inline-link archive-link" href="https://www.instagram.com/poem_sauce_for_the_soup/"  data-sr-id="8" > camera 📷.</a>
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" color="#ea5b5c"/>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
