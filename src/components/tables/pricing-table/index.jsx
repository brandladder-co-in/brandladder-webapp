import React, { useState } from 'react';

const PricingTable = ({ data }) => {
    const [expandedRows, setExpandedRows] = useState([]);

    const toggleDescription = (index) => {
        if (expandedRows.includes(index)) {
            setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
        } else {
            setExpandedRows([...expandedRows, index]);
        }
    };

    const isRowExpanded = (index) => expandedRows.includes(index);

    return (
        <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-orange-5">
                <thead className="bg-orange-5 h-14 rounded-sm">
                    <tr>
                        <th className="px-4 py-2 text-left md:w-1/3 text-white">Service</th>
                        <th className="px-4 py-2 text-left md:w-1/3 text-white">Description</th>
                        <th className="px-4 py-2 text-left md:w-1/3 text-white">Price Range</th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border font-semibold border-gray-200">{item.service}</td>
                            <td className="px-4 py-2 border border-gray-200">
                                {isRowExpanded(index) ? item.description : `${item.description.split(' ').slice(0, 4).join(' ')}... `}
                                <button onClick={() => toggleDescription(index)} className='text-orange-5 text-xs'>
                                    {isRowExpanded(index) ? 'Read Less' : 'Read More'}
                                </button>
                            </td>
                            <td className="px-4 py-2 border border-gray-200">{item.priceRange}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PricingTable;
