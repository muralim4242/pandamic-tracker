
import React from 'react';
import './index.css';

class Loader extends React.Component{

render(){
    return(
        <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>

    </div>
    )
}

}
export default Loader
