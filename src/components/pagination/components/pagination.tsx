'use client'
import * as React from "react";
import { Pagination as BasicPagination } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function Pagination({ ...props }) {
    const { total, count = 10, pageTotal = 40, ...rest } = props;
    const router = useRouter();
    const currentPage = parseInt(new URL(location.href).searchParams.get("page") || "1");

    const [page, setPage] = React.useState<number>(currentPage);
    React.useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    return (
        <Box
            display="flex"
            my={1}
            justifyContent="space-between"
            alignItems="center"
            {...rest}>
            <BasicPagination
                variant="outlined" shape="rounded"
                onChange={(e, v: any) => {
                    const previousPage: any = page;
                    setPage(v);
                    router.push(`?page=${v}`);

                }}
                count={count}
                page={page}
                color="primary"
            />
        </Box>
    );
}
