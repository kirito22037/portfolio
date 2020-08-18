import history from './history';

const handleScroll = (up, down , pathname) =>{
    
    const sections = ["" , "skills" , "projects" ];
    const map = {
        "skills" : 1,
        "projects" : 2,
    };

    var length = sections.length;

    var it = map[pathname.slice(1)] ? map[pathname.slice(1)] : 0 ;

    if(up === true){    
        it++;
    }
    else if(down === true){
        it--;
    }
    
    if(it>=length)
    it = length-1;

    if(it<0)
    it=0;

    console.log("it : ",it);
    history.push(`/${sections[it]}`);
};

export default handleScroll;