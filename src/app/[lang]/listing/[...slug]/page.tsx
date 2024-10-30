import React from 'react'
import { fetchProductList } from '@src/actions'
import { notFound } from 'next/navigation';
import { Grid2, Stack } from '@mui/material';
import { ProductCard } from '@components/cards';
import { Pagination } from '@components/pagination';
async function ListingPage({ ...props }) {
    const { params: { slug } } = props;
    const data = await fetchProductList({ slug: slug[0], type: slug[1] });
    const products = data?.products || [];
    if (!data) {
        notFound();
    }

    return (
        <Stack>
            <Grid2 container spacing={2}>
                {products?.map((item: any) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                        <ProductCard product={item} />
                    </Grid2>
                ))}
            </Grid2>
            <Stack width={1} my={2} alignItems='center'>
                <Pagination />
            </Stack>
        </Stack>
    )
}

export default ListingPage