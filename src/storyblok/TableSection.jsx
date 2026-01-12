import { storyblokEditable } from "@storyblok/react";

const TableSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {blok.table.thead.map((head) => (
                <th
                  key={head._uid}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-600"
                >
                  {head.value}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {blok.table.tbody.map((row) => (
              <tr key={row._uid} className="hover:bg-gray-50">
                {row.body.map((col) => (
                  <td
                    key={col._uid}
                    className="px-6 py-4 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: col.value }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
