
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-5">
        {[
          { label: 'Total Books', value: '1,240' },
          { label: 'Issued Books', value: '324' },
          { label: 'Total Students', value: '850' },
          { label: 'Available Books', value: '916' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-lg border border-[#e8e8e8] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <div className="text-[13px] text-[#8c8c8c] mb-2">{stat.label}</div>
            <div className="text-2xl font-bold text-[#262626]">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
