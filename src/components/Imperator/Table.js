import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { DiGoogleAnalytics } from 'react-icons/di';

const Table = ({ data, pageCount: controlledPageCount }) => {
  const history = useHistory();

  const getConfig = (imperator) => {
    if (imperator.jira && imperator.zapier) {
      return 'jira, zapier';
    } else if (imperator.jira && !imperator.zapier) {
      return 'jira';
    } else if (imperator.zapier && !imperator.jira) {
      return 'zapier';
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Info',
        className: 'title',
        columns: [
          {
            Header: 'Company Name',
            accessor: 'company',
            Cell: ({ cell }) => (
              <span className='company'>
                {cell.row.values.company}
                <button className='coBtn' onClick={()=>goToAnalytical(cell.row.values._id)}>
                  <DiGoogleAnalytics />
                  &nbsp; Details
                </button>
              </span>
            ),
          },
          {
            Header: '_id',
            accessor: '_id',
            className: 'companyId',
            Cell: ({ cell }) => (
              <span className='companyId' aria-hidden='true'>
                {cell.row.values._id}
              </span>
            ),
            style: { display: 'none' },
          },
          {
            Header: 'Billing Plan',
            accessor: 'billing.plan',
          },
          {
            Header: 'Billing Status',
            accessor: 'billing.status',
          },
          {
            Header: 'Active Until',
            accessor: 'activeUntil',
            Cell: (props) => {
              const custom_date = formatData(props.value);
              return (
                <span>
                  <Moment format='MM/DD/YY'>{custom_date}</Moment>
                </span>
              );
            },
          },
          {
            Header: 'Configurations',
            accessor: getConfig,
          },
          {
            Header: 'Projects',
            accessor: 'projects total',
          },
          {
            Header: 'Notes',
            accessor: 'notes total',
          },
          {
            Header: 'Recs',
            accessor: 'recommandations total',
          },
          {
            Header: 'Insights',
            accessor: 'insights total',
          },
          {
            Header: 'Hashtags',
            accessor: 'hashtags total',
          },
          {
            Header: 'Collections',
            accessor: 'collections total',
          },
          {
            Header: 'Documents',
            accessor: 'documents total',
          },
          {
            Header: 'Users',
            accessor: 'total users',
          },
        ],
      },
    ],
    []
  );

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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      initialState: { pageIndex: 0 },
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const formatData = (date) => {
    date = date.split('T');
    return new Date(Date.parse(date))
      .toString()
      .replace(/ \w+-\d+ \(.*\)$/, '');
  };

  const goToAnalytical = (id) => {
    history.push(`/analytical/single/${id}`);
  };

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className='table'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps([
                    { className: column.className, style: column.style },
                    column.getSortByToggleProps(),
                  ])}
                >
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span className='sortArrow'>
                    {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                          style: cell.column.style,
                        },
                      ])}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}{' '}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:{' '}
          <input
            className='pagInput'
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>
        <select
          className='pagSelect'
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
