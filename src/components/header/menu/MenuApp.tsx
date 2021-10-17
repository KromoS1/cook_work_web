import React, {FC, memo} from 'react'
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {NavLink} from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Menu from "@mui/material/Menu";
import {MenuType} from "../header";

export const MenuApp: FC<MenuType> = memo(props => {

    return (
        <Menu anchorEl={props.anchor}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              id={'app-menu'}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={props.isOpen}
              onClose={props.close}>
            <MenuItem onClick={props.close}>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <NavLink to={'/'}>Главная</NavLink>
            </MenuItem>
            <MenuItem onClick={props.close}>
                <ListItemIcon>
                    <ListAltIcon/>
                </ListItemIcon>
                <NavLink to={'/resume'}>Мое резюме</NavLink>
            </MenuItem>
        </Menu>

    )
})
