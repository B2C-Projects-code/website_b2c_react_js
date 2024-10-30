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
        </AsideStyled>
    )
}

export default Aside