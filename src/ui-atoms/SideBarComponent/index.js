import { Drawer } from '@material-ui/core';
import Select from '@material-ui/core/List';
import React from 'react';
import './index.css';


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
        const { sidelist, show, onClose, header, handleClickItem } = this.props;
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