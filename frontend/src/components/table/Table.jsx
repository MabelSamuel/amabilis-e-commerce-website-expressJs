import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table className="min-w-full border-collapse border bg-white border-gray-400">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor}
              className="px-4 py-2 border border-gray-300 bg-gray-200 text-left"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td
                key={col.accessor}
                className="px-4 py-2 border border-gray-300"
              >
                {col.render ? col.render(row[col.accessor], row.status) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
