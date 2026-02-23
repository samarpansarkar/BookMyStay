"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building2,
  TicketCheck,
  LogOut,
  Settings,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navigation = [
    { name: "Overview", href: "/admin/admin-dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Listings", href: "/admin/listings", icon: Building2 },
    { name: "Bookings", href: "/admin/bookings", icon: TicketCheck },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/auth/login";
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col md:flex-row'>
      {/* Sidebar Navigation */}
      <div className='w-full md:w-64 bg-slate-900 text-slate-300 p-4 shrink-0 flex flex-col min-h-[calc(100vh-80px)] border-r border-slate-800'>
        <div className='mb-8 hidden md:block'>
          <h2 className='text-xl font-bold text-white border-b border-slate-800 pb-4 flex items-center gap-2'>
            <div className='w-6 h-6 rounded bg-indigo-500 flex items-center justify-center'>
              <LayoutDashboard className='w-4 h-4 text-white' />
            </div>{" "}
            Admin Portal
          </h2>
        </div>

        <nav className='flex-1 space-y-1'>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm ${
                  isActive
                    ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-900/20"
                    : "hover:bg-slate-800 hover:text-white"
                }`}>
                <item.icon
                  className={`w-5 h-5 ${isActive ? "text-indigo-200" : "text-slate-400"}`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className='pt-8 mt-auto border-t border-slate-800'>
          <button
            onClick={handleLogout}
            className='flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-slate-800 hover:text-red-300 text-sm font-semibold transition-colors w-full text-left'>
            <LogOut className='w-5 h-5' />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 p-4 sm:p-8 overflow-y-auto h-[calc(100vh-80px)]'>
        {children}
      </div>
    </div>
  );
}
