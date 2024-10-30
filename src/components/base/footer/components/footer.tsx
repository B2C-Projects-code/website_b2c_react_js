'use client'
import React from 'react'
import FooterStyled from './overrides/footerStyle'
import { Box, Container, Fab, FormControl, InputBase, List, ListItem, Paper, Skeleton, Stack, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, supportData } from './config'
import TelegramIcon from '@mui/icons-material/Telegram';
import { useAppSelector } from '@lib/redux/store'
import FacebookIcon from "@themes/overrides/icons/facebookIcon";
import InstaIcon from "@themes/overrides/icons/InstaIcon";
import ThreadsIcon from "@themes/overrides/icons/threadsIcon";
import TwitterIcon from "@themes/overrides/icons/twitterIcon";
import LinkedinIcon from "@themes/overrides/icons/linkedinIcon";
import YoutubeIcon from "@themes/overrides/icons/youtubeIcon";

function Footer() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { websiteContent, data } = useAppSelector(state => state.websiteContent)
    const brands = data?.brands || [];
    const sellers = data?.featured_sellers || []

    const hasSocial = websiteContent?.website_facebook_link !== "" ||
        websiteContent?.website_instagram_link !== "" ||
        websiteContent?.website_linkedin_link !== "" ||
        websiteContent?.website_threads_link !== "" ||
        websiteContent?.website_youtube_link !== "" ||
        websiteContent?.website_twitter_link !== ""
    return (
        <FooterStyled>
            <Container maxWidth="lg">
                <Stack className='footer-content-container'>
                    <Stack spacing={2}>
                        <Link href="/">
                            {websiteContent ? (
                                <Image
                                    height={50}
                                    width={isMobile ? 120 : 180}
                                    alt="company logo"
                                    src={`http://127.0.0.1:8000/${websiteContent.footer_logo}`}
                                    priority
                                />
                            ) : <Skeleton />}

                        </Link>
                        <Typography>
                            {websiteContent?.website_copyright}
                        </Typography>
                        {hasSocial && (
                            <Stack spacing={1}>
                                <Typography variant='h5' fontWeight={600}>
                                    Follow us
                                </Typography>
                                <List disablePadding className='social-list'>


                                    {websiteContent?.website_facebook_link !== "" &&
                                        <ListItem>
                                            <Link target='_blank' href={websiteContent?.website_facebook_link || ""}>
                                                <FacebookIcon />
                                            </Link>
                                        </ListItem>
                                    }
                                    {websiteContent?.website_instagram_link !== "" &&
                                        <ListItem>
                                            <Link target='_blank' href={websiteContent?.website_instagram_link || ""}>
                                                <InstaIcon />
                                            </Link>
                                        </ListItem>
                                    }
                                    {websiteContent?.website_linkedin_link !== "" &&
                                        <ListItem>
                                            <Link target='_blank' href={websiteContent?.website_linkedin_link || ""}>
                                                <LinkedinIcon />
                                            </Link>
                                        </ListItem>
                                    }
                                    {websiteContent?.website_threads_link !== "" &&
                                        <ListItem>
                                            <Link target='_blank' href={websiteContent?.website_threads_link || ""}>
                                                <ThreadsIcon />
                                            </Link>
                                        </ListItem>
                                    }
                                    {websiteContent?.website_youtube_link !== "" &&
                                        <ListItem>
                                            <Link target='_blank' href={websiteContent?.website_youtube_link || ""}>
                                                <YoutubeIcon />
                                            </Link>
                                        </ListItem>
                                    }
                                    {websiteContent?.website_twitter_link !== "" &&
                                        <ListItem>
                                            <Link target='_blank' href={websiteContent?.website_twitter_link || ""}>
                                                <TwitterIcon />
                                            </Link>
                                        </ListItem>
                                    }




                                </List>

                            </Stack>
                        )}

                    </Stack>
                    <Stack spacing={4}>
                        <Typography className='title' variant='h5' fontWeight={600}>
                            Brands
                        </Typography>
                        <List disablePadding >

                            {data ? brands.slice(0, 6).map((item: { name: string, href: string }, idx: number) =>
                            (
                                <ListItem disablePadding sx={{ py: 0.6 }} key={idx}>
                                    <Link className='link' href={item?.href || ""}>
                                        {item.name}
                                    </Link>
                                </ListItem>
                            )
                            ) : Array.from({ length: 6 }).map((_, idx: number) => <Skeleton sx={{ mb: 1 }} key={idx} />)}

                        </List>

                    </Stack>
                    <Stack spacing={4}>
                        <Typography className='title' variant='h5' fontWeight={600}>
                            Sellers
                        </Typography>
                        <List disablePadding >
                            {data ? sellers.slice(0, 6).map((item: { name: string, href: string }, idx: number) =>

                            (
                                <ListItem disablePadding sx={{ py: 0.6 }} key={idx}>
                                    <Link className='link' href={item.href || ''}>
                                        {item.name}
                                    </Link>
                                </ListItem>
                            )
                            ) : Array.from({ length: 6 }).map((_, idx: number) => <Skeleton sx={{ mb: 1 }} key={idx} />)}

                        </List>

                    </Stack>
                    <Stack spacing={4}>
                        <Typography className='title' variant='h5' fontWeight={600}>
                            Support
                        </Typography>
                        <List disablePadding >
                            {supportData.map((item: { label: string, href: string }, idx: number) =>

                            (
                                <ListItem disablePadding sx={{ py: 0.6 }} key={idx}>
                                    <Link className='link' href={item.href}>
                                        {item.label}
                                    </Link>
                                </ListItem>
                            )
                            )}

                        </List>

                    </Stack>
                    <Stack spacing={4}>
                        <Typography className='title' variant='h5' fontWeight={600}>
                            Subscribe
                        </Typography>
                        <Stack spacing={2}>
                            <Typography>
                                Email us at  <Typography color='primary' fontWeight={600} component='strong'>{websiteContent?.website_email}</Typography>
                            </Typography>
                            <Typography>
                                You can also text our support team at:<Typography color='primary' fontWeight={600} component='strong'>{websiteContent?.website_phone}</Typography>
                            </Typography>
                        </Stack>
                        <Paper className='news-letter-wrap'>
                            <FormControl fullWidth>
                                <InputBase placeholder='Email Address' />
                            </FormControl>
                            <Fab size='small' color='primary'>
                                <TelegramIcon />
                            </Fab>
                        </Paper>
                    </Stack>
                </Stack>
            </Container>
            <Box className="footer-animation">
                <Box className="footer_bg_one"></Box>
                <Box className="footer_bg_two"></Box>
            </Box>
            <Stack className='footer-bottom'>
                <Container maxWidth="lg">
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography flex={1}>
                            {websiteContent?.website_copyright}
                        </Typography>
                        <Box maxWidth={360} height={30} component='img' src="/static/images/payment-icons.jpg" />
                    </Stack>
                </Container>
            </Stack>
        </FooterStyled>
    )
}

export default Footer