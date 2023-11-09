import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../../@/components/ui/select';
import { useRef } from 'react';

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
    const doubleArrowRightIconRef = useRef<SVGSVGElement | null>(null);
    const handleDownload = () => {
        const selectedRows: Record<string, any>[] = table.getFilteredSelectedRowModel().rows;
        if (selectedRows.length === 0) {
            return;
        }
        const replacer = (_key: any, value: string) => (value === null ? '' : value);
        const header = Object.keys(selectedRows[0]);
        const csv = selectedRows.map((row) =>
            header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(',')
        );
        csv.unshift(header.join(','));
        const csvString = csv.join('\r\n'); // Create a single string

        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'selected_data.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <div className="flex items-center justify-between px-2">
            <div className="flex-1 mx-2 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{' '}
                {table.getFilteredRowModel().rows.length} row(s) selected
            </div>
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="h-8 w-[60px] bg-white">
                            <SelectValue placeholder={table.getState().pagination.pageSize.toString()} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={pageSize.toString()}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </div>
                <div className="flex items-center space-x-6">
                    <DoubleArrowLeftIcon
                        onClick={() => table.setPageIndex(0)}
                        className="h-4 w-4"
                    />
                    <div>
                    <ChevronLeftIcon
                        onClick={() => table.previousPage()}
                        className="h-4 w-4"
                    />
                    </div>
                    <ChevronRightIcon
                        onClick={() => table.nextPage()}
                        className="h-4 w-4"
                    />
                    <DoubleArrowRightIcon
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        className="h-4 w-4"
                        ref={doubleArrowRightIconRef}
                    />
                    {/* download button */}
                    <div
                        style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
                        onClick={handleDownload}
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#fff0fb] border-0 border-[#ffb8ec]"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                                stroke="#4D0039"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d0039]">
                            Download
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
