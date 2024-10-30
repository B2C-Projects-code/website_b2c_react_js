"use client"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, Toolbar, useMediaQuery } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StyledBadge from '../../header/components/overrides/cartStyled';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery('(min-width: 992px)');
    if (matches) {
        return null;
    }
    return (
        <>
            <Paper sx={{ position: 'fixed', zIndex: 999999, bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels

                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{

                        '.MuiBottomNavigationAction-root ': {
                            px: .5,
                            minWidth: 70,
                        }
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction label="Categories" icon={<CategoryOutlinedIcon />} />
                    <BottomNavigationAction label="Nearby" icon={
                        <StyledBadge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </StyledBadge>
                    } />
                    <BottomNavigationAction label="Wishlist" icon={<FavoriteOutlinedIcon />} />
                    <BottomNavigationAction label="Account" icon={<AccountCircleOutlinedIcon />} />

                </BottomNavigation>
            </Paper>
            <Toolbar />
        </>

    );
}
