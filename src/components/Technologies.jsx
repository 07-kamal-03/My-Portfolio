import { RiReactjsLine } from 'react-icons/ri';
import { DiJava } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { FaDrupal } from 'react-icons/fa6';
import { DiMysql } from 'react-icons/di';
import { motion } from 'framer-motion';
const animateIcon = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
export const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:1}} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={animateIcon(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={animateIcon(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiJava className='text-7xl text-cyan-400' style={{ color: '#EA2D2E' }} />
                </motion.div>
                <motion.div variants={animateIcon(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiJavascript className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div variants={animateIcon(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiHtml5 className='text-7xl text-red-600' />
                </motion.div>
                <motion.div variants={animateIcon(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiCss3 className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={animateIcon(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaDrupal className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={animateIcon(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMysql className='text-7xl text-blue-700' />
                </motion.div>
            </motion.div>
        </div>
    )
}
