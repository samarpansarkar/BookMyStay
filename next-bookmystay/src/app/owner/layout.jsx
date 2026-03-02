import Link from "next/link";

export default function OwnerLayout({ children }) {
  return (
    <div className='flex min-h-[calc(100vh-theme(spacing.16))] bg-gray-50'>
      {/* Sidebar Navigation for Owner */}
      <aside className='w-64 bg-white border-r border-gray-200 hidden md:block shrink-0'>
        <div className='p-6 border-b border-gray-100'>
          <h2 className='text-xl font-bold text-gray-800'>Owner Portal</h2>
        </div>
        <nav className='p-4 space-y-2'>
          <Link
            href='/owner'
            className='flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'></path>
            </svg>
            Dashboard
          </Link>
          <Link
            href='/owner/hotels'
            className='flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium rounded-lg transition'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'></path>
            </svg>
            My Hotels
          </Link>
          <Link
            href='/owner/bookings'
            className='flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium rounded-lg transition'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
            </svg>
            Bookings
          </Link>
          <Link
            href='/owner/reviews'
            className='flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium rounded-lg transition'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'></path>
            </svg>
            Reviews
          </Link>
        </nav>
      </aside>

      {/* Mobile Nav Toggle Logic (Implementation omitted) */}

      <main className='flex-1 w-full overflow-hidden'>{children}</main>
    </div>
  );
}
