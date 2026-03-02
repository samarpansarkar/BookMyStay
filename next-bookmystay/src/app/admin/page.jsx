export default function AdminDashboard() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Platform Analytics</h1>
        <div className='flex gap-2'>
          <select className='border border-gray-300 rounded p-2 text-sm bg-white'>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Top KPI Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
              Total Users
            </p>
            <h2 className='text-3xl font-bold text-gray-900'>24,592</h2>
          </div>
          <p className='text-sm text-green-600 font-medium mt-4'>
            ↑ 12% vs last month
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
              Active Properties
            </p>
            <h2 className='text-3xl font-bold text-gray-900'>1,204</h2>
          </div>
          <p className='text-sm text-green-600 font-medium mt-4'>
            ↑ 4% vs last month
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
              Total Bookings
            </p>
            <h2 className='text-3xl font-bold text-gray-900'>8,432</h2>
          </div>
          <p className='text-sm text-green-600 font-medium mt-4'>
            ↑ 22% vs last month
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
              Platform Revenue
            </p>
            <h2 className='text-3xl font-bold text-gray-900'>$1.2M</h2>
          </div>
          <p className='text-sm text-green-600 font-medium mt-4'>
            ↑ 18% vs last month
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        {/* Charts Placholders */}
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <h3 className='text-lg font-bold mb-4'>Revenue Growth</h3>
          <div className='h-64 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-sm text-gray-400 border-dashed'>
            Chart.js / Recharts integration here
          </div>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <h3 className='text-lg font-bold mb-4'>User Acquisition</h3>
          <div className='h-64 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-sm text-gray-400 border-dashed'>
            Chart.js / Recharts integration here
          </div>
        </div>
      </div>

      {/* System Health / Pending Actions */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-lg font-bold'>Pending Approvals</h3>
            <span className='bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full'>
              12 action items
            </span>
          </div>
          <div className='space-y-3'>
            <div className='flex justify-between items-center bg-gray-50 p-3 border border-gray-100 rounded'>
              <div>
                <p className='font-bold text-sm'>
                  New Property: Seaside Resort
                </p>
                <p className='text-xs text-gray-500'>
                  Submitted 2 hours ago by Owner #124
                </p>
              </div>
              <button className='text-blue-600 font-medium text-sm hover:underline'>
                Review
              </button>
            </div>
            <div className='flex justify-between items-center bg-gray-50 p-3 border border-gray-100 rounded'>
              <div>
                <p className='font-bold text-sm'>
                  New Property: Mountain Cabin
                </p>
                <p className='text-xs text-gray-500'>
                  Submitted 5 hours ago by Owner #092
                </p>
              </div>
              <button className='text-blue-600 font-medium text-sm hover:underline'>
                Review
              </button>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <h3 className='text-lg font-bold mb-4'>System Alerts</h3>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 bg-yellow-50 p-3 border border-yellow-100 rounded'>
              <svg
                className='w-5 h-5 text-yellow-600 shrink-0 mt-0.5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'></path>
              </svg>
              <div>
                <p className='font-bold text-sm text-yellow-800'>
                  High API Latency
                </p>
                <p className='text-xs text-yellow-700 mt-1'>
                  Search endpoint P95 latency exceeded 300ms SLA in the last
                  hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
