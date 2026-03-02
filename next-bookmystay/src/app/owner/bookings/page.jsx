export default function OwnerBookingsPage() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>
        Booking Management
      </h1>

      {/* Filters */}
      <div className='flex flex-wrap gap-4 mb-6'>
        <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
          <option>All Properties</option>
          <option>Luxury Ocean Villa 1</option>
          <option>Luxury Ocean Villa 2</option>
        </select>
        <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
          <option>All Statuses</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
        <input
          type='date'
          className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'
          title='Filter by Check-in Date'
        />
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        {/* Logic: Fetch bookings data for owner */}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wide'>
                <th className='p-4 font-bold'>Booking ID</th>
                <th className='p-4 font-bold'>Guest</th>
                <th className='p-4 font-bold'>Property / Room</th>
                <th className='p-4 font-bold'>Dates</th>
                <th className='p-4 font-bold'>Amount</th>
                <th className='p-4 font-bold'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {/* Table Row */}
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className='hover:bg-gray-50 transition'>
                  <td className='p-4'>
                    <p className='font-bold text-gray-900 border-b border-transparent hover:border-blue-600 inline-block cursor-pointer'>
                      #BMS-1234{item}
                    </p>
                    <p className='text-xs text-gray-500 mt-0.5'>Booked Oct 1</p>
                  </td>
                  <td className='p-4'>
                    <p className='font-medium text-gray-900'>John Doe {item}</p>
                    <p className='text-sm text-gray-500'>2 Guests</p>
                  </td>
                  <td className='p-4'>
                    <p className='text-sm font-bold text-gray-900'>
                      Ocean Villa
                    </p>
                    <p className='text-xs text-gray-500'>Deluxe King</p>
                  </td>
                  <td className='p-4 text-sm text-gray-600'>
                    Oct 15 - Oct 20 <br />
                    <span className='text-xs text-gray-400'>5 nights</span>
                  </td>
                  <td className='p-4 font-bold text-gray-900'>
                    ${1495 + item * 50}
                  </td>
                  <td className='p-4'>
                    <span className='bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded'>
                      Confirmed
                    </span>
                    {/* Logic: Implementation of Cancel/Refund actions for owner goes here inline */}
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
