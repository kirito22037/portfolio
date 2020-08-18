import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//import { useLocation } from 'react-router-dom';

const Home = ()=>{
    //const location = useLocation();
    //console.log(location);

    return <AnimatePresence >
        <div
        id="home-p"
        className="f-wrapper full-p">

            <div className="text-center">
            <motion.div className="branding"
            initial={ { opacity: 0 , y: '3rem' }}
            animate={ { opacity: 1 , y: 0 }}
            transition={ {ease:"easeOut" , duration: 1}}>
                <h1 className="minimal-h1">Hello! <br/> I am Roshan Rai</h1>
                <h2 className="minimal-h2 mt-3 dim-white">Software Development Engineer</h2>
            </motion.div>
            <motion.div className="contact-link"
            initial={ { opacity: 0 , y: '3rem'}}   
            animate={ { opacity: 1 , y: 0 }}
            transition={ {ease:"easeOut" , duration: 1 , delay: 1 }}>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-whatsapp-square"></i>
            </motion.div>
            </div>
    </div>
    </AnimatePresence>
};

export default Home;