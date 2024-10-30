'use client'
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Stack, Tooltip, Typography } from '@mui/material'
import ProductCardStyled from './overrides/productCardStyle'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Image from 'next/image'
function ProductCard({ ...props }) {
    const { product } = props;
    return (
        <ProductCardStyled>
            <CardMedia
            >
                <Image
                    src={`https://khaasdeal.com/bucket/images/soghats/uploads/products/${product?.image}`}
                    alt={product?.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='mix-blend-multiply'
                    loading="lazy"
                />

                <ButtonGroup className='btn-actions' variant="contained" aria-label="Basic button group">
                    <Tooltip arrow placement="top" title="Quick View">
                        <Button>
                            <RemoveRedEyeOutlinedIcon fontSize='small' />
                        </Button>
                    </Tooltip>
                    <Tooltip arrow placement="top" title="Add To Wishlist">
                        <Button>
                            <FavoriteBorderOutlinedIcon fontSize='small' />
                        </Button>
                    </Tooltip>
                </ButtonGroup>

            </CardMedia>
            <CardContent>
                <Stack spacing={.5}>
                    <Typography gutterBottom variant="subtitle1">
                        {product?.name?.length > 18 ? product?.name?.slice(0, 18) + "..." : product?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {product?.user?.name?.length > 15 ? product?.user?.name.slice(0, 20) + "..." : product?.user?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {product?.user?.city}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Typography color='primary' variant='subtitle1'>
                    Rs {product?.variant[0]?.actual_price}
                </Typography>
                <Button variant='contained' size='small'>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 24 }} />
                </Button>
            </CardActions>
        </ProductCardStyled>

    )
}

export default ProductCard