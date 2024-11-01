import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import { Menu } from 'lucide-react'
import {navdata} from "../constants.js"


const NavBar = ({activeTab}) => {
    const dispatch = useDispatch();
    const linkNav = navdata.navlinks
    const [statusNav, changeStatusNav] = useState(null);
    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    }
    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        toggleNav();
    }
    return (
        <header>
            <div className="logo">
                <img src="/logo.jpg" alt=""/>
            </div>
            <nav className={statusNav}>
                {
                linkNav.map(value => (
                    <span key={value.id}
                    className={activeTab === value.href ? 'active': ''}
                    onClick={()=>changeTab(value.href)}>{value.label}</span>
                ))
                }
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <Menu/>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => ({
    activeTab: state.activeTab
  });

  export default connect(mapStateToProps, { changeTabActive })(NavBar);
