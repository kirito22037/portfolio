import React , { useEffect } from 'react';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';

import handleScroll from '../Utils/mouseScroll';

const checkKey = (e) => {
    e = e || window.event;

    console.log("x : ",e.deltaX);
    console.log("y : ",e.deltaY);

    if (e.keyCode === 38) {
        console.log("up");
        handleScroll(false, true);
    }
    else if (e.keyCode === 40) {
        console.log("downn");
        handleScroll(true, false);
    }
};

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
}

const Container = () => {

    useEffect(()=>{
        document.onkeydown = checkKey;
    },[]);

    return <>
                <section 
                onWheel={ handleWheel }
                className="abs-pos">
                    <Home/>
                    <Skills/>
                    <Projects/>        
                </section>
    </>
};

export default Container;