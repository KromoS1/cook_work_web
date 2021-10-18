import React, {FC, memo} from 'react'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {ListItemIcon} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {NavLink} from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {MenuType} from "../header";

type MenuAccType = MenuType & {
    logout: () => void
}

export const MenuAcc: FC<MenuAccType> = memo(props => {

    return (
        <Menu anchorEl={props.anchor}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              id={'account-menu'}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={props.isOpen}
              onClose={props.close}>
            <MenuItem onClick={props.close}>
                <ListItemIcon>
                    <AccountCircle/>
                </ListItemIcon>
                <NavLink to={'/account'}>Мой аккаунт</NavLink>
            </MenuItem>
            <MenuItem onClick={props.close}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <NavLink to={''}>Настройки</NavLink>
            </MenuItem>
            <MenuItem onClick={props.logout}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                Выйти
            </MenuItem>
        </Menu>
    )
})
