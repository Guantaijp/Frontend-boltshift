import React, { useState } from 'react'
import {
    CaretSortIcon,
    ChevronDownIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { DataTablePagination } from "./data-table-pagination"

import eye from '../../../assets/eye.svg'

import { Button } from "../../../../@/components/ui/button"
import { Badge } from "../../../../@/components/ui/badge"
import { Checkbox } from "../../../../@/components/ui/checkbox"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../@/components/ui/table"
import { useRef } from 'react'
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "../../../../@/lib/utils"
import { Calendar} from '../../../../@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../../@/components/ui/popover"

const data: Payment[] = [
    {
        id: "m5gr84i9",
        orderNo: "ODR-0000000001",
        items: "2",
        amount: 316,
        status: "pending",
        dateCreated: "Tue, 4 Nov 2020",
        deliveryDate: "Dec 4, 2020",
    },
    {
        id: "3u1reuv4",
        orderNo: "ODR-0000000002",
        items: "10",
        amount: 242,
        status: "ongoing",
        dateCreated: "Nov 3, 2020",
        deliveryDate: "Dec 3, 2020",
    },
    {
        id: "derv1ws0",
        orderNo: "ODR-0000000003",
        items: "5",
        amount: 837,
        status: "completed",
        dateCreated: "Nov 2, 2020",
        deliveryDate: "Dec 2, 2020",
    },
    {
        id: "5kma53ae",
        orderNo: "ODR-0000000004",
        items: "29",
        amount: 874,
        status: "cancelled",
        dateCreated: "Nov 1, 2020",
        deliveryDate: "Dec 1, 2020",
    },
    {
        id: "bhqecj4p",
        orderNo: "ODR-0000000005",
        items: "18",
        amount: 721,
        status: "returned",
        dateCreated: "Apr 1, 2020",
        deliveryDate: "May 1, 2020",
    },
    {
        id: "5kma53ae",
        orderNo: "ODR-0000000006",
        items: "29",
        amount: 874,
        status: "completed",
        dateCreated: "Nov 18, 2020",
        deliveryDate: "Dec 18, 2020",
    },
    {
        id: "bhqecj4p",
        orderNo: "ODR-0000000007",
        items: "18",
        amount: 721,
        status: "returned",
        dateCreated: "Apr 1, 2020",
        deliveryDate: "May 1, 2020",
    },
    {
        id: "m5gr84i9",
        orderNo: "ODR-0000000001",
        items: "2",
        amount: 316,
        status: "pending",
        dateCreated: "Nov 4, 2020",
        deliveryDate: "Dec 4, 2020",
    },
    {
        id: "3u1rieuv4",
        orderNo: "ODR-0000000002",
        items: "10",
        amount: 242,
        status: "ongoing",
        dateCreated: "Nov 3, 2020",
        deliveryDate: "Dec 3, 2020",
    },
    {
        id: "deruv1ws0",
        orderNo: "ODR-0000000003",
        items: "5",
        amount: 837,
        status: "completed",
        dateCreated: "Nov 2, 2020",
        deliveryDate: "Dec 2, 2020",
    },
    {
        id: "5kma53rae",
        orderNo: "ODR-0000000004",
        items: "29",
        amount: 874,
        status: "cancelled",
        dateCreated: "Nov 1, 2020",
        deliveryDate: "Dec 1, 2020",
    },
    {
        id: "bhqercj4p",
        orderNo: "ODR-0000000005",
        items: "18",
        amount: 721,
        status: "returned",
        dateCreated: "Apr 1, 2020",
        deliveryDate: "May 1, 2020",
    },
    {
        id: "5kma5e3ae",
        orderNo: "ODR-0000000006",
        items: "29",
        amount: 874,
        status: "completed",
        dateCreated: "Nov 18, 2020",
        deliveryDate: "Dec 18, 2020",
    },
    {
        id: "bhqecjs4p",
        orderNo: "ODR-0000000007",
        items: "18",
        amount: 721,
        status: "returned",
        dateCreated: "Apr 1, 2020",
        deliveryDate: "May 1, 2020",
    }
]

export type Payment = {
    id: string
    orderNo: string
    items: string
    amount: number
    dateCreated: string
    deliveryDate: string
    status: "ongoing" | "pending" | "completed" | "returned" | "cancelled"

}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="border rounded-md border-[#D0D5DD] data-[state=checked]:bg-[#66004B] data-[state=checked]:border-[#66004B]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="border rounded-md  border-[#D0D5DD] data-[state=checked]:bg-[#66004B] data-[state=checked]:border-[#66004B]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "orderNo",
        header:({ column }) => {
            return (
                <div className="text-xs font-medium text-left text-[#0c111d] flex"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Order No
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => (
            <div className="text-xs text-left text-[#0c111d">{row.getValue("orderNo")}</div>
        ),
    },
    {
        accessorKey: "items",
        header:({ column }) => {
            return (
                <div className="text-xs font-medium text-left text-[#0c111d] flex"
                     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Items
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => <div className="text-xs text-left text-[#0c111d]">{row.getValue("items")}</div>,
    },
    {
        accessorKey: "amount",
       header:({ column }) => {
    return (
        <div className="text-xs font-medium text-left text-[#0c111d] flex"
             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Amount
            <CaretSortIcon className="ml-2 h-4 w-4" />
        </div>
    )
},
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "Ksh",
            }).format(amount)

            return <div className="text-xs text-left text-[#0c111d]">{formatted}</div>
        },
    },
    {
        accessorKey: "status",
        header:({ column }) => {
            return (
                <div className="text-xs font-medium text-left text-[#0c111d] flex"
                     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Status
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => (
            <Badge variant="secondary" className={
                row.getValue("status") === "pending" ? "bg-[#FFF4ED] text-[#E04F16]" :
                    row.getValue("status") === "ongoing" ? "bg-[#FFF0FB] text-[#66004B]" :
                        row.getValue("status") === "completed" ? "bg-[#EDFCF2] text-[#099250]" :
                            row.getValue("status") === "returned" ? "bg-[#F9FAFB] text-[#475467]" :
                                row.getValue("status") === "cancelled" ? "bg-[#FEF3F2] text-[#D92D20]" :
                                    "" // Default value if none of the conditions match
            }>
                {row.getValue("status")}
            </Badge>

        ),
    },
    {
        accessorKey: "dateCreated",
        header:({ column }) => {
            return (
                <div className="text-xs font-medium text-left text-[#0c111d] flex"
                     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Date Created
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </div>
            )
        },        cell: ({ row }) => (
            <div className="text-xs text-left text-[#0c111d]">{row.getValue("dateCreated")}</div>
        ),
    },
    {
        accessorKey: "deliveryDate",
        header:({ column }) => {
            return (
                <div className="text-xs font-medium text-left text-[#0c111d] flex"
                     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Delivery Date
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => (
            <div className="text-xs text-left text-[#0c111d">{row.getValue("deliveryDate")}</div>
        ),
    },
    {
        accessorKey: "view",
        header:({ column }) => {
            return (
                <div className="text-xs font-medium text-left text-[#0c111d] flex"
                     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    View
                </div>
            )
        },
        cell: () => (
           <img src={eye} alt="eye" className="h-4 w-4" />
        ),
    },

]

export function DataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    // const [pageIndex] = React.useState(0); // Add pageIndex state
    // const [pageSize] = React.useState(5); // Add pageSize state

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })


    // closing
    const inputRef = useRef<HTMLInputElement>(null)
    const clearIconRef = useRef<HTMLSpanElement>(null)
    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
        }

        if (clearIconRef.current) {
            clearIconRef.current.classList.add('show')
        }
    }

    const currentDate = new Date(); // Get the current date

    const [date, setDate] = useState<DateRange | undefined>({
        from: currentDate,
        to: addDays(currentDate, 0),
    });

    return (
        <div className="w-full">
            <div className="flex items-center mx-4 mb-4 gap-3">
                <div className="w-full">
                    <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                                        stroke="#667085"
                                        stroke-width="1.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        <input
                            value={(table.getColumn("orderNo")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("orderNo")?.setFilterValue(event.target.value)
                            }
                            ref={inputRef}
                            className="w-full put border border-top-[#d0d5dd] rounded-md py-2 pl-10 pr-3 text-black outline-none focus:ring-1 focus:ring-[#E67FCA] focus:shadow-[#F4EBFF] focus:shadow-[ 0px 24px 48px -12px rgba(16, 24, 40, 0.18)"
                            id="inputField"
                            type="text"
                            placeholder="Search orders"
                        />
                        <span
                            onClick={clearInput}
                            ref={clearIconRef}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_6191_10963)">
                                        <path
                                            opacity="0.4"
                                            d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z"
                                            stroke="#667085"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.5 7.5L7.5 12.5M7.5 7.5L12.5 12.5"
                                            stroke="#667085"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6191_10963">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                    </div>
                </div>
                <div className={cn("grid gap-2 w-full bg-white", )}>
                    <Popover >
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal bg-white",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <ChevronDownIcon className="ml-auto h-4 w-4" />
                            </Button>

                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 bg-white" align="start">
                            <Calendar
                                className="flex flex-row w-full"
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={(table.getColumn("dateCreated")?.getFilterValue() as DateRange) ?? date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

            </div>
            <div className=" border">
                <Table>
                    <TableHeader className="bg-[#F2F4F7]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    <DataTablePagination table={table} />
                </div>
            </div>
        </div>
    )
}
