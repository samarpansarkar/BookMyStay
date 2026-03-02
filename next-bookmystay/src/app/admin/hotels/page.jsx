export default function AdminPropertiesPage() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>
        Property Approvals & Moderation
      </h1>

      <div className='flex flex-col md:flex-row gap-4 mb-6'>
        <div className='flex-1'>
          <input
            type='text'
            placeholder='Search property name or owner...'
            className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
          />
        </div>
        <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
          <option value=''>Status: Needs Approval</option>
          <option value='active'>Status: Active</option>
          <option value='suspended'>Status: Rejected/Suspended</option>
          <option value='all'>All Properties</option>
        </select>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wide'>
                <th className='p-4 font-bold'>Property Details</th>
                <th className='p-4 font-bold'>Owner</th>
                <th className='p-4 font-bold'>Submission Date</th>
                <th className='p-4 font-bold'>Status</th>
                <th className='p-4 font-bold'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {/* Logic: Map through all system properties */}
              {[1, 2, 3].map((item) => (
                <tr key={item} className='hover:bg-gray-50 transition'>
                  <td className='p-4 flex items-center gap-4'>
                    <div className='w-16 h-12 bg-gray-200 rounded overflow-hidden relative'>
                      <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-300'></div>
                    </div>
                    <div>
                      <p className='font-bold text-gray-900 leading-tight'>
                        New Hotel Submission {item}
                      </p>
                      <p className='text-xs text-gray-500'>London, UK</p>
                    </div>
                  </td>
                  <td className='p-4'>
                    <p className='font-medium text-blue-600 hover:underline cursor-pointer text-sm'>
                      OwnerID-2{item}
                    </p>
                  </td>
                  <td className='p-4 text-sm text-gray-600'>Today, 10:30 AM</td>
                  <td className='p-4'>
                    <span className='bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold px-2 py-1 rounded'>
                      Pending Approval
                    </span>
                  </td>
                  <td className='p-4'>
                    <div className='flex gap-2'>
                      <button className='px-3 py-1.5 bg-green-600 text-white font-medium text-xs rounded hover:bg-green-700 transition'>
                        Approve
                      </button>
                      <button className='px-3 py-1.5 bg-white border border-red-300 text-red-600 font-medium text-xs rounded hover:bg-red-50 transition'>
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50'>
          <span className='text-sm text-gray-500'>Showing 3 pending items</span>
        </div>
      </div>
    </div>
  );
}
