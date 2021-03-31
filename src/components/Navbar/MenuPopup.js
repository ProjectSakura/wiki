import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";

import {
    usePopupState,
    bindTrigger,
    bindMenu,
  } from 'material-ui-popup-state/hooks'
  
  const MenuPopupState = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
    return (
      <div>
         <MenuIcon {...bindTrigger(popupState)}/>
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={popupState.close}>Home</MenuItem>
          <MenuItem onClick={popupState.close}>Downloads</MenuItem>
          <MenuItem onClick={popupState.close}>Stats</MenuItem>
          <MenuItem onClick={popupState.close}>Blog</MenuItem>
        </Menu>
      </div>
    )
  }
  export default MenuPopupState