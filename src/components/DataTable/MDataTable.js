import React from 'react';
import { useTable, useSortBy } from 'react-table';
import "./style.css";

const defaultPropGetter = () => ({});

const MDataTable = ({
    columns,
    data,
    getHeaderProps = defaultPropGetter,
    getColumnProps = defaultPropGetter
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderGroupProps([
                                    {
                                        className: column.className
                                    },
                                    getHeaderProps(column),
                                    getColumnProps(column),
                                    column.getSortByToggleProps()
                                ])}
                            >
                                {column.render("Header")}
                                <span>{column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}</span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps([
                                            {
                                                className: cell.column.className,
                                                style: cell.column.style
                                            },
                                            getColumnProps(cell.column)
                                        ])}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default MDataTable;