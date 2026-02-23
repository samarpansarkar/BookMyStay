import {
  Search,
  Filter,
  MoreHorizontal,
  UserCheck,
  UserX,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function AdminUsersPage() {
  return (
    <div className='max-w-6xl mx-auto space-y-8 pb-12'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-extrabold text-slate-900 mb-1'>
            User Management
          </h1>
          <p className='text-slate-500 font-medium'>
            View, search, and manage platform users and their permissions.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm'>
            <Filter className='w-4 h-4' /> Filter
          </button>
          <button className='flex items-center gap-2 px-4 py-2 bg-indigo-600 border border-indigo-600 rounded-xl font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-600/20'>
            Export CSV
          </button>
        </div>
      </div>

      <div className='bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'>
        <div className='p-4 border-b border-slate-100 flex items-center justify-between'>
          <div className='relative w-full max-w-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-4 w-4 text-slate-400' />
            </div>
            <input
              type='text'
              className='w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-800'
              placeholder='Search users by name, email, or role...'
            />
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-left whitespace-nowrap'>
            <thead className='bg-slate-50 text-xs uppercase font-bold text-slate-500 tracking-wider'>
              <tr>
                <th className='px-6 py-4 border-b border-slate-200'>
                  User Details
                </th>
                <th className='px-6 py-4 border-b border-slate-200'>Role</th>
                <th className='px-6 py-4 border-b border-slate-200'>Status</th>
                <th className='px-6 py-4 border-b border-slate-200'>
                  Joined Date
                </th>
                <th className='px-6 py-4 border-b border-slate-200 text-right'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100 bg-white'>
              {[
                {
                  name: "Ananya Sharma",
                  email: "ananya.s@example.com",
                  role: "Customer",
                  status: "Active",
                  date: "Oct 12, 2024",
                },
                {
                  name: "David Miller",
                  email: "david.m@example.com",
                  role: "Host",
                  status: "Pending KYC",
                  date: "Oct 10, 2024",
                },
                {
                  name: "Summit Hotels",
                  email: "contact@summit.com",
                  role: "Host",
                  status: "Suspended",
                  date: "Sep 28, 2024",
                },
                {
                  name: "Rajesh Kumar",
                  email: "rajesh.k@example.com",
                  role: "Customer",
                  status: "Active",
                  date: "Sep 15, 2024",
                },
                {
                  name: "Elena Woods",
                  email: "elena.w@example.com",
                  role: "Admin",
                  status: "Active",
                  date: "Jan 01, 2023",
                },
              ].map((user, idx) => (
                <tr
                  key={idx}
                  className='hover:bg-slate-50/50 transition-colors'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 border border-slate-200 shrink-0'>
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className='font-bold text-slate-900 flex items-center gap-1.5 cursor-pointer hover:underline text-sm'>
                          {user.name}{" "}
                          {user.role === "Admin" && (
                            <ShieldCheck className='w-4 h-4 text-indigo-500' />
                          )}
                        </div>
                        <div className='text-sm text-slate-500'>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ring-1 ring-inset ${
                        user.role === "Admin"
                          ? "bg-indigo-50 text-indigo-700 ring-indigo-600/20"
                          : user.role === "Host"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
                            : "bg-slate-100 text-slate-700 ring-slate-500/20"
                      }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "text-green-700 bg-green-100"
                          : user.status === "Suspended"
                            ? "text-red-700 bg-red-100"
                            : "text-amber-700 bg-amber-100"
                      }`}>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-500"
                            : user.status === "Suspended"
                              ? "bg-red-500"
                              : "bg-amber-500"
                        }`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm font-medium text-slate-600'>
                    {user.date}
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <div className='flex items-center justify-end gap-2'>
                      {user.status !== "Suspended" ? (
                        <button
                          className='p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                          title='Suspend User'>
                          <UserX className='w-5 h-5' />
                        </button>
                      ) : (
                        <button
                          className='p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors'
                          title='Activate User'>
                          <UserCheck className='w-5 h-5' />
                        </button>
                      )}
                      <button
                        className='p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors'
                        title='More Options'>
                        <MoreHorizontal className='w-5 h-5' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium bg-slate-50 text-center sm:text-left'>
          <span>Showing 1 to 5 of 1.52M results</span>
          <div className='flex items-center gap-2 mt-2 sm:mt-0 justify-center'>
            <button className='px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50'>
              Prev
            </button>
            <button className='px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50 flex-1 sm:flex-none'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
