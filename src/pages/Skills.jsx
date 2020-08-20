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
                
                <div className="text-center" style={ { minWidth: "100%" }}>
                
                <motion.h1
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1 }} 
                className="minimal-h1 mb-5 mt-3"
                style={{ fontFamily: "Connection ii" }}>
                    SKILLs SET
                </motion.h1>

                <div className="d-flex justify-content-center">
                <div 
                className="d-flex justify-content-center flex-wrap"
                style={ { width: "90%"}}>

                    <motion.div 
                    initial={ { opacity: 0 , y: '3rem' }}
                    animate={ { opacity: 1 , y: 0 }}
                    transition={ {ease:"easeOut" , duration: 1, delay: 1}}
                    className="card align-self-stretch flex-grow-1 mx-3 mb-4 d-flex align-items-center justify-content-center"
                    style={ { backgroundColor : "rgb(36, 35, 35)" , width : "16rem" , }}>
                        <div className="">
                            <ul className="skill-list">
                                <li className="minimal-li "> C++ </li>
                                <li className="minimal-li "> C </li>
                                <li className="minimal-li "> JS </li>
                            </ul>
                            <div>
                                <i class="fab fa-cuttlefish red"></i>
                                <i class="fab fa-js red"></i>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    initial={ { opacity: 0 , y: '3rem' }}
                    animate={ { opacity: 1 , y: 0 }}
                    transition={ {ease:"easeOut" , duration: 1, delay: 1+0.2}}
                    className="card align-self-stretch flex-grow-1 mx-2 mb-4 d-flex align-items-center justify-content-center"
                    style={ { backgroundColor : "rgb(36, 35, 35)" , width : "16rem", }}>
                        <div>
                            <ul className="skill-list">
                                <li className="minimal-li"> React JS </li>
                                <li className="minimal-li"> Node JS </li>
                                <li className="minimal-li"> Express JS </li>
                            </ul>
                            <div>
                                <i class="fab red fa-react"></i>
                                <i class="fab red fa-node"></i>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    initial={ { opacity: 0 , y: '3rem' }}
                    animate={ { opacity: 1 , y: 0 }}
                    transition={ {ease:"easeOut" , duration: 1, delay: 1+0.4}}
                    className="card align-self-stretch flex-grow-1 mx-2 mb-4 d-flex align-items-center justify-content-center"
                    style={ { backgroundColor : "rgb(36, 35, 35)" , width : "16rem" , }}>

                        <div>
                        <ul className="skill-list">
                            <li className="minimal-li"> Mongo DB </li>
                            <li className="minimal-li"> MYSQL </li>
                            <li className="minimal-li"> FIREBASE </li>
                            <li className="minimal-li"> GIT </li>
                        </ul>
                        <div>
                            <i class="fab red fa-git-alt"></i>
                            <i class="fab red fa-github"></i>
                            <i class="fab red fas fa-database"></i>
                        </div>
                        </div>

                    </motion.div>
                </div>
                </div>
                </div>
        </motion.div>
};

export default Skills;