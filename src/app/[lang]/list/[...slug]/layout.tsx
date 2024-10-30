import { Container, Stack } from '@mui/material';
import React from 'react'
import { Breadcrumbs } from '@components/breadcrumbs'
import Grid from '@mui/material/Grid2';
// add meta data
export async function generateMetadata({ params }: any) {
    const { slug } = params
    return {
        title: `Products - ${slug}`
    }
}
function ListingLayout({
    children,
}: {
    children: React.ReactNode;
    params: {
        slug: string;
    };
}) {
    return (
        <Container maxWidth="lg">
            <Breadcrumbs data={[
                { title: 'Shop', href: null }
            ]} />
            <Stack mt={3}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        sidebar
                    </Grid>
                    <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                        {children}
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    )
}

export default ListingLayout