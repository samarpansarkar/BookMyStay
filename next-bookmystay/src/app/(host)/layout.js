"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Home,
  Calendar,
  CreditCard,
  LogOut,
  Plus,
} from "lucide-react";

export default function HostLayout({ children }) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/host/host-dashboard", icon: LayoutDashboard },
    { name: "My Properties", href: "/host/properties", icon: Home },
    { name: "Calendar", href: "/host/calendar", icon: Calendar },
    { name: "Earnings", href: "/host/earnings", icon: CreditCard },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/auth/login";
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col md:flex-row'>
      {/* Sidebar Navigation */}
      <div className='w-full md:w-64 bg-slate-900 text-white p-4 shrink-0 flex flex-col min-h-[calc(100vh-80px)]'>
        <div className='mb-8 hidden md:block'>
          <h2 className='text-xl font-bold border-b border-slate-700 pb-4'>
            Host Portal
          </h2>
        </div>

        <nav className='flex-1 space-y-2 translate-y-2'>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm ${
                  isActive
                    ? "bg-green-600 text-white font-bold shadow-md shadow-green-900/50"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}>
                <item.icon
                  className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className='pt-8'>
          <Link
            href='/host/properties/new'
            className='flex items-center justify-center gap-2 w-full py-3 mb-4 rounded-xl bg-slate-800 text-white hover:bg-slate-700 font-semibold transition-colors border border-slate-700'>
            <Plus className='w-4 h-4' /> Add Property
          </Link>
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
