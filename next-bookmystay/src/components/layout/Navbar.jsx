import Link from "next/link";

const Navbar = () => {
  // Logic: determine user authentication state and role here
  // const { user } = useAuth(); // Example
  const isLoggedIn = false;
  const userRole = "guest"; // 'guest', 'customer', 'owner', 'admin'

  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold text-blue-600'>
          BookMyStay
        </Link>

        <div className='hidden md:flex space-x-6 items-center'>
          <Link
            href='/search'
            className='text-gray-600 hover:text-blue-600 font-medium transition'>
            Find Hotels
          </Link>

          {isLoggedIn && userRole === "customer" && (
            <>
              <Link
                href='/bookings'
                className='text-gray-600 hover:text-blue-600 font-medium transition'>
                My Bookings
              </Link>
              <Link
                href='/wishlist'
                className='text-gray-600 hover:text-blue-600 font-medium transition'>
                Wishlist
              </Link>
            </>
          )}

          {isLoggedIn && userRole === "owner" && (
            <Link
              href='/owner'
              className='text-gray-600 hover:text-blue-600 font-medium transition'>
              Owner Panel
            </Link>
          )}

          {isLoggedIn && userRole === "admin" && (
            <Link
              href='/admin'
              className='text-gray-600 hover:text-blue-600 font-medium transition'>
              Admin Panel
            </Link>
          )}
        </div>

        <div className='flex items-center space-x-4'>
          {!isLoggedIn ? (
            <>
              <Link
                href='/auth/login'
                className='text-gray-600 hover:text-blue-600 font-medium transition hidden md:block'>
                Login
              </Link>
              <Link
                href='/auth/register'
                className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md'>
                Register
              </Link>
            </>
          ) : (
            <div className='flex items-center space-x-4'>
              <Link
                href='/auth/profile'
                className='text-gray-600 hover:text-blue-600 font-medium transition'>
                Profile
              </Link>
              <button className='text-red-500 hover:text-red-700 font-medium transition'>
                Logout
              </button>
            </div>
          )}

          <button className='md:hidden text-gray-600 focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
