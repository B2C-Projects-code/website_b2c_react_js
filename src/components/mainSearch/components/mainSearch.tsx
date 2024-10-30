import React, { useState } from 'react'
import SearchStyled from './overrides/searchStyle'
import { FormControl, InputBase, InputLabel, Divider, Fab, alpha, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
function MainSearch({ ...props }) {
    const { isScrolled } = props
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const handleFocus = (inputName: string) => setFocusedInput(inputName);
    const handleBlur = () => setFocusedInput(null);
    return (
        <SearchStyled
            {...(focusedInput && {
                sx: {
                    gap: 0,
                    backgroundColor: 'transparent',

                }
            })}
            className={isScrolled ? 'collapsed' : ''}>
            <FormControl
                {...(focusedInput === 'brand-input' && {
                    fullWidth: true
                })}
            >
                <InputLabel shrink htmlFor="brand-input">
                    Search By
                </InputLabel>
                <InputBase

                    sx={{
                        width: focusedInput === 'brand-input' ? '100%' : focusedInput === null ? 'auto' : '0',
                        display: focusedInput === 'brand-input' || focusedInput === null ? 'block' : 'none',
                    }}
                    onFocus={(e) => handleFocus(e.target.id)} onBlur={handleBlur} id='brand-input' placeholder='Brands' />
            </FormControl>
            {focusedInput === null && <Divider orientation='vertical' />}
            <FormControl

                {...(focusedInput === 'categories-input' && {
                    fullWidth: true
                })}
            >
                <InputLabel shrink htmlFor="categories-input">
                    Search By
                </InputLabel>
                <InputBase
                    sx={{
                        width: focusedInput === 'categories-input' ? '100%' : focusedInput === null ? 'auto' : '0',
                        display: focusedInput === 'categories-input' || focusedInput === null ? 'block' : 'none',
                    }}
                    onFocus={(e) => handleFocus(e.target.id)} onBlur={handleBlur} id="categories-input" placeholder='Categories' />
            </FormControl>
            {focusedInput === null && <Divider orientation='vertical' />}

            <FormControl
                {...(focusedInput === 'product-input' && {
                    fullWidth: true
                })}
            >
                <InputLabel shrink htmlFor="product-input">
                    Search By
                </InputLabel>
                <InputBase
                    fullWidth
                    sx={{
                        width: focusedInput === 'product-input' ? '100%' : focusedInput === null ? 'auto' : '0',
                        display: focusedInput === 'product-input' || focusedInput === null ? 'block' : 'none',
                    }}

                    onFocus={(e) => handleFocus(e.target.id)} onBlur={handleBlur} id="product-input" placeholder='Product' />
            </FormControl>

            <Fab color='primary' {...(focusedInput !== null && {
                variant: "extended",
                sx: {
                    '&.MuiFab-root': { width: 'auto !important' },
                }

            })}>
                <SearchIcon />
                {focusedInput !== null && 'Search'}
            </Fab>
            {
                <Box
                    component={motion.div}
                    variants={{
                        hidden: {
                            opacity: 0,
                            width: 0,
                        },
                        visible: {
                            opacity: 1,
                            width: "100%",
                        },
                    }}
                    animate={focusedInput ? "visible" : "hidden"}
                    transition={{ duration: .7 }}
                    sx={{
                        height: '100%',
                        maxWidth: "100%",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        background: (theme) => alpha(theme.palette.background.paper, 0.3),
                        boxShadow: (theme) => theme.shadows[2],
                        zIndex: -1,
                        borderRadius: 32,
                    }}
                />
            }
        </SearchStyled >
    )
}

export default MainSearch