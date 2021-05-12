import React from 'react';
import SideBar from '../../../ui-atoms/SideBarComponent';
import "./index.css";
import Select from '@material-ui/core/List';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../ui-utils/commons';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TrainIcon from '@material-ui/icons/Train';
import FlightIcon from '@material-ui/icons/Flight';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

class Transport extends React.Component {

    render() {
        const { classes, show, close } = this.props;

        const sidelist = (
            <div>
            <h3  className= "header">Transport Type</h3>
                <Select className="unorder">
                    <div className="listitem"> Auto  </div>
                    <div className="listitem">car  { <DirectionsCarIcon style={{fontSize :"xx-large"}} /> } </div>
                    <div className="listitem">Bus {< DirectionsBusIcon style={{fontSize :"xx-large"}}/>}</div>
                    <div className="listitem">Train  {< TrainIcon style={{fontSize :"xx-large"}}/>} </div>                  
                    <div className="listitem">plane{< FlightIcon style={{fontSize :"xx-large"}}/>} </div>
                    <div className="listitem">Truck {< LocalShippingIcon style={{fontSize :"xx-large"}}/>}</div>
                    <div className="listitem">Van {< AirportShuttleIcon style={{fontSize :"xx-large"}}/>} </div>
                    <div className="listitem">Jeep </div>
                    <div className="listitem">Other Vehicle </div>
                </Select>

            </div>
        );
        console.log("sideList",sidelist);

        return (
            <div className={"classes.sidebar"}>
                <SideBar
                   // close={ close }
                   onClose= {close}
                    show={show}
                    sidelist={sidelist}
                />

            </div>
        );
    };
};

const mapStateToProps = ({ screenConfiguration}) =>{
const { preparedFinalObject = {} } = screenConfiguration;
const { sidebar_transport } =  preparedFinalObject;
const {} = sidebar_transport;
return {};
}


export default connect(mapStateToProps,mapDispatchToProps)(Transport);




{/* <div 
className="listitem"
type="text"
placeholder="Auto"
icon = { <DirectionsCarIcon />}
icon position = {"input-icon-right"}
value={Auto}
/>  */}