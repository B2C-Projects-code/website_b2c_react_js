'use client'
import React from 'react'
import ProfileMenuStyled from './overrides/profileMenuStyled'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Divider, Menu, MenuItem } from '@mui/material';
function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ProfileMenuStyled
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="extended">
                <MenuIcon fontSize='small' />
                <AccountCircleIcon fontSize='large' sx={{ ml: 1.5 }} />
            </ProfileMenuStyled>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            minWidth: 200,
                            borderRadius: 3
                        }
                    }
                }}
            >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Sign up</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>

            </Menu >
        </>
    )
}

export default ProfileMenu