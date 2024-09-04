import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

export const Education = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>
                Education
            </motion.h1>
            <div>
                {EDUCATION.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className='w-full lg:w-1/2'>
                            <p className='mb-2 text-neutral-400 text-1xl'>{experience.name}</p>
                        </motion.div>
                        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{experience.degree} - <span className='text-sm text-purple-100'>{experience.major}</span></h6>
                            <p className='mb-4 text-neutral-400'>{experience.mark}</p>
                            <p className='mb-4 text-neutral-400'>{experience.year}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
