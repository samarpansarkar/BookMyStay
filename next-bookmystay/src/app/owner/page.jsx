import Link from "next/link";

export default function OwnerDashboard() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard Overview</h1>
        <Link
          href='/owner/hotels/new'
          className='bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition'>
          + Add Property
        </Link>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
            Total Revenue
          </p>
          <h2 className='text-3xl font-bold text-gray-900'>$24,500</h2>
          <p className='text-sm text-green-600 font-medium mt-2'>
            ↑ 12% this month
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
            Bookings
          </p>
          <h2 className='text-3xl font-bold text-gray-900'>142</h2>
          <p className='text-sm text-green-600 font-medium mt-2'>
            ↑ 5% this month
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
            Active Listings
          </p>
          <h2 className='text-3xl font-bold text-gray-900'>3</h2>
          <p className='text-sm text-gray-500 font-medium mt-2'>
            0 pending approval
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500 font-bold uppercase tracking-wide mb-1'>
            Avg Rating
          </p>
          <h2 className='text-3xl font-bold text-gray-900'>
            4.8<span className='text-xl text-gray-400'>/5</span>
          </h2>
          <p className='text-sm text-green-600 font-medium mt-2'>
            Based on 320 reviews
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Chart Placeholder */}
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2'>
          <h3 className='text-xl font-bold mb-6'>Revenue Over Time</h3>
          <div className='h-64 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium border-dashed text-sm'>
            {/* Logic: Integrate Recharts or Chart.js here */}
            Revenue Chart Integration (Next.js / Chart.js)
          </div>
        </div>

        {/* Recent Bookings */}
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='text-xl font-bold'>Recent Bookings</h3>
            <Link
              href='/owner/bookings'
              className='text-sm text-blue-600 hover:underline'>
              View All
            </Link>
          </div>

          {/* Logic: Fetch recent bookings for owner's properties */}
          <div className='space-y-4'>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className='flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0'>
                <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold shrink-0'>
                  JD
                </div>
                <div>
                  <p className='font-bold text-sm'>John Doe</p>
                  <p className='text-xs text-gray-500 mt-0.5'>
                    Ocean Villa • Oct 15-20
                  </p>
                  <p className='text-sm font-bold text-green-600 mt-1'>
                    ${299 * 5}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
