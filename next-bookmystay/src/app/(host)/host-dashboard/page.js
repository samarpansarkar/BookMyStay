import {
  TrendingUp,
  Users,
  CalendarCheck,
  IndianRupee,
  Bell,
} from "lucide-react";

export default function HostDashboardPage() {
  return (
    <div className='max-w-6xl mx-auto space-y-8 pb-12'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-extrabold text-slate-900 mb-1'>
            Host Overview
          </h1>
          <p className='text-slate-500 font-medium'>
            Here's what's happening with your properties today.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <button className='relative p-2.5 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors'>
            <Bell className='w-5 h-5 text-slate-600' />
            <span className='absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full'></span>
          </button>
          <div className='h-10 px-4 bg-green-100 text-green-700 font-bold rounded-full flex items-center justify-center text-sm ring-1 ring-green-500/20'>
            Superhost Status
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[
          {
            title: "Monthly Earnings",
            value: "₹1,42,000",
            trend: "+12.5%",
            icon: IndianRupee,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
          },
          {
            title: "Active Bookings",
            value: "24",
            trend: "+4",
            icon: CalendarCheck,
            color: "text-blue-600",
            bg: "bg-blue-100",
          },
          {
            title: "Profile Views",
            value: "3,204",
            trend: "+18%",
            icon: Users,
            color: "text-violet-600",
            bg: "bg-violet-100",
          },
          {
            title: "Occupancy Rate",
            value: "82%",
            trend: "+2.4%",
            icon: TrendingUp,
            color: "text-amber-600",
            bg: "bg-amber-100",
          },
        ].map((metric, idx) => (
          <div
            key={idx}
            className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200'>
            <div className='flex justify-between items-start mb-4'>
              <div className={`p-3 rounded-xl ${metric.bg}`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <span className='inline-flex items-center text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full'>
                {metric.trend}
              </span>
            </div>
            <p className='text-sm font-bold text-slate-500 mb-1'>
              {metric.title}
            </p>
            <h3 className='text-2xl font-black text-slate-900'>
              {metric.value}
            </h3>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Recent Reservation Requests */}
        <div className='lg:col-span-2 space-y-6'>
          <h2 className='text-xl font-bold text-slate-800'>
            Pending Requests (3)
          </h2>
          <div className='bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'>
            <div className='divide-y divide-slate-100'>
              {[
                {
                  name: "Arjun Mehta",
                  dates: "Nov 12 - Nov 15",
                  property: "Luxury Emerald Villa",
                  total: "₹25,500",
                  guests: 2,
                },
                {
                  name: "Priya Sharma",
                  dates: "Nov 18 - Nov 22",
                  property: "Cozy Mountain Cabin",
                  total: "₹18,000",
                  guests: 4,
                },
                {
                  name: "Rohan Patel",
                  dates: "Dec 01 - Dec 05",
                  property: "Luxury Emerald Villa",
                  total: "₹34,000",
                  guests: 6,
                },
              ].map((req, idx) => (
                <div
                  key={idx}
                  className='p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-lg'>
                      {req.name.charAt(0)}
                    </div>
                    <div>
                      <p className='font-bold text-slate-900'>{req.name}</p>
                      <div className='flex flex-wrap items-center gap-2 text-sm text-slate-500 mt-0.5'>
                        <span>{req.property}</span>{" "}
                        <span className='w-1 h-1 bg-slate-300 rounded-full'></span>
                        <span>{req.dates}</span>{" "}
                        <span className='w-1 h-1 bg-slate-300 rounded-full'></span>
                        <span>{req.guests} guests</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-slate-100'>
                    <span className='font-black text-slate-900'>
                      {req.total}
                    </span>
                    <div className='flex gap-2'>
                      <button className='px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors'>
                        Accept
                      </button>
                      <button className='px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors'>
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions / To-Do */}
        <div className='space-y-6'>
          <h2 className='text-xl font-bold text-slate-800'>Need Attention</h2>
          <div className='bg-white rounded-2xl shadow-sm border border-slate-200 p-6'>
            <ul className='space-y-5 relative before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-slate-100'>
              <li className='relative pl-8'>
                <span className='absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center z-10'>
                  <span className='w-2 h-2 rounded-full bg-amber-500'></span>
                </span>
                <p className='font-bold text-slate-800 text-sm'>
                  Review Alex Kumar
                </p>
                <p className='text-slate-500 text-xs mt-0.5'>
                  Checked out yesterday from Mountain Cabin. You have 13 days
                  left to leave a review.
                </p>
                <button className='mt-2 text-green-600 font-bold text-xs hover:underline'>
                  Write Review
                </button>
              </li>
              <li className='relative pl-8'>
                <span className='absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center z-10'>
                  <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                </span>
                <p className='font-bold text-slate-800 text-sm'>
                  Update Cleaning Protocols
                </p>
                <p className='text-slate-500 text-xs mt-0.5'>
                  Please acknowledge the new cleaning guidelines for 2024.
                </p>
                <button className='mt-2 text-green-600 font-bold text-xs hover:underline'>
                  Read Guidelines
                </button>
              </li>
              <li className='relative pl-8'>
                <span className='absolute left-0 top-1 w-6 h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center z-10'>
                  <span className='w-2 h-2 rounded-full bg-red-500'></span>
                </span>
                <p className='font-bold text-slate-800 text-sm'>
                  1 Message from Guest
                </p>
                <p className='text-slate-500 text-xs mt-0.5'>
                  Priya Sharma is asking about early check-in for next week.
                </p>
                <button className='mt-2 text-green-600 font-bold text-xs hover:underline'>
                  Reply now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
