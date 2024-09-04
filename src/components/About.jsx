import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from 'framer-motion';
export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1.5}} className="my-20 text-center text-4xl">
                About <span className="text-neutral-500">ME</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center justify-start">
                        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}
