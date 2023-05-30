// import { motion } from 'framer-motion';

import { styles } from '../styles';
// import { ComputersCanvas, StatueCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <span className="text-primary">African Entertainers Consultancy,</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
          a comprehensive artist and asset management entertainment company. We specialize in the development and representation of literary writers, screenwriters, directors, and actors, and we're proud to manage some of the industry's most established professionals in all areas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero