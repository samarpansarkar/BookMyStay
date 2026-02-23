import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Github } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12'>
      {/* Decorative Background */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-green-200/50 rounded-full mix-blend-multiply blur-[100px] opacity-70'></div>
        <div className='absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full mix-blend-multiply blur-[120px] opacity-70'></div>
      </div>

      <div className='w-full max-w-xl relative z-10'>
        <div className='bg-white rounded-3xl shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 p-8 sm:p-12'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-extrabold text-slate-900 mb-2'>
              Create an account
            </h2>
            <p className='text-slate-500 font-medium'>
              Join 1.5M+ users finding their dream stays.
            </p>
          </div>

          <form className='space-y-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div>
                <label className='block text-sm font-bold text-slate-700 mb-1.5'>
                  First Name
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <User className='h-5 w-5 text-slate-400' />
                  </div>
                  <input
                    type='text'
                    className='w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-800'
                    placeholder='John'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-bold text-slate-700 mb-1.5'>
                  Last Name
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <User className='h-5 w-5 text-slate-400' />
                  </div>
                  <input
                    type='text'
                    className='w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-800'
                    placeholder='Doe'
                  />
                </div>
              </div>
            </div>

            <div>
              <label className='block text-sm font-bold text-slate-700 mb-1.5'>
                Email Address
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-slate-400' />
                </div>
                <input
                  type='email'
                  className='w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-800'
                  placeholder='Enter your email'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-bold text-slate-700 mb-1.5'>
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='h-5 w-5 text-slate-400' />
                </div>
                <input
                  type='password'
                  className='w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-800'
                  placeholder='Create a strong password'
                />
              </div>
              <p className='text-xs text-slate-500 font-medium mt-2'>
                Must be at least 8 characters long.
              </p>
            </div>

            <div className='flex items-start mt-4'>
              <input
                id='terms'
                type='checkbox'
                className='h-4 w-4 mt-0.5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer'
              />
              <label
                htmlFor='terms'
                className='ml-2 block text-sm font-medium text-slate-600 leading-relaxed'>
                By signing up, you agree to our{" "}
                <Link
                  href='#'
                  className='font-bold text-green-600 hover:underline'>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href='#'
                  className='font-bold text-green-600 hover:underline'>
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type='button'
              className='w-full py-4 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4'>
              Create Account <ArrowRight className='w-4 h-4' />
            </button>
          </form>

          <div className='mt-8 mb-8'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-slate-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-4 bg-white text-slate-500 font-bold uppercase tracking-wider text-xs'>
                  Or sign up with
                </span>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <button className='flex items-center justify-center py-3 px-4 border-2 border-slate-200 rounded-xl shadow-sm bg-white text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all'>
              <svg className='h-5 w-5 mr-2' viewBox='0 0 24 24'>
                <path
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  fill='#34A853'
                />
                <path
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  fill='#EA4335'
                />
              </svg>
              Google
            </button>
            <button className='flex items-center justify-center py-3 px-4 border-2 border-slate-200 rounded-xl shadow-sm bg-white text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all'>
              <Github className='h-5 w-5 mr-2' />
              GitHub
            </button>
          </div>

          <p className='mt-8 text-center text-sm font-medium text-slate-600'>
            Already have an account?{" "}
            <Link
              href='/auth/login'
              className='font-bold text-green-600 hover:text-green-700 transition-colors'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
