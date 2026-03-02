import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className='flex min-h-[calc(100vh-theme(spacing.16))] bg-gray-50'>
      {/* Sidebar Navigation for Admin */}
      <aside className='w-64 bg-gray-900 text-gray-300 hidden md:block shrink-0'>
        <div className='p-6 border-b border-gray-800'>
          <h2 className='text-xl font-bold text-white'>Admin Hub</h2>
          <p className='text-xs text-gray-500 mt-1'>Superuser Access</p>
        </div>
        <nav className='p-4 space-y-2'>
          <Link
            href='/admin'
            className='flex items-center gap-3 px-4 py-3 bg-gray-800 text-white font-medium rounded-lg'>
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
            href='/admin/users'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white font-medium rounded-lg transition'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'></path>
            </svg>
            Users
          </Link>
          <Link
            href='/admin/hotels'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white font-medium rounded-lg transition'>
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
            Properties
          </Link>
          <Link
            href='/admin/bookings'
            className='flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white font-medium rounded-lg transition'>
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
        </nav>
      </aside>

      <main className='flex-1 w-full overflow-hidden'>{children}</main>
    </div>
  );
}
