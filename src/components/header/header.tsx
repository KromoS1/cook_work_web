import React, {FC, memo, MouseEvent, useCallback, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {NavLink} from 'react-router-dom';
import style from './header.module.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Linear} from "../../generalComponens/Linear";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {ListItemIcon} from "@mui/material";
import {logOutAcc} from "../../store/reducers/StatusAppReducer";

export const Header: FC = memo(() => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const statusGeneral = useAppSelector(state => state.statusApp.statusGeneral);
    const dispatch = useAppDispatch();

    const logout = useCallback(() => {
        setAnchorEl(null);
        dispatch(logOutAcc());
    }, [dispatch])

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              id={menuId}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <AccountCircle/>
                </ListItemIcon>
                <NavLink to={'/my-account'}>My Account</NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <NavLink to={''}>Setting</NavLink>
            </MenuItem>
            <MenuItem onClick={logout}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                Log Out
            </MenuItem>
        </Menu>
    );

    return (
        <div className={style.box}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" className={style.bar}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 4}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}}}>
                            CookWorks
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={0} color="error">
                                    <MailIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit">
                                <Badge badgeContent={0} color="error">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit">
                                <AccountCircle/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                    {statusGeneral && <Linear/>}
                </AppBar>
                {renderMenu}
            </Box>
        </div>
    );
})
