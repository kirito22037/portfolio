import React , { useEffect } from 'react';
import { Route , Switch , withRouter , useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';

import handleScroll from '../Utils/mouseScroll';

const checkKey = (pathname) => {
    const e = window.event;

    console.log("pathname : ", pathname);

    console.log("x : ",e.deltaX);
    console.log("y : ",e.deltaY);

    if (e.keyCode === 38) {
        console.log("up");
        handleScroll(false, true , pathname);
    }
    else if (e.keyCode === 40) {
        console.log("downn");
        handleScroll(true, false , pathname);
    }
};
/*
const handleWheel = (e)=>{
    console.log("y : ",e.deltaY);
    console.log("x : ",e.deltaX);

    if( e.deltaY != 0 )
    {
        if(e.deltaY > 0)
        {
            handleScroll(true, false);
        }
        else
        {
            handleScroll(false, true);
        }
    }
}*/

const Container = () => {

    var location = useLocation();
    console.log(location.pathname);

    useEffect(()=>{
        console.log("once --------------- ");

        document.onkeydown = () => {checkKey(location.pathname)};
    },[location]);

    return <>
                <div
                //onWheel={ handleWheel }
                className="abs-pos">
                    
                    <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={ location.pathname }>
                        <Route exact path='/'  component={Home} />
                        <Route path='/skills'  component={Skills} />
                        <Route path='/projects'  component={Projects} />
                    </Switch>   
                    </AnimatePresence>  
                    
                </div>
    </>
};

export default withRouter(Container);