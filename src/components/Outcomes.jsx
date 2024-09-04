import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { OUTCOMES } from '../constants'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const Outcomes = () => {
    const [trigger, setTrigger] = useState();
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>
                Outcomes
            </motion.h1>
            <ScrollTrigger onEnter={()=> setTrigger(true)} onExit={()=>setTrigger(false)}>
            <div className='flex justify-evenly flex-wrap tracking-tighter'>
                {OUTCOMES.map((outcome, index) => (
                    <motion.div key={index} className='flex flex-col items-center justify-center p-4 tracking-tight' >
                        <h2 className='text-5xl text-purple-400 pb-5'>{trigger && <CountUp start={0} end={outcome.stats} duration={2.75}  />}+</h2>
                        <p className='text-sm text-neutral-400 text-center'>{outcome.title}</p>
                    </motion.div>
                ))}
                <motion.div className='flex flex-col items-center justify-center p-4'>
                        <h2 className='text-5xl text-purple-400 pb-5'>{trigger && <CountUp start={0} end={11346} duration={2.75} />}</h2>
                        <p className='text-sm text-neutral-400 text-center'>my first leetcode contest out of 33382</p>
                    </motion.div>
            </div>
            </ScrollTrigger>
        </div>
    )
}
