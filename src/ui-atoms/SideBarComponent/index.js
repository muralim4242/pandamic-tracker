import { Drawer } from '@material-ui/core';
import React from 'react';
import './index.css';



const styles = {
    list: {
        width: 250,
    }
};

class SideBar extends React.Component {
    state = {
        left: true,
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    render() {
        const { classes, sidelist, show, onClose } = this.props;

        return (
            <div className="root1">
                <Drawer open={show} onClose={onClose}>
                    <div
                        className="list"
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sidelist}
                    </div>
                </Drawer>
            </div>
        );
    };
};

export default SideBar;





{/* <List>
              {['Auto', 'car', 'bus', 'Train', 'plane', 'Truck', 'Van', 'jeep', 'Other Vehicle']
             // .map((text, index) => (
            //     <ListItem button key={text}>
            //         <ListItemIcon>{index[List] = (
            //                <span class="material-icons"> directions_car</span>,
            //                <span class="material-icons">
            //                directions_bus
            //                </span>
            //       )
            //         }</ListItemIcon>
            //       <ListItemText primary={text} />
            //     </ListItem>
            //   ))
        }
            </List> */}