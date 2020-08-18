import React, {useEffect} from 'react';
import ScrollHor from '../Utils/ScrollHor';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ProjectCont = () =>{

    const data = [{ id:1 }, {id:2},{id:3}];

    return ( 
        <motion.div
        initial={ { opacity: 0 , y: '3rem' }}
        animate={ { opacity: 1 , y: 0 }}
        transition={ {ease:"easeOut" , duration: 1 , delay: 1.5 }}
        className="car-cont">
           
        <Carousel>  
            { data.map( x => {
                 return <Carousel.Item >  
                 <div   
                 className="imgCont"/>  
                     <Carousel.Caption>  
                         <h3>{ x.id } Demo  </h3>  
                         <i class="fab fa-react"></i>
                        <i class="fab fa-node"></i>
                     </Carousel.Caption>  
                 </Carousel.Item  > 
             }) }  
        </Carousel>  
                  
        </motion.div>
)
};

export default ProjectCont;
