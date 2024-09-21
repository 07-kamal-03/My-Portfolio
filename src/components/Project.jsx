import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

export const Project = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Projects</motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className='w-full lg:w-1/4'>
                            <a href={project.link} target='_blank'><img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' /></a>
                        </motion.div>
                        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className='w-full max-w-xl lg:w-3/4'>
                            <div className='mb-2 font-semibold'>{project.title}</div>
                            <div className='mb-4 text-neutral-400'>{project.description}</div>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-900 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
