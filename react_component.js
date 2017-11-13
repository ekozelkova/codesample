import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Drawer, MenuItem} from 'material-ui';

import CallAcceptPatient from "./CallAcceptPatient";
import Erogatore from "./Erogatore";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMainForm: true,
            openDrawer: false
        };
    }

    /**
     * Navigates to the screen with the list of hospital services
     */
    switchToList = () => this.setState({isMainForm: false});

    /**
     * Navigates to the screen with the patient form
     */
    switchToMainForm = () => this.setState({isMainForm: true});

    /**
     * Toggles the sidebar menu
     */
    toggleSidebar = () => this.setState({openDrawer: !this.state.openDrawer});


    render() {
        let isMainForm = this.state.isMainForm;

        let content;
        if (isMainForm) {
            content = <CallAcceptPatient onErogatoreClick={this.switchToList}/>;
        }
        else {
            content = <Erogatore onBackBtnClick={this.switchToMainForm}/>;
        }

        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="date">
                        <p className="date__time">14:42</p>
                        <p className="date__day">Monday 19 August</p>
                    </div>

                    <div>
                        <i className="material-icons hamburger-icon" onClick={this.toggleSidebar}>menu</i>

                        <Drawer
                          docked={false}
                          width={200}
                          open={this.state.openDrawer}
                          onRequestChange={(open) => this.setState({openDrawer: open})}
                        >
                            <div className="sidebar">
                                <MenuItem className="sidebar-menu__item sidebar-menu__user-name">ALBERTO GIUSTINO</MenuItem>
                                <MenuItem className="sidebar-menu__item sidebar-menu__configuration">ACCETTAZIONI E CASSA</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item">Accept a patient</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item">Call a patient</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item">First aid</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item">Statistics</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item">Notifications</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item sidebar-menu__pause">Pause</MenuItem>
                                <MenuItem onClick={this.toggleSidebar} className="sidebar-menu__item">Log out</MenuItem>
                                <MenuItem className="sidebar-menu__item sidebar-menu__copyright">Copyright 2017, Artexe S.p.A.</MenuItem>
                            </div>
                        </Drawer>
                    </div>

                    {content}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

