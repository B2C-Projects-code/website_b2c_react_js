'use client'
import { Button, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DropdownContainer from './overrides/dropdownStyle';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function CategoryDropdownButton({ ...props }) {
    const [isHovered, setHovered] = useState(false)
    const { categories } = props;
    const handleMouseEnter = () => {
        setHovered(true)
    }
    const handleMouseLeave = () => {
        setHovered(false)
    }
    const variants = {
        open: { opacity: 1, y: 1, },
        closed: { opacity: 0, y: 20, }
    }
    return (
        <DropdownContainer>
            <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} size='large' variant='contained' startIcon={
                <MenuIcon />
            }>Shop by Category</Button>
            <List onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='dropdown' component={motion.ul}
                variants={variants}
                animate={isHovered ? "open" : "closed"}
                initial="closed"
                {...(!isHovered && {
                    sx: {
                        visibility: "hidden"
                    }
                })}

            >
                {
                    categories.map((category: any) => {
                        return (
                            <ListItem
                                secondaryAction={
                                    <ChevronRightIcon fontSize='small' sx={{ color: theme => theme.palette.divider }} />
                                }
                                key={category.id}>
                                <ListItemText primary={category.name} />


                                <List className='dropdown sub-cat'>
                                    {
                                        category.sub_cat.map((child: any) => {
                                            return (
                                                <ListItem key={child.id}
                                                    secondaryAction={
                                                        <ChevronRightIcon fontSize='small' sx={{ color: theme => theme.palette.divider }} />
                                                    }
                                                >
                                                    <ListItemText primary={child.name} />
                                                    <List className='dropdown sub-cat'>
                                                        {
                                                            child.sub_sub_cat.map((sub_child: any) => {
                                                                return (
                                                                    <ListItem key={sub_child.id}
                                                                    >
                                                                        <ListItemText primary={sub_child.name} />

                                                                    </ListItem>
                                                                )
                                                            })
                                                        }
                                                    </List>

                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </ListItem>
                        )
                    })
                }

            </List>
        </DropdownContainer>
    )
}

export default CategoryDropdownButton
