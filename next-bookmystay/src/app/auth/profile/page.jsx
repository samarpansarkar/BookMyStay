"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        setUser(await res.json());
      } else {
        router.push("/login");
      }
    }
    load();
  }, [router]);

  if (!user) {
    return <p className='p-8 text-center'>Loading…</p>;
  }

  return (
    <div className='bg-gray-50 min-h-[calc(100vh-theme(spacing.16))] py-8'>
      <div className='container mx-auto px-4 md:px-8 max-w-4xl'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>
          Account Settings
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Sidebar */}
          <div className='md:col-span-1'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
              <div className='p-6 border-b border-gray-100 flex flex-col items-center'>
                <div className='w-20 h-20 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl font-bold mb-3'>
                  {user.firstName[0].toUpperCase() +
                    user.lastName[0].toUpperCase()}
                </div>
                <h2 className='text-lg font-bold'>
                  {user.firstName} {user.lastName}
                </h2>
                <p className='text-sm text-gray-500'>
                  Guest since {new Date(user.createdAt).getFullYear()}
                </p>
              </div>
              <nav className='flex flex-col'>
                <Link
                  href='/profile'
                  className='px-6 py-4 bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600'>
                  Personal Information
                </Link>
                <Link
                  href='/bookings'
                  className='px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition flex justify-between items-center bg-white border-b border-gray-50'>
                  Upcoming Bookings
                  <span className='bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full'>
                    2
                  </span>
                </Link>
                <Link
                  href='/wishlist'
                  className='px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition bg-white border-b border-gray-50'>
                  Wishlist
                </Link>
                <Link
                  href='/payments'
                  className='px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium transition bg-white border-b border-gray-50'>
                  Payments & Payouts
                </Link>
                <button
                  onClick={async () => {
                    await fetch("/api/auth/logout", { method: "POST" });
                    router.push("/login");
                  }}
                  className='px-6 py-4 text-left text-red-600 hover:bg-red-50 font-medium transition bg-white'>
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='md:col-span-2'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-bold text-gray-900'>
                  Personal Information
                </h2>
                <button className='text-blue-600 font-medium hover:underline text-sm'>
                  Edit
                </button>
              </div>

              {/* Logic: Fetch real user data */}
              <div className='space-y-6'>
                <div className='pb-4 border-b border-gray-100'>
                  <p className='text-sm text-gray-500 mb-1'>Legal name</p>
                  <p className='font-medium text-gray-900'>
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div className='pb-4 border-b border-gray-100'>
                  <p className='text-sm text-gray-500 mb-1'>Email address</p>
                  <p className='font-medium text-gray-900'>{user.email}</p>
                </div>
                <div className='pb-4 border-b border-gray-100'>
                  <p className='text-sm text-gray-500 mb-1'>Phone number</p>
                  <p className='font-medium text-gray-900'>Not set</p>
                </div>
                <div className='pb-4 border-b border-gray-100 bg-red-50 p-4 rounded-lg flex justify-between items-center'>
                  <div>
                    <p className='font-bold text-red-700 text-sm'>
                      Delete Account
                    </p>
                    <p className='text-xs text-red-600 mt-1'>
                      Permanently remove your account and data.
                    </p>
                  </div>
                  <button className='px-4 py-2 bg-white border border-red-300 text-red-600 rounded shadow-sm hover:bg-red-50 text-sm font-medium transition'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
