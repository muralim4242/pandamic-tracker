import { Drawer } from '@material-ui/core';
import Select from '@material-ui/core/List';
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
        const { classes, sidelist, show, onClose, header, handleClickItem } = this.props;
        console.log({ sidelist });
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
                        <h3 className="header">{header}</h3>
                        <Select className="unorder">
                            {sidelist.length > 0 && sidelist.map((item, key) => {
                                return (
                                    <li className={item.value ? "listitemActive" : "listitem"} key={key} onClick={() => { handleClickItem(key) }}> {item.name} {item.hasIcon && item.icon}</li>
                                );
                            })}
                        </Select>
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