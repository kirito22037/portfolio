var it = 0;

const handleScroll = (up, down) =>{
    
    const sections = ["home-p" , "skill-p" , "project-p" ];
    var length = sections.length;
    console.log("start : ",it);

    if(up == true){    
        it++;
    }
    else{
        it--;
    }
    
    if(it>=length)
    it = length-1;

    if(it<0)
    it=0;

    console.log("it : ",it);
    window.location.href = `#${sections[it]}`;
};

export default handleScroll;