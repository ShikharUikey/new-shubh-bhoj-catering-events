"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  Calculator,
  Images,
  BadgeDollarSign,
  Settings,
  Globe,
  Users,
  ImageIcon,
  FileText,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Lead {
  id: number;
  name: string;
  phone: string;
  message?: string;
}

interface DashboardStats {
  totalLeads: number;
  totalGallery: number;
  totalEstimator: number;
  recentLeads: Lead[];
}

// ── Quick action config ──────────────────────────────────────────────────────

const QUICK_ACTIONS = [
  { label: "Lead Management", desc: "View contact leads", href: "/admin/leads", icon: Inbox },
  { label: "Estimator Leads", desc: "View quote requests", href: "/admin/estimator-leads", icon: Calculator },
  { label: "Gallery", desc: "Manage images", href: "/admin/gallery", icon: Images },
  { label: "Pricing", desc: "Update packages", href: "/admin/pricing", icon: BadgeDollarSign },
  { label: "Settings", desc: "Website settings", href: "/admin/settings", icon: Settings },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalLeads: 0,
    totalGallery: 0,
    totalEstimator: 0,
    recentLeads: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Dashboard fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#FAF7F2] to-[#EAE0D5] text-[#2C2523] px-4 py-8 md:px-12 md:py-14 antialiased selection:bg-[#5A001A]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ── Page Header ── */}
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#E1D7C6] pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A001A]" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A880]">
                Internal Portal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-normal text-[#2C2523] tracking-tight font-serif">
              Dashboard
            </h1>
            <p className="text-sm md:text-base text-[#7A716E] font-medium">
              Manage your catering business from one place.
            </p>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold text-[#5A001A] border-2 border-[#5A001A]/30 bg-white hover:bg-[#5A001A] hover:text-white px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_10px_rgba(44,37,35,0.02)] hover:shadow-[0_12px_24px_rgba(90,0,26,0.15)] hover:-translate-y-0.5"
          >
            <Globe className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.75} />
            <span>Visit Website</span>
          </a>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <StatCard
            icon={Users}
            label="Total Leads"
            value={stats.totalLeads}
            loading={loading}
          />
          <StatCard
            icon={ImageIcon}
            label="Gallery Images"
            value={stats.totalGallery}
            loading={loading}
          />
          <StatCard
            icon={FileText}
            label="Estimator Requests"
            value={stats.totalEstimator}
            loading={loading}
          />
        </div>

        {/* ── Quick Actions ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 px-1">
            <h2 className="text-xs font-bold text-[#C5A880] uppercase tracking-[0.25em] whitespace-nowrap">
              Quick Actions
            </h2>
            <div className="w-full h-[1px] bg-[#E1D7C6]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border-2 border-[#E1D7C6] border-t-4 border-t-[#C5A880] p-4 md:p-6 lg:p-8 text-center shadow-[0_4px_12px_rgba(44,37,35,0.02)] hover:shadow-[0_20px_40px_-5px_rgba(90,0,26,0.08)] hover:border-[#5A001A]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#FAF7F2] border-2 border-[#E1D7C6] group-hover:bg-[#5A001A] group-hover:border-[#5A001A] flex items-center justify-center mb-3 md:mb-5 transition-all duration-300">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#5A001A] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xs md:text-sm lg:text-base text-[#2C2523] tracking-tight group-hover:text-[#5A001A] transition-colors duration-300 leading-tight">
                    {action.label}
                  </h3>
                  <p className="hidden md:block text-xs text-[#7A716E] mt-1.5 font-medium leading-relaxed max-w-[160px]">
                    {action.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── Recent Leads ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 px-1">
            <h2 className="text-xs font-bold text-[#C5A880] uppercase tracking-[0.25em] whitespace-nowrap">
              Recent Leads
            </h2>
            <div className="w-full h-[1px] bg-[#E1D7C6]" />
          </div>

          <div className="bg-white rounded-3xl border-2 border-[#E1D7C6] overflow-hidden shadow-[0_6px_20px_rgba(44,37,35,0.02)]">
            {loading ? (
              <div className="text-center py-24 text-[#7A716E] text-sm font-medium animate-pulse tracking-wide">
                Retrieving updates from hospitality registry...
              </div>
            ) : stats.recentLeads.length === 0 ? (
              <div className="text-center py-24 text-[#7A716E] text-sm font-medium tracking-wide">
                No active records in the lead ledger.
              </div>
            ) : (
              <div className="divide-y-2 divide-[#FAF7F2]">
                {stats.recentLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-6 md:p-8 hover:bg-[#FAF7F2]/60 transition-colors duration-300 group border-b border-[#E1D7C6]/40 last:border-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <p className="font-bold text-base md:text-xl text-[#2C2523] tracking-tight group-hover:text-[#5A001A] transition-colors duration-300">
                          {lead.name}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#E1D7C6] px-3 py-1 rounded-full text-xs text-[#7A716E] font-semibold tracking-wide shadow-sm">
                          <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                          {lead.phone}
                        </div>
                      </div>
                      
                      {lead.message && (
                        <div className="relative bg-white border-2 border-[#E1D7C6] px-6 py-4 rounded-2xl max-w-xl w-full md:text-left shadow-sm group-hover:border-[#C5A880]/40 transition-colors duration-300 border-l-4 border-l-[#C5A880]">
                          <p className="text-xs md:text-sm text-[#4E4340] italic leading-relaxed">
                            &quot;{lead.message}&quot;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Stat Card Component ──────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  label,
  value,
  loading,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  loading: boolean;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#E1D7C6] border-l-4 border-l-[#C5A880] p-8 shadow-[0_4px_12px_rgba(44,37,35,0.01)] hover:shadow-[0_20px_40px_-5px_rgba(90,0,26,0.08)] hover:border-[#5A001A]/40 hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between overflow-hidden relative">
      <div className="space-y-3 relative z-10">
        <p className="text-xs font-bold text-[#7A716E] tracking-[0.15em] uppercase">
          {label}
        </p>
        <div className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#2C2523] tracking-tight font-serif">
          {loading ? (
            <span className="inline-block w-16 h-10 md:w-20 md:h-12 bg-[#FAF7F2] rounded-xl animate-pulse border border-[#E1D7C6]" />
          ) : (
            value.toLocaleString()
          )}
        </div>
      </div>

      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#FAF7F2] border-2 border-[#E1D7C6] group-hover:border-[#5A001A]/30 group-hover:bg-[#5A001A]/[0.02] flex items-center justify-center transition-all duration-300 relative z-10 shadow-sm group-hover:scale-105">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#5A001A] group-hover:rotate-6 transition-transform duration-300" strokeWidth={1.5} />
      </div>
    </div>
  );
}