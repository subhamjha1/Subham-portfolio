import HeroText from "../components/HeroText";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-between min-h-screen overflow-hidden c-space relative"
      id="home"
    >
      <HeroText />
      <motion.div
        className="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl scale-110" />
          <img
            src="/assets/mypic/myPic1.jpg"
            alt="Subham Jha"
            className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover object-top border-2 border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
