import React from 'react';
import { useTable } from 'react-table'

const Table = ({data}) => {

    const columns = React.useMemo(
      () => [
        {
          Header: 'Company Info',
          columns: [
            {
              Header: 'Company Name',
              accessor: 'company',
            },
            {
              Header: 'Billing Plan',
              accessor: 'plan',
            },
            {
                Header: 'Billing Status',
                accessor: 'status',
              },
              {
                Header: 'Active Until',
                accessor: 'activeUntil',
              },
            //   {
            //     Header: 'Configurations',
            //     accessor: 'jira',
            //   },
            //   {
            //     Header: 'Total Projects',
            //     accessor: 'totalProjects',
            //   },
            //   {
            //     Header: 'Total Notes',
            //     accessor: 'totalNotes',
            //   },
            //   {
            //     Header: 'Total Users',
            //     accessor: 'totalUsers',
            //   },
            //   {
            //     Header: 'Creation Date of Last Project',
            //     accessor: 'creationDateLastProject',
            //   },
          ],
        },
      ],
      []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({
        columns,
        data
      });
    
      // Render the UI for your table
      return (
          
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    
    
    export default Table;
  