import React, { Suspense } from 'react'
import { fetchProductList, fetchFindBrands } from '@src/actions'
import { notFound } from 'next/navigation';
import { Grid2, Stack } from '@mui/material';
import { ProductCard } from '@components/cards';
import { Pagination } from '@components/pagination';
async function ListingPage({ params }: { params: { slug: string[] } }): Promise<React.JSX.Element> {
    const { slug } = params;
    let data;
    if (slug[0] === 'brands') {
        data = await fetchFindBrands(slug[1].replace("-", " "));
    } else {
        data = await fetchProductList({ slug: slug[0], type: slug[1] });
    }
    const products = data?.products || [];
    if (!data) {
        notFound();
    }

    return (
        <Stack>
            <Grid2 container spacing={2}>
                {products?.map((item: any) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                        <Suspense fallback={<div>loading...</div>}>
                            <ProductCard product={item} />
                        </Suspense>
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