"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Plane, Heart, Settings, LogOut } from "lucide-react";

export default function CustomerLayout({ children }) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/customer/dashboard", icon: LayoutDashboard },
    { name: "My Trips", href: "/customer/trips", icon: Plane },
    { name: "Wishlists", href: "/customer/wishlists", icon: Heart },
    { name: "Profile", href: "/customer/profile", icon: Settings },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/auth/login";
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col md:flex-row'>
      {/* Sidebar Navigation */}
      <div className='w-full md:w-64 bg-white border-r border-slate-200 p-4 shrink-0 flex flex-col min-h-[calc(100vh-80px)]'>
        <div className='mb-8 hidden md:block'>
          <h2 className='text-xl font-bold text-slate-900 border-b border-slate-100 pb-4'>
            My Account
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
                    ? "bg-green-50 text-green-700 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}>
                <item.icon
                  className={`w-5 h-5 ${isActive ? "text-green-600" : "text-slate-400"}`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className='flex items-center gap-3 px-3 py-3 mt-8 rounded-xl text-red-600 hover:bg-red-50 text-sm font-semibold transition-colors w-full text-left'>
          <LogOut className='w-5 h-5 text-red-500' />
          Sign Out
        </button>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 p-4 sm:p-8'>{children}</div>
    </div>
  );
}
