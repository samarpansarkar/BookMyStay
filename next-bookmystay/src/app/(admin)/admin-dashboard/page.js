import {
  Users,
  TrendingUp,
  Building2,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function AdminDashboardPage() {
  return (
    <div className='max-w-7xl mx-auto space-y-8 pb-12'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-extrabold text-slate-900 mb-1'>
            Platform Overview
          </h1>
          <p className='text-slate-500 font-medium'>
            System status, vital metrics, and pending administrative tasks.
          </p>
        </div>
        <div className='flex items-center gap-3 bg-white border border-slate-200 p-2 rounded-xl shadow-sm pr-4'>
          <div className='w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold'>
            SA
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-bold text-slate-800 leading-tight'>
              System Admin
            </span>
            <span className='text-xs font-medium text-slate-500 leading-tight flex items-center gap-1'>
              <ShieldCheck className='w-3 h-3 text-green-500' /> Verified
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[
          {
            title: "Total Users",
            value: "1.52M",
            trend: "+12k this month",
            icon: Users,
            color: "text-indigo-600",
            bg: "bg-indigo-100",
          },
          {
            title: "Active Listings",
            value: "18,402",
            trend: "+324 this month",
            icon: Building2,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
          },
          {
            title: "Monthly Revenue",
            value: "₹4.2Cr",
            trend: "+8.4% vs last month",
            icon: TrendingUp,
            color: "text-blue-600",
            bg: "bg-blue-100",
          },
          {
            title: "Pending Approvals",
            value: "48",
            trend: "Needs review",
            icon: AlertTriangle,
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
            </div>
            <h3 className='text-3xl font-black text-slate-900 mb-1'>
              {metric.value}
            </h3>
            <p className='text-sm font-bold text-slate-500'>{metric.title}</p>
            <p
              className={`text-xs font-medium mt-2 ${metric.trend.includes("+") ? "text-emerald-600" : "text-amber-600"}`}>
              {metric.trend}
            </p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Recent Users Registeration */}
        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold text-slate-800'>
              Recent Registrations
            </h2>
            <button className='text-sm font-bold text-indigo-600 hover:text-indigo-700'>
              View All
            </button>
          </div>
          <div className='bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'>
            <div className='divide-y divide-slate-100'>
              {[
                {
                  name: "Ananya Sharma",
                  role: "Customer",
                  date: "2 mins ago",
                  status: "Active",
                },
                {
                  name: "David Miller",
                  role: "Host",
                  date: "15 mins ago",
                  status: "Pending KYC",
                },
                {
                  name: "Summit Hotels Group",
                  role: "Host",
                  date: "1 hr ago",
                  status: "Pending KYC",
                },
                {
                  name: "Rajesh Kumar",
                  role: "Customer",
                  date: "3 hrs ago",
                  status: "Active",
                },
              ].map((user, idx) => (
                <div
                  key={idx}
                  className='p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors'>
                  <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm border border-slate-200'>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className='font-bold text-slate-900 text-sm'>
                        {user.name}
                      </p>
                      <div className='flex items-center gap-2 mt-0.5 text-xs'>
                        <span
                          className={`font-semibold ${user.role === "Host" ? "text-indigo-600" : "text-slate-500"}`}>
                          {user.role}
                        </span>
                        <span className='w-1 h-1 bg-slate-300 rounded-full'></span>
                        <span className='text-slate-400 font-medium'>
                          {user.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Approvals */}
        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold text-slate-800'>
              Listing Approvals
            </h2>
            <button className='text-sm font-bold text-indigo-600 hover:text-indigo-700'>
              View All Reviews
            </button>
          </div>
          <div className='bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'>
            <div className='divide-y divide-slate-100'>
              {[
                {
                  name: "Hilltop Villa with Pool",
                  host: "Karan S.",
                  loc: "Lonavala",
                  time: "4 hours ago",
                  img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=150",
                },
                {
                  name: "Urban Studio",
                  host: "Neha G.",
                  loc: "Bengaluru",
                  time: "5 hours ago",
                  img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=150",
                },
                {
                  name: "Heritage Haveli Stay",
                  host: "Vikram R.",
                  loc: "Jaipur",
                  time: "1 day ago",
                  img: "https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&q=80&w=150",
                },
              ].map((prop, idx) => (
                <div
                  key={idx}
                  className='p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors group'>
                  <div className='flex items-center gap-4'>
                    <div className='w-14 h-14 rounded-xl overflow-hidden relative shrink-0'>
                      <Image
                        src={prop.img}
                        fill
                        alt={prop.name}
                        className='object-cover group-hover:scale-110 transition-transform'
                      />
                    </div>
                    <div>
                      <p className='font-bold text-slate-900 text-sm line-clamp-1'>
                        {prop.name}
                      </p>
                      <div className='flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 font-medium'>
                        <span>{prop.loc}</span>
                        <span className='w-1 h-1 bg-slate-300 rounded-full'></span>
                        <span>by {prop.host}</span>
                      </div>
                      <p className='text-[10px] text-slate-400 mt-1 uppercase font-bold'>
                        {prop.time}
                      </p>
                    </div>
                  </div>
                  <button className='shrink-0 px-3 py-1.5 bg-indigo-50 text-indigo-600 font-semibold rounded-lg text-xs hover:bg-indigo-100 hover:text-indigo-700 transition-colors'>
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
