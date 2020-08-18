import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import ProjectCont from '../components/ProjectCont';

const containerVariance = {
    hidden : {
    y: "100vh"
    },
    visible: {
        y: 0,
        transition: { delay: 0 , ease: "easeInOut" }
    },
    exit: {
        y: '-100vh',
        transition: { ease: 'easeInOut'}
    }
};

const Projects = () => {
    
    return <motion.div 
    variants={ containerVariance }
    initial="hidden"
    animate="visible"
    exit="exit"
    id="project-p"
    className="f-wrapper full-p">

        <div className="text-center">
            <motion.h1 
            initial={ { opacity: 0 , y: '3rem' }}
            animate={ { opacity: 1 , y: 0 }}
            transition={ {ease:"easeInOut" , duration: 1}}
            className="minimal-h1">
                Projects
            </motion.h1>
            <ProjectCont/>
        </div>
    </motion.div>
};

export default Projects;