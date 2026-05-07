import React from 'react';
import { LayoutDashboard, Book, Users, BookOpen, RotateCcw, BarChart3, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Books', icon: Book, href: '/books' },
    { name: 'Students', icon: Users, href: '/students' },
    { name: 'Issue Books', icon: BookOpen, href: '/issue' },
    { name: 'Return Books', icon: RotateCcw, href: '/return' },
    { name: 'Reports', icon: BarChart3, href: '/reports' },
  ];

  return (
    <div className="w-60 bg-[#001529] text-white min-h-screen">
      <h2 className="text-xl font-bold mb-8 px-6 flex items-center gap-2 text-white"><span className="text-2xl">📚</span> Digital Library</h2>
      <nav className="flex flex-col gap-1 px-4">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex items-center gap-3 p-3.5 text-white/65 hover:text-white hover:bg-[#1890ff]/20 rounded transition-colors text-sm">
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        ))}
        <button className="flex items-center gap-3 p-3.5 text-white/50 hover:text-white rounded mt-4 w-full transition-colors text-sm">
            <LogOut size={18}/>
            <span>Logout</span>
        </button>
      </nav>
    </div>
  );
}
