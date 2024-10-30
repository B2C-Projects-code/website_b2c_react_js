'use client'
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
function PapularBrands({ ...props }) {
  const { brands } = props
  return (
    brands?.map((item: any, idx: number) => (
      <Card
        sx={{
          borderRadius: 0, border: 1, borderColor: 'divider', '&:hover': {
            img: {
              transform: 'scale(1.05)'

            }
          }
        }}
        key={idx}>
        <CardActionArea sx={{ height: 1 }}>
          <CardMedia
            sx={{ textAlign: 'center', pt: 4 }}
          >
            <Image style={{ transition: 'all .3s' }} width={52} height={52} alt={item.title} src={`https://khaasdeal.com/bucket/images/soghats/uploads/brands/${item.img}`} />
          </CardMedia>
          <CardContent>
            <Typography textAlign='center' fontWeight={600} gutterBottom variant="body1">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card >
    ))
  )
}




export default PapularBrands