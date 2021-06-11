import React, { Component } from 'react';
import "./index.css";



class DialogComponent extends Component {
    render() {
        let dialog = (
            <div className={"Dialog"}  >
                <div className={"DialogStyles"}>
                    <div className={"DialogText"}>
                        {this.props.children}
                </div>
                    <button className={"DialogButton"} onClick={this.props.onClose}>Done</button>
                </div>
            </div>
        );

        if (!this.props.isOpen) {
            dialog = null;
        }

    
    return(
        <div> 
           { dialog }
         </div >
    );

}
}


export default DialogComponent;