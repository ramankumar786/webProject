import React from "react";
import '../calculator/calculator.css';
function Calculator() {
    return (
     <>
     <section>
     <div className="outer-box" >
      <div className="inner-box">
        <h1 className="head">Calculator</h1>
        <main>
          <div className="screen"> </div>

          <div className="pad">
            <div className="first-row">
              <div className="key"><button className="btn">7</button></div>
              <div className="key"><button className="btn">8</button></div>
              <div className="key"><button className="btn">9</button></div>
              <div className="key"><button className="btn">÷</button></div>
            </div>

            <div className="second-row">
              <div className="key"><button className="btn">4</button></div>
              <div className="key"><button className="btn">5</button></div>
              <div className="key"><button className="btn">6</button></div>
              <div className="key"><button className="btn">×</button></div>
            </div>

            <div className="third-row">
              <div className="key"><button className="btn">1</button></div>
              <div className="key"><button className="btn">2</button></div>
              <div className="key"><button className="btn">3</button></div>
              <div className="key"><button className="btn">-</button></div>
            </div>

            <div className="fourth-row">
              <div className="key"><button className="btn">0</button></div>
              <div className="key"><button className="btn">.</button></div>
              <div className="key"><button className="btn">+</button></div>
              <div className="key"><button className="btn">=</button></div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </section>

        
     </>
    );
  }
  
  export default Calculator;
  