import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span></h2>
        <div className="flex felx-wrap ">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center ">
                <p>image</p>
            </div>
           
            </motion.div>
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
            className="w-full lg:1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 maxw-xl py-6 ">I'm Om Tewari, a third-year college student deeply passionate about the intersection of technology and human potential. My journey in software engineering has been anchored by a robust understanding of the MERN stack and proficiency in solving intricate problems with Data Structures and Algorithms.
                  What truly captivates me now is Artificial Intelligence and Machine Learning. These fields represent the forefront of innovation, where I'm exploring how algorithms can autonomously learn and adapt from data to make informed decisions. From understanding neural networks to implementing predictive models, I find joy in deciphering complex patterns and leveraging them to solve real-world challenges.
                Currently, I'm diving deeper into AI/ML through hands-on projects and coursework, aiming to push boundaries and contribute meaningfully to the field. I believe AI/ML's potential to transform industries like healthcare, finance, and beyond is immense, and I'm driven to be at the forefront of this transformation.
                Beyond technical skills, I'm dedicated to continuous learning, attending workshops, and collaborating with peers to broaden my knowledge and perspective. My goal is to harness AI/ML to create solutions that positively impact society, paving the way for a smarter and more interconnected world.</p>
            </div>
            </motion.div>
        </div>

    </div>
  )
}

export default About
