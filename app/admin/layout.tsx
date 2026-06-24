import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-[#5A001A] text-white p-6">

        <h2 className="text-2xl font-bold mb-8">
          Shubh Bhoj Admin
        </h2>

        <nav className="space-y-3">

          <a
            href="/admin"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            📊 Dashboard
          </a>

          <a
            href="/admin/leads"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            📩 Leads
          </a>

          <a
            href="/admin/estimator-leads"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            🧮 Estimator Leads
          </a>

          <a
            href="/admin/gallery"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            🖼 Gallery
          </a>

          <a
            href="/admin/pricing"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            💰 Pricing
          </a>

          <a
            href="/admin/settings"
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            ⚙ Settings
          </a>

        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}