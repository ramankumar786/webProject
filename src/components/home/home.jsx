import React from "react";
import { Link } from "react-router-dom";
import './home.css';

function Home(){
return(
    <div>
<section className="home">
<div className="home-container">
    <div className="home-heading">
        Welcome
    </div>
</div>

</section>

<section className="project-list">
<div className="project-container">
    <div className="project-item">
        <div className="project-item-heading"><h1 >Calculator</h1></div>
       <div className="project-item-link"><h3 ><Link to ="/calculator" className="project-item-a">Click Here</Link></h3></div>
    </div>
    <div className="project-item">
        
    </div>
    <div className="project-item">
        
    </div>
    <div className="project-item">

</div>
<div className="project-item">
    
</div>
<div className="project-item">
    
</div>
</div>

</section>
</div>
);

}

export default Home;