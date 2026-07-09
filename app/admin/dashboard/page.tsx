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
    <div>
      {/* ── Page Header ── */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800">Dashboard</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Overview of your website activity
          </p>
        </div>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 px-3.5 py-2 rounded-lg transition-all duration-200"
        >
          <Globe className="w-3.5 h-3.5" />
          Visit Website
        </a>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
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
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href}
                href={action.href}
                className="bg-white rounded-2xl border border-neutral-100 p-5 text-center hover:border-[#5A001A]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5A001A]/5 group-hover:bg-[#5A001A]/10 flex items-center justify-center mx-auto mb-3 transition-colors">
                  <Icon className="w-5 h-5 text-[#5A001A]" />
                </div>
                <h3 className="font-semibold text-sm text-neutral-800">
                  {action.label}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">{action.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Recent Leads ── */}
      <div>
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
          Recent Leads
        </h2>

        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
          {loading ? (
            <div className="text-center py-12 text-neutral-400 text-sm">
              Loading...
            </div>
          ) : stats.recentLeads.length === 0 ? (
            <div className="text-center py-12 text-neutral-400 text-sm">
              No leads yet.
            </div>
          ) : (
            stats.recentLeads.map((lead, index) => (
              <div
                key={lead.id}
                className={[
                  "px-5 py-4",
                  index !== stats.recentLeads.length - 1 &&
                    "border-b border-neutral-50",
                ].join(" ")}
              >
                <p className="font-semibold text-sm text-neutral-800">
                  {lead.name}
                </p>
                <p className="text-sm text-neutral-500 mt-0.5">{lead.phone}</p>
                {lead.message && (
                  <p className="text-xs text-neutral-400 mt-1">
                    {lead.message}
                  </p>
                )}
              </div>
            ))
          )}
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
    <div className="bg-white rounded-2xl border border-neutral-100 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-[#5A001A]/5 flex items-center justify-center">
          <Icon className="w-4.5 h-4.5 text-[#5A001A]" />
        </div>
        <p className="text-sm font-medium text-neutral-500">{label}</p>
      </div>
      <p className="text-3xl font-bold text-neutral-800">
        {loading ? (
          <span className="inline-block w-12 h-8 bg-neutral-100 rounded animate-pulse" />
        ) : (
          value
        )}
      </p>
    </div>
  );
}