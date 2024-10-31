'use client'
import React, { useRef } from 'react'
import { AsideStyled } from './asideStyle'
import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@lib/redux/store';
import { setOpenFilterListing, openFilterListing } from '@lib/redux/base'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation'

function Aside() {
    const dispatch = useAppDispatch();
    const stackRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { data } = useAppSelector(state => state.websiteContent)
    const open = useAppSelector(openFilterListing)
    const categories = data?.categories || [];
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const brands = data?.brands || [];
    const groupedBrands = brands.reduce((acc: any, brand: any) => {
        const firstLetter = brand.name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(brand);
        return acc;
    }, {});

    // Convert the object to a sorted array
    const sortedGroupedBrands = Object.keys(groupedBrands)
        .sort()
        .map(letter => ({
            letter,
            brands: groupedBrands[letter]
        }));
    const scrollToSection = (letter: string) => {
        const section = document.getElementById(letter);
        if (section && stackRef.current) {
            // Calculate the position relative to the Stack's top
            const topOffset = section.offsetTop - stackRef.current.offsetTop;
            stackRef.current.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <AsideStyled variant='permanent' PaperProps={{
            sx: { position: 'static', border: 0 }
        }}>
            <Stack border={1} borderColor="divider" borderRadius={3} p={3}>
                <Typography variant='h6' fontWeight={600}>Shop Categories</Typography>
                <Divider className='underline' />
                <List sx={{ mt: 1 }}>
                    {
                        categories.map((item: any, idx: number) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <ListItem disablePadding onClick={() => dispatch(setOpenFilterListing(open === idx ? null : idx))}>
                                        <ListItemIcon sx={{
                                            svg: {
                                                transform: open === idx ? 'rotate(90deg)' : 'none', transition: 'all 0.3s ease-in-out',
                                                transformOrigin: 'center center',
                                            }
                                        }}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: 16 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                    <Collapse in={
                                        open === idx}>
                                        <List disablePadding className='sub-cat'>
                                            {

                                                item?.sub_cat.map((sub: any) => (
                                                    <>
                                                        <ListItem onClick={(e) => { router.push(`/listing/${sub.slug}/${sub.type}`); }} sx={{ py: 0, flexDirection: 'column', alignItems: 'flex-start' }} key={sub.id}>
                                                            <ListItemText primary={sub.name} />
                                                        </ListItem>
                                                        <List disablePadding className='sub-sub-cat'>
                                                            {
                                                                sub?.sub_sub_cat.map((sub_sub: any) => (
                                                                    <ListItem onClick={(e) => { router.push(`/listing/${sub_sub.slug}/${sub_sub.type}`); }} disablePadding sx={{ py: 0 }} key={sub_sub.id}>
                                                                        <ListItemText primary={sub_sub.name} />
                                                                    </ListItem>
                                                                ))
                                                            }
                                                        </List>
                                                    </>
                                                ))


                                            }
                                        </List>
                                    </Collapse>
                                </React.Fragment>

                            )
                        })
                    }
                </List>
            </Stack>
            <Stack border={1} borderColor="divider" borderRadius={3} p={3} mt={2}>
                <Typography variant='h6' fontWeight={600}>Brands</Typography>
                <Divider className='underline' />
                <Stack direction='row' spacing={2.5} mt={2}>
                    <Stack ref={stackRef} maxHeight={320} overflow='auto' width={1}>
                        {sortedGroupedBrands.map((brand, idx) => (
                            <React.Fragment key={brand.letter}>
                                <Typography key={idx} id={brand.letter} variant='body1' fontWeight={600}>{brand.letter}</Typography>
                                <List disablePadding>
                                    {
                                        brand.brands.map((item: any) => (
                                            <ListItem onClick={() => router.push(`/listing/brands/${(item.name).replace(" ", "-")}`)} disablePadding key={item.id}>
                                                <ListItemText primary={item.name} />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </React.Fragment>

                        ))}
                    </Stack>
                    <Stack>
                        <List disablePadding className='brand-list-alphabet'>
                            {
                                alphabet.map((letter, idx) => (
                                    <ListItem disablePadding key={idx} onClick={() => scrollToSection(letter)}>
                                        <ListItemText primary={letter} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Stack>
                </Stack>
            </Stack>
        </AsideStyled>
    )
}

export default Aside