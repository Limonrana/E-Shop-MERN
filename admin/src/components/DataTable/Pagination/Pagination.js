import { useEffect, useMemo, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const AppPagination = ({ total = 0, itemsPerPage = 10, currentPage = 1, onPageChange }) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0) {
            setTotalPages(Math.ceil(total / itemsPerPage));
        }
    }, [itemsPerPage, total]);

    const PaginationItems = useMemo(() => {
        const pages = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
                    <PaginationLink>{i}</PaginationLink>
                </PaginationItem>
            );
        }
        return pages;
    }, [currentPage, onPageChange, totalPages]);

    if (totalPages === 0) return null;

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={currentPage === 1}>
                <PaginationLink previous onClick={() => onPageChange(currentPage - 1)}>
                    Prev
                </PaginationLink>
            </PaginationItem>
            {PaginationItems}
            <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink next onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </PaginationLink>
            </PaginationItem>
        </Pagination>
    );
};

export default AppPagination;
