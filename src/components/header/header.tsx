import React, {FC, memo, MouseEvent, useCallback, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import style from './header.module.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Linear} from "../../generalComponens/Linear";
import {logOutAcc} from "../../store/reducers/StatusAppReducer";
import {MenuApp} from "./menu/MenuApp";
import {MenuAcc} from "./menu/MenuAcc";

export type MenuType = {
    anchor:null | HTMLElement
    isOpen:boolean
    close: () => void
}

export const Header: FC = memo(() => {
    const [anchorElAcc, setAnchorElAcc] = useState<null | HTMLElement>(null);
    const isMenuOpenAcc = Boolean(anchorElAcc);
    const [anchorElApp, setAnchorElApp] = useState<null | HTMLElement>(null);
    const isMenuOpenApp = Boolean(anchorElApp);
    const statusGeneral = useAppSelector(state => state.statusApp.statusGeneral);
    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    const dispatch = useAppDispatch();

    const logout = useCallback(() => {
        setAnchorElAcc(null);
        dispatch(logOutAcc());
    }, [dispatch])

    const handleAccMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
        setAnchorElAcc(event.currentTarget);
    }, []);
    const handleMenuAccClose = useCallback(() => {
        setAnchorElAcc(null);
    }, []);

    const handleAppMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
        setAnchorElApp(event.currentTarget);
    }, []);
    const handleMenuAppClose = useCallback(() => {
        setAnchorElApp(null);
    }, []);

    if (!isAuth) return <></>

    return (
        <div className={style.box}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" className={style.bar}>
                    <Toolbar>
                        <IconButton
                            aria-controls={'app-menu'}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleAppMenuOpen}
                            sx={{mr: 4}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {sm: 'block'}}}>
                            CookWorks
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{display: {md: 'flex'}}}>
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
                                aria-controls={'account-menu'}
                                aria-haspopup="true"
                                onClick={handleAccMenuOpen}
                                color="inherit">
                                <AccountCircle/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                    {statusGeneral && <Linear/>}
                </AppBar>
                <MenuApp isOpen={isMenuOpenApp} close={handleMenuAppClose} anchor={anchorElApp}/>
                <MenuAcc isOpen={isMenuOpenAcc} close={handleMenuAccClose} anchor={anchorElAcc} logout={logout}/>
            </Box>
        </div>
    );
})
