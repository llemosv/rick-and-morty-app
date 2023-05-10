import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import ReactPaginate from "react-paginate";

interface PaginateProps {
    totalPages: number;
    handlePageChange: (selectedItem: { selected: number }) => void;
}

export function Pagineted({ totalPages, handlePageChange }: PaginateProps) {
    const customStyles = {
        container: 'flex justify-center gap-3 items-center',
        pageLink: 'px-4 py-2 bg-rickLight-200 dark:bg-rickDark-400 rounded-3xl',
        activeLink: 'bg-rickLight-300 dark:bg-rickDark-50',
        disabledLink: 'opacity-50 cursor-not-allowed',
    };

    return (
        <div className="mb-16">
            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                previousLabel={
                    <CaretLeft
                        width={20}
                        height={20}
                        weight="bold"
                    />
                }
                nextLabel={
                    <CaretRight
                        width={20}
                        height={20}
                        weight="bold"
                    />
                }
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                activeClassName={customStyles.activeLink}
                disabledClassName={customStyles.disabledLink}
                containerClassName={customStyles.container}
                pageClassName={customStyles.pageLink}
                previousClassName={customStyles.pageLink}
                nextClassName={customStyles.pageLink}
            />
        </div>
    )
}