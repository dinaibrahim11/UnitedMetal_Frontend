import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { useDispatch } from 'react-redux';
import { postsActions } from '../../store/posts-slice';
import classes from './ActivityView.module.css';

/**
 * Selects which posts to view from (All, Friends & family, groups, people)
 * @author Abdelrahman Mamdouh
 * @example <Activity>
 * @param {}  
 * @returns <ActivityView />
 */
const ActivityView = (props) => {
    const dispatch = useDispatch();

    const [currentView, setCurrentView] = useState('All Activity');
    
    

    return (
        <div className={classes.activity__button}>
            <DropdownButton
                key='Secondary'
                id='dropdown-variants-Secondary'
                variant='secondary'
                title={currentView}
            >
                <Dropdown.Item eventKey="1" onClick={() => { dispatch(postsActions.setView('ALL')); setCurrentView("All Activity")}}>
                    All Activity
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => { dispatch(postsActions.setView('PEOPLE')); setCurrentView("People")}}>
                    People
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={() => { dispatch(postsActions.setView('GROUPS')); setCurrentView("Groups")}}>
                    Groups
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={() => { dispatch(postsActions.setView('FRIENDS_AND_FAMILY')); setCurrentView("Friends and Family")}}>
                    Friends and Family
                </Dropdown.Item>
            </DropdownButton>
          </div>
    );
}

export default ActivityView;