import React from 'react';
import { useTable } from 'react-table'
import Moment from 'react-moment';

const Table = ({data}) => {

    const formatData = (date) => {
            date = date.split('T');
            return new Date(Date.parse(date)).toString();
    }

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
                Cell : (props) => {
                    const custom_date = formatData(props.value)
                    return <span>{custom_date}</span>
                }
              },

            //   <Moment format="MM/DD/YYYY">
            //   {data.activeUntil}
            // </Moment>


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
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        // Get the state from the instance
        state: { pageIndex, pageSize },
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
  