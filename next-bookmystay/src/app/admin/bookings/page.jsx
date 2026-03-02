export default function AdminBookingsPage() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>
        Global Bookings Overview
      </h1>

      {/* Filters */}
      <div className='flex flex-wrap gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search booking ID, user, or property...'
          className='flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none min-w-[250px]'
        />
        <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
          <option>All Statuses</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Cancelled</option>
          <option>Refunded</option>
        </select>
        <input
          type='date'
          className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'
          title='Filter by Booking Date'
        />
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        {/* Logic: Fetch all bookings globally */}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wide'>
                <th className='p-4 font-bold'>Booking ID</th>
                <th className='p-4 font-bold'>User</th>
                <th className='p-4 font-bold'>Property</th>
                <th className='p-4 font-bold'>Amount</th>
                <th className='p-4 font-bold'>Status</th>
                <th className='p-4 font-bold text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {/* Table Row */}
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className='hover:bg-gray-50 transition'>
                  <td className='p-4'>
                    <p className='font-bold text-gray-900'>#BMS-1234{item}</p>
                    <p className='text-xs text-gray-500 mt-0.5'>Oct {item}</p>
                  </td>
                  <td className='p-4'>
                    <p className='font-medium text-blue-600 hover:underline cursor-pointer text-sm'>
                      User-{item}
                    </p>
                  </td>
                  <td className='p-4'>
                    <p className='text-sm font-bold text-blue-600 hover:underline cursor-pointer'>
                      Prop-00{item}
                    </p>
                  </td>
                  <td className='p-4 font-bold text-gray-900'>
                    ${1200 + item * 150}
                  </td>
                  <td className='p-4'>
                    {item === 3 ? (
                      <span className='bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded'>
                        Cancelled
                      </span>
                    ) : item === 5 ? (
                      <span className='bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded'>
                        Refunded
                      </span>
                    ) : (
                      <span className='bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded'>
                        Confirmed
                      </span>
                    )}
                  </td>
                  <td className='p-4 text-right'>
                    <div className='flex justify-end gap-2 text-sm'>
                      <button className='text-blue-600 font-medium hover:text-blue-800'>
                        Details
                      </button>
                      {item === 3 && (
                        <>
                          <span className='text-gray-300'>|</span>
                          <button className='text-orange-600 font-medium hover:text-orange-800'>
                            Issue Refund
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='p-4 border-t border-gray-100 flex justify-end'>
          {/* Pagination Placeholder */}
          <div className='flex gap-2 text-sm'>
            <button
              className='px-3 py-1 border border-gray-300 rounded text-gray-500'
              disabled>
              Previous
            </button>
            <button className='px-3 py-1 bg-blue-50 border border-blue-200 rounded text-blue-700 font-bold'>
              1
            </button>
            <button className='px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50'>
              2
            </button>
            <button className='px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
