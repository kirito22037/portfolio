import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import ProjectCont from '../components/ProjectCont';

const Projects = () => {
    
    return <motion.div 
    id="project-p"
    className="f-wrapper full-p">
        <div className="text-center">
            <motion.h1 
            initial={ { opacity: 0 , y: '3rem' }}
            animate={ { opacity: 1 , y: 0 }}
            transition={ {ease:"easeOut" , duration: 1}}
            className="minimal-h1">
                Projects
            </motion.h1>
            <ProjectCont/>
        </div>
    </motion.div>
};

export default Projects;