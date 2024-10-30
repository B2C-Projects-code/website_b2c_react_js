import { Box, Divider, Fab, FormControl, InputBase, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function MobileSearch() {
    const [searchBy, setSearchBy] = React.useState('');

    const handleChange = (event: any) => {
        setSearchBy(event.target.value);
    };
    const handleSearch = () => {

    }
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <Paper sx={{
            display: 'flex',
            alignItems: 'center',
            p: .7,
            pl: 2,
            width: 1,
            borderRadius: 10,

        }} className='mobile-search'>
            <FormControl sx={{
                minWidth: 120,
                '.MuiInputBase-root:before,.MuiInputBase-root:after': {
                    display: 'none'
                }

            }} size="small" variant='standard'>
                <InputLabel shrink htmlFor="brand-input">
                    Search By
                </InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={searchBy}
                    onChange={handleChange}
                    displayEmpty


                >
                    <MenuItem value="">
                        <span>Select</span>
                    </MenuItem>
                    <MenuItem selected value={'brands'}>Brands</MenuItem>
                    <MenuItem value={"categories"}>Categories</MenuItem>
                    <MenuItem value={'products'}>Products</MenuItem>
                </Select>
            </FormControl>
            <Divider orientation='vertical' sx={{ minHeight: 30, mx: 1 }} />
            <FormControl fullWidth>
                <InputBase placeholder="Search..." />
            </FormControl>
            <Box>
                <Fab size='small' color='primary'>
                    <SearchIcon />
                </Fab>
            </Box>
        </Paper>
    )
}

export default MobileSearch