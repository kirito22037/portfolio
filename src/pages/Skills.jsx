import React from 'react';
import {motion , AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const containerVariance = {
    hidden : {
        y: "100vh"
    },
    visible: {
        y: 0,
        transition: { delay: 0 , ease: "easeInOut"}
    },
    exit: {
        y: '-100vh',
        transition: { ease: 'easeInOut'}
    }
};

const Skills = ()=>{

    return <motion.div
        variants={ containerVariance }
        initial="hidden"
        animate="visible"
        exit="exit"
        id="skill-p"
        className="f-wrapper full-p">
                
                <div className="text-center">
                <motion.h1
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1}} 
                className="minimal-h1 mb-3">
                    SKILLs SET
                </motion.h1>
                <motion.div
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1 , delay: 1}} 
                id="skill-set">
                    <div className="s-set">
                        
                        <div>
                            <ul className="skill-list">
                                <li className="minimal-li"> C++ </li>
                                <li className="minimal-li"> C </li>
                                <li className="minimal-li"> JS </li>
                            </ul>
                            <div>
                                <i class="fab fa-cuttlefish"></i>
                                <i class="fab fa-js"></i>
                            </div>
                        </div>

                    </div>

                    <div className="s-set">

                        <div>
                            <ul className="skill-list">
                                <li className="minimal-li"> React JS </li>
                                <li className="minimal-li"> Node JS </li>
                                <li className="minimal-li"> Express JS </li>
                            </ul>
                            <div>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-node"></i>
                            </div>
                        </div>

                    </div>

                    <div className="s-set">

                        <div>
                        <ul className="skill-list">
                            <li className="minimal-li"> Mongo DB </li>
                            <li className="minimal-li"> MYSQL </li>
                            <li className="minimal-li"> FIREBASE </li>
                            <li className="minimal-li"> GIT </li>
                        </ul>
                        <div>
                            <i class="fab fa-git-alt"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fas fa-database"></i>
                        </div>
                        </div>

                    </div>
                </motion.div>
                </div>
        </motion.div>
};

export default Skills;