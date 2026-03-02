import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className='min-h-[calc(100vh-theme(spacing.16))] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Create a new account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Already have an account?{" "}
          <Link
            href='/login'
            className='font-medium text-blue-600 hover:text-blue-500 transition'>
            Sign in
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-100'>
          {/* Logic: Form onSubmit handler for registration API */}
          <form className='space-y-6' action='#' method='POST'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'>
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'>
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='role'
                className='block text-sm font-medium text-gray-700'>
                I am a
              </label>
              <div className='mt-1'>
                <select
                  id='role'
                  name='role'
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white'>
                  <option value='customer'>
                    Guest (Looking to book stays)
                  </option>
                  <option value='owner'>
                    Property Owner (Looking to list stays)
                  </option>
                </select>
              </div>
            </div>

            <div className='flex items-center'>
              <input
                id='terms'
                name='terms'
                type='checkbox'
                required
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
              />
              <label
                htmlFor='terms'
                className='ml-2 block text-sm text-gray-900'>
                I agree to the{" "}
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition'>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
