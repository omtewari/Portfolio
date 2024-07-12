import { motion } from "framer-motion"

const container= (delay)=>({
  hidden: { x:-100, opacity:0 },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  }

})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col item center lg:items-start">
                <motion.h1  
               variants={container(0)}
               initial="hidden"
               animate="visible"
                className="pb-16 text6xl font-thin tracking-tight lg:mb-16 lg:text-8xl">Om Tewari</motion.h1>
                <motion.span 
                 variants={container(0.3)}
                 initial="hidden"
                 animate="visible"
                className="bg-gradient-to-r from bg-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-4xl tracking-tight
                text-transparent">
                Software Developer
                </motion.span>
               <motion.p 
                variants={container(0.7)}
                initial="hidden"
                animate="visible"
               className="my-2 max-w-xl py-6 font-light tracking-tight"> I have delved deep into the MERN stack, gaining hands-on experience with its components to build robust web applications. My understanding of Data Structures and Algorithms is strong.
                  Recently, I've embarked on a journey into the realms of Artificial Intelligence and Machine Learning, fascinated by their potential to revolutionize various industries. I'm eager to apply my skills in these fields to innovate and create impactful solutions.</motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img 
              initial={{x:100,opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1,delay:1}}
              src="" alt="Profile Pic" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
