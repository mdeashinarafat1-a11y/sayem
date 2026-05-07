import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-white border-b border-[#e8e8e8] h-16 flex justify-between items-center px-6">
      <div className="text-gray-500 text-sm">Welcome back, Admin</div>
      <div className="flex items-center gap-3">
        <div className="text-right">
            <div className="text-sm font-semibold text-[#262626]">Shafiul Islam</div>
            <div className="text-xs text-[#8c8c8c]">Head Librarian</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1890ff] text-white flex items-center justify-center text-xs font-semibold">SI</div>
      </div>
    </div>
  );
}
