'use client'
import React from 'react'
import { AsideStyled } from './asideStyle'
import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { useAppSelector } from '@lib/redux/store'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Aside() {
    const [open, setOpen] = React.useState<null | number>(null);
    const { data } = useAppSelector(state => state.websiteContent)
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
                                    <ListItem disablePadding onClick={() => setOpen(open === idx ? null : idx)}>
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
                                                        <ListItem onClick={(e) => console.log('parent')} sx={{ py: 0, flexDirection: 'column', alignItems: 'flex-start' }} key={sub.id}>
                                                            <ListItemText primary={sub.name} />

                                                        </ListItem>
                                                        <List disablePadding className='sub-sub-cat'>
                                                            {
                                                                sub?.sub_sub_cat.map((subsub: any) => (
                                                                    <ListItem onClick={(e) => { e.stopPropagation(); console.log('child') }} disablePadding sx={{ py: 0 }} key={subsub.id}>
                                                                        <ListItemText primary={subsub.name} />
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
            <Stack border={1} borderColor="divider" borderRadius={3} p={3}>
                <Typography variant='h6' fontWeight={600}>Brands</Typography>
                <Divider className='underline' />
                <Stack direction='row' spacing={1} mt={2}>
                    <Stack maxHeight={300} overflow='auto' width={1}>
                        {sortedGroupedBrands.map((brand, idx) => (
                            <React.Fragment key={brand.letter}>
                                <Typography key={idx} id={brand.letter} variant='body1' fontWeight={600}>{brand.letter}</Typography>
                                <List disablePadding>
                                    {
                                        brand.brands.map((item: any) => (
                                            <ListItem disablePadding key={item.id}>
                                                <ListItemText primary={item.name} />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </React.Fragment>

                        ))}
                    </Stack>
                    <Stack>
                        <List disablePadding>
                            {
                                alphabet.map((letter, idx) => (
                                    <ListItem disablePadding key={idx}>
                                        <ListItemText primaryTypographyProps={{ fontSize: 8 }} primary={letter} />
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