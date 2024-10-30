'use client'
import * as React from 'react';
import { Toolbar, List, ListItem, Stack, IconButton, Typography, Container, useMediaQuery } from '@mui/material';
import HeaderStyled from './overrides/headerStyle'
import Image from 'next/image';
import Link from 'next/link';
import { ProfileMenu } from '@src/components/menus';
import StyledBadge from './overrides/cartStyled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MainSearch } from '@src/components/mainSearch';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MobileSearch } from '@src/components/mainSearch';
export default function AppBar() {
    const matches = useMediaQuery('(min-width: 992px)');
    const isMobile = useMediaQuery('(max-width: 768px)');
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isScrolled, setScrolled] = useState<boolean>(false)
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true)

        } else {
            setScrolled(false)
        }
    };

    React.useEffect(() => {
        const headerElement = headerRef.current;
        if (headerElement) {
            setHeaderHeight(headerElement.clientHeight);
            document.body.style.paddingTop = `${headerHeight + 36}px`;

        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerHeight, isScrolled]);
    const listVariant = {
        hidden: { opacity: 0, top: -10 },
        visible: {
            opacity: 1,
            top: 0,
        },
    };
    return (
        <motion.div layout>
            <HeaderStyled key='header' position="fixed" ref={headerRef}>
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Link href="/">
                            <Image
                                height={50}
                                width={matches ? 180 : 120}
                                alt="company logo"
                                src="/static/images/website_logo.svg"
                                priority
                            />
                        </Link>
                        {!isMobile && (
                            <List className='menu'
                                component={motion.ul}
                                variants={listVariant}
                                animate={isScrolled ? "hidden" : "visible"}

                            >
                                <ListItem>
                                    <Link href="/wishlist">
                                        Wishlist
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/order-tracking">
                                        Order Tracking
                                    </Link>
                                </ListItem>
                            </List>
                        )}

                        <Stack direction='row' alignItems='center' spacing={1}>
                            <ProfileMenu />
                            {matches && (
                                <Stack direction='row' alignItems='center' spacing={2}>
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="primary">
                                            <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
                                        </StyledBadge>
                                    </IconButton>
                                    <Stack>
                                        <Typography variant='body2' fontSize={12} color='text.secondary'>Your Cart</Typography>
                                        <Typography fontWeight={600} fontSize={13}>Rs 0.00</Typography>
                                    </Stack>
                                </Stack>
                            )}
                        </Stack>
                    </Toolbar>

                    <Toolbar className='search-container'>
                        {!isMobile ? <MainSearch isScrolled={isScrolled} /> : <MobileSearch />}

                    </Toolbar>
                </Container>
            </HeaderStyled>

        </motion.div>
    );
}
