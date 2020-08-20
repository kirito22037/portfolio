import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariance = {
    hidden : {
        y: "100vh"
    },
    visible: {
        y: 0,
        transition: { delay: 0 , ease: 'easeInOut' }
    },
    exit: {
        y: '-100vh',
        transition: { ease: 'easeInOut'}
    }
};

const Home = ()=>{

    const links = {
        facebook : "https://www.facebook.com/roshan.rai.315428/",
        linkedin : "https://www.linkedin.com/in/rai-roshan-962173184/"
    }

    return <motion.div
        variants={ containerVariance }
        initial="hidden"
        animate="visible"
        exit="exit"
        id="home-p"
        className="f-wrapper full-p">

            <div className="text-left mx-4">
            <div className="branding">
                <motion.h1 
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1 , delay: 1 }}
                className="minimal-h1">Hello!</motion.h1> 
                <motion.h1 
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1 , delay: 1+0.4 }}
                className="minimal-h1">I am <motion.span 
                    initial={ { opacity: 0 ,  }}
                    animate={ { opacity: 1 ,  }}
                    transition={ {ease:"easeOut" , duration: 1 , delay: 1+0.6 }}
                    style={{ color: "rgb(255, 0, 0)" , fontFamily: "Connection ii" , fontSize: "7rem" }}>
                    Roshan Rai
                    </motion.span>
                </motion.h1>

                

                <motion.h2 
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1 , delay: 1 + 0.8}}
                className="minimal-h2 mt-3 dim-white">
                    Software Development Engineer
                </motion.h2>
            </div>
            <motion.div className="contact-link"
            initial={ { opacity: 0 , y: '3rem'}}   
            animate={ { opacity: 1 , y: 0 }}
            transition={ {ease:"easeOut" , duration: 1 , delay: 1+1 }}>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-whatsapp-square"></i>
            </motion.div>
            </div>
    </motion.div>
};

export default Home;