import React from 'react';

const About = ()=>{

    const aboutData = {
        college : "ARMY INSTITUTE OF TECHNOLOGY",
        year : "3rd ",
        cource : "B.Engineering",
        major : "Information Technology"
    };

    return <motion.div
    variants={ containerVariance }
    initial="hidden"
    animate="visible"
    exit="exit"
    id="skill-p"
    className="f-wrapper full-p">
        <div className="text-center">

        </div>
    </motion.div>
};

export default About;