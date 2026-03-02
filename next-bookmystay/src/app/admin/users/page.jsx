export default function AdminUsersPage() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>User Management</h1>

      {/* Global User Search & Filters */}
      <div className='flex flex-col md:flex-row gap-4 mb-6'>
        <div className='flex-1'>
          <input
            type='text'
            placeholder='Search by name, email, or user ID...'
            className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
          />
        </div>
        <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
          <option value=''>All Roles</option>
          <option value='customer'>Customer</option>
          <option value='owner'>Property Owner</option>
          <option value='admin'>Admin</option>
        </select>
        <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
          <option value=''>All Statuses</option>
          <option value='active'>Active</option>
          <option value='suspended'>Suspended</option>
        </select>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wide'>
                <th className='p-4 font-bold'>User</th>
                <th className='p-4 font-bold'>Role</th>
                <th className='p-4 font-bold'>Joined</th>
                <th className='p-4 font-bold'>Status</th>
                <th className='p-4 font-bold text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {/* Logic: Map through all users */}
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className='hover:bg-gray-50 transition'>
                  <td className='p-4 flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold shrink-0'>
                      U{item}
                    </div>
                    <div>
                      <p className='font-bold text-gray-900'>User {item}</p>
                      <p className='text-xs text-gray-500'>
                        user{item}@example.com
                      </p>
                    </div>
                  </td>
                  <td className='p-4'>
                    <span className='bg-gray-100 text-gray-600 border border-gray-200 text-xs font-bold px-2 py-1 rounded'>
                      {item === 1 ? "Admin" : item === 2 ? "Owner" : "Customer"}
                    </span>
                  </td>
                  <td className='p-4 text-sm text-gray-600'>Oct 10, 2024</td>
                  <td className='p-4'>
                    {item !== 4 ? (
                      <span className='bg-green-100 text-green-800 border border-green-200 text-xs font-bold px-2 py-1 rounded-full flex w-fit items-center gap-1'>
                        <span className='w-1.5 h-1.5 rounded-full bg-green-500 inline-block'></span>{" "}
                        Active
                      </span>
                    ) : (
                      <span className='bg-red-100 text-red-800 border border-red-200 text-xs font-bold px-2 py-1 rounded-full flex w-fit items-center gap-1'>
                        <span className='w-1.5 h-1.5 rounded-full bg-red-500 inline-block'></span>{" "}
                        Suspended
                      </span>
                    )}
                  </td>
                  <td className='p-4 text-right'>
                    <div className='flex justify-end gap-3'>
                      <button className='text-blue-600 hover:text-blue-800 font-medium text-sm'>
                        View
                      </button>
                      <span className='text-gray-300'>|</span>
                      {item !== 4 ? (
                        <button className='text-red-600 hover:text-red-800 font-medium text-sm'>
                          Suspend
                        </button>
                      ) : (
                        <button className='text-green-600 hover:text-green-800 font-medium text-sm'>
                          Re-activate
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='p-4 border-t border-gray-100 flex justify-end'>
          {/* Pagination */}
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
