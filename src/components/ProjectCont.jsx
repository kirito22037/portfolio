import React, {useEffect} from 'react';
import { motion } from 'framer-motion';


const ProjectCont = () =>{

    const data = [
        { id:1 , title : "Mars Rover" , live : "https://kirito22037.github.io/hello-mars-" , img : "mars"}, 
        {id:2 , title : "Musix Match"}, 
        { id: 5 , title : "MD Editor" , live : "https://kirito22037.github.io/React" } , 
        {id: 3 , title : "COVID-19 DASHBOARD" , live: "http://kirito22037.github.io/covid_19_dash"} ,
        {id : 4, title : "Quotes"},
        {id : 6, title : "Quotes"},
        {id : 7, title : "Quotes"}];

    return ( 
        <div
        className="d-flex  justify-content-center flex-wrap mb-5" style={ { width: "80vw" }}>
         
        {
            data.map( (pro,index) => {

                console.log(Number(index));

                return <motion.div key={ pro.id }
                initial={ { opacity: 0 , y: '3rem' }}
                animate={ { opacity: 1 , y: 0 }}
                transition={ {ease:"easeOut" , duration: 1 , delay: 1+(0.2*Number(index)) }}
                className="card mt-3 mx-1 d-flex align-items-center justify-content-center flex-grow-1" 
                style={ { width : "14rem" , height : "14rem" ,  backgroundColor: "rgb(36, 35, 35)"}}>
                    
                    <div style={ { height: "100%", width: "100%" } }>
                    <div className="d-flex align-items-center justify-content-center" 
                    style={ { height: "76%" , width: "100%", color : "white"}}>
                        <h2>{ pro.title }</h2>
                    </div>

                    <div className="">
                        <a 
                        className="btn btn-success mr-2"
                        href={ pro.live }
                        >Live Demo</a>
                        <div 
                        className="btn btn-danger"
                        >Code</div>
                    </div>
                    </div>

                </motion.div>
            })
        }

        </div>
)
};

export default ProjectCont;


{/*   
        <Carousel>  
            { data.map( x => {
                 return <Carousel.Item key={x.id}>  
                 <img  
                 src={ mars }
                 className="imgCont"/>  
                     <Carousel.Caption className="transparent-black"> 
                         <div> 
                         <h3>{ x.title  }</h3>  
                         <i class="fab fa-react"></i>
                        <i class="fab fa-node"></i>
                        </div>

                        <div>
                            <div className="btn btn-success mr-2">Live Demo</div>
                            <div className="btn btn-danger ">CODE</div>
                        </div>
                     </Carousel.Caption>  
                 </Carousel.Item  > 
             }) }  
        </Carousel>  
            */}        