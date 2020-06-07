import React from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css"; 
const $ = window.$;
M.AutoInit();
// import App from './App'
class PageNotFound extends React.Component{

    componentDidMount() {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.init(elem, { indicators: true });
      }

    render(){
        return <div>
            <h1 style={{textAlign:"center",}}>404 Page Not Found</h1>
             <div className="container center-align">
     <div className="carousel"> 

      <a className="carousel-item" href="#one!">
        <img src="https://i.imgur.com/xbSegsSb.jpg" alt="link" />
      </a>
      <a className="carousel-item" href="#two!">
        <img src="https://i.imgur.com/FRX5UR1.jpg" alt="link"/>
      </a>
      <a className="carousel-item" href="#two!">
        <img src="https://i.imgur.com/lCtvzrxb.jpg" alt="link"/>
      </a>
      <a className="carousel-item" href="#three!">
       <img src="https://i.imgur.com/j8i0asEb.jpg" alt="link"/>
      </a>
      <a className="carousel-item" href="#four!">
       <img src="https://i.imgur.com/Tqmi0k1b.png" alt="link"/>
      </a>
       <a className="carousel-item" href="#five!">
        <img src="https://i.imgur.com/GSEB88ib.png" alt="link"/>
       </a>
       
       <a className="carousel-item" href="#sex!">
        <img src="https://i.imgur.com/mKVbFNCb.jpg" alt="link"/>
       </a>

       <a className="carousel-item" href="#seven!">
        <img src="https://i.imgur.com/lO5EiTbb.jpg" alt="link"/>
       </a>
       <a className="carousel-item" href="#nine">
        <img src="https://i.imgur.com/bcQ3exC.jpg" alt="link"/>
       </a>
       <a className="carousel-item" href="#eats">
        <img src="https://i.imgur.com/ANc6gbW.jpg" alt="link"/>
       </a>
       <a className="carousel-item" href="#ten">
        <img src="https://i.imgur.com/1TkEXc0.jpg" alt="link"/>
       </a>
       <a className="carousel-item" href="#fuck">
        <img src="https://i.imgur.com/OYMFneE.jpg" alt="link"/>
       </a>
       <a className="carousel-item" href="#fuck">
        <img src="https://i.imgur.com/qLLb4iV.jpg" alt="link"/>
       </a>
       <a className="carousel-item" href="#fuck">
        <img src="https://i.imgur.com/fVIhFLt.jpg" alt="link" />
       </a>
       <a className="carousel-item" href="#fuck">
        <img src="https://i.imgur.com/4U2nldl.jpg" alt="link" />
       </a>
     </div>
    </div> */}          
            <p class="green-text" style={{textAlign:"center", text: 'green'}}>
              <Link to='/' >Wrong way you have gone! Go back you must</Link>
            </p>
          </div>;
    }
}
export default PageNotFound;