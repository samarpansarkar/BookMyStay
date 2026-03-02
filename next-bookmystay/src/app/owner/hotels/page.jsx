import Link from "next/link";

export default function MyHotelsList() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>My Properties</h1>
        <Link
          href='/owner/hotels/new'
          className='bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition'>
          + Add Property
        </Link>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        {/* Logic: Fetch owner's properties */}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wide'>
                <th className='p-4 font-bold'>Property</th>
                <th className='p-4 font-bold'>Location</th>
                <th className='p-4 font-bold'>Status</th>
                <th className='p-4 font-bold'>Rooms/Units</th>
                <th className='p-4 font-bold text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {/* Table Row */}
              {[1, 2, 3].map((item) => (
                <tr key={item} className='hover:bg-gray-50 transition'>
                  <td className='p-4 flex items-center gap-4'>
                    <div className='w-16 h-12 bg-gray-200 rounded overflow-hidden relative'>
                      <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-300'></div>
                    </div>
                    <div>
                      <p className='font-bold text-gray-900'>
                        Luxury Ocean Villa {item}
                      </p>
                      <p className='text-xs text-gray-500'>ID: PR-00{item}</p>
                    </div>
                  </td>
                  <td className='p-4 text-gray-600 text-sm'>
                    Male Atoll, Maldives
                  </td>
                  <td className='p-4'>
                    {item % 2 !== 0 ? (
                      <span className='bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded'>
                        Active
                      </span>
                    ) : (
                      <span className='bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded'>
                        Pending Approval
                      </span>
                    )}
                  </td>
                  <td className='p-4 text-gray-600 text-sm'>5</td>
                  <td className='p-4 text-right'>
                    <div className='flex justify-end gap-2'>
                      <Link
                        href={`/owner/hotels/${item}`}
                        className='text-blue-600 hover:text-blue-800 font-medium text-sm'>
                        Edit
                      </Link>
                      <span className='text-gray-300'>|</span>
                      <button className='text-red-600 hover:text-red-800 font-medium text-sm'>
                        Pause
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Logic: Empty state if no properties */}
        {/* <div className="p-12 text-center text-gray-500">
                  <p className="mb-4">You haven't added any properties yet.</p>
                  <Link href="/owner/hotels/new" className="text-blue-600 font-bold hover:underline">Create your first listing</Link>
             </div> */}
      </div>
    </div>
  );
}
