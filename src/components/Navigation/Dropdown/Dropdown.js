import React from 'react'
import './Dropdown.css'

import ProfileCard from '../../UI/ProfileCard/ProfileCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
    Weird,
    Profile,
    Smile,
    Normal
} from '../../../assets/images/index'

const Dropdown = (props) => {
    return (
        <div className="Dropdown">
            <FontAwesomeIcon
                size="lg"
                icon={faAngleDown}
                onMouseOver={props.iconHoveredInHandler}
                onMouseLeave={props.iconHoveredOutHandler}
            />

            {(props.dropdown.iconHovered || props.dropdown.floatingBoxHovered) && <div className="FloatingBox"
                onMouseOver={props.floatingBoxHoveredInHandler}
                onMouseLeave={props.floatingBoxHoveredOutHandler}
            >
                <ProfileCard
                    profileImage={Profile}
                    username="Pushpa"
                    onClick={props.profileClickHandler}
                    dropdown
                />
                <ProfileCard
                    profileImage={Weird}
                    username="Shammy"
                    onClick={props.profileClickHandler}
                    dropdown
                />
                <ProfileCard
                    profileImage={Smile}
                    username="PQ"
                    onClick={props.profileClickHandler}
                    dropdown
                />
                <ProfileCard
                    profileImage={Normal}
                    username="Subhanga"
                    onClick={props.profileClickHandler}
                    dropdown
                />

                <span style={{ borderBottom: '1px solid grey', marginBottom: '7px' }}>Manage Profiles</span>
                <span>Account</span>
                <span>Help Center</span>
                <span onClick={props.logoutHandler}>Sign out of Netflix</span>
            </div>}
        </div>
    )
}

export default Dropdown