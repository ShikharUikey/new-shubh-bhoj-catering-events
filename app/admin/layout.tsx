"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  Calculator,
  Images,
  BadgeDollarSign,
  Settings,
  LogOut,
  ChefHat,
} from "lucide-react";

// ============================================================================
// Types
// ============================================================================

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

// ============================================================================
// Navigation Config
// Add new admin modules here — layout never needs to change again.
// ============================================================================

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard",       href: "/admin",            icon: LayoutDashboard   },
  { label: "Leads",           href: "/admin/leads",      icon: Inbox             },
  { label: "Estimator Leads", href: "/admin/estimator-leads", icon: Calculator },
  { label: "Gallery",         href: "/admin/gallery",    icon: Images            },
  { label: "Pricing",         href: "/admin/pricing",    icon: BadgeDollarSign   },
  { label: "Settings",        href: "/admin/settings",   icon: Settings          },
];

// ============================================================================
// Shared logout handler — used by both the header button and any page-level
// logout triggers. Calls the API so the HttpOnly cookie is deleted server-side,
// then hard-navigates to login so the browser drops all in-memory state.
// ============================================================================

function handleLogout() {
  window.location.href = "/";
}
// ============================================================================
// Sidebar Nav Item
// ============================================================================

function SidebarNavItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={[
        "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group select-none",
        isActive
          ? "bg-white/90 backdrop-blur-sm text-[#5A001A] shadow-md shadow-black/20 border border-white/20"
          : "text-white/70 hover:bg-white/10 hover:text-white",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon
        className={[
          "w-4 h-4 shrink-0 transition-colors duration-200",
          isActive ? "text-[#5A001A]" : "text-white/50 group-hover:text-white",
        ].join(" ")}
        aria-hidden="true"
      />
      <span className="truncate">{item.label}</span>

      {isActive && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#5A001A] shrink-0" aria-hidden="true" />
      )}
    </Link>
  );
}

// ============================================================================
// Sidebar
// ============================================================================

function AdminSidebar({ pathname, isOpen, onClose }: { pathname: string, isOpen: boolean, onClose: () => void }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] flex flex-col z-30 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundImage: "linear-gradient(to bottom, #5A001A, #3a0011)" }}
        aria-label="Admin sidebar"
      >
        {/* Brand mark */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <ChefHat className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">Shubh Bhoj</p>
            <p className="text-white/40 text-[11px] leading-tight tracking-wider uppercase mt-0.5">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin" || pathname === "/admin/dashboard"
                : pathname.startsWith(item.href);

            return (
              <div key={item.href} onClick={onClose}>
                <SidebarNavItem item={item} isActive={isActive} />
              </div>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="px-5 py-4 border-t border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-[1px] flex-1 bg-white/10" aria-hidden="true" />
          </div>
          <p className="text-white/50 text-[11px] font-medium leading-tight">Shubh Bhoj Admin</p>
          <p className="text-white/25 text-[10px] tracking-wider mt-0.5">Version 1.0</p>
        </div>
      </aside>
    </>
  );
}

// ============================================================================
// Header
// ============================================================================

function AdminHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header
      className="fixed top-0 left-0 md:left-[260px] right-0 h-[60px] flex items-center justify-between px-6 z-10 bg-white border-b border-neutral-100"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      {/* Left: identity */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A001A]"
          aria-label="Open sidebar menu"
          type="button"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden sm:block">
          <p className="text-[#5A001A] font-semibold text-sm leading-tight">Admin Panel</p>
          <p className="text-neutral-400 text-[11px] leading-tight">Welcome back, Admin</p>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs font-semibold text-red-600 border border-red-200 hover:border-red-400 hover:bg-red-50 px-3.5 py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          aria-label="Log out"
        >
          <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

// ============================================================================
// Root Layout
// ============================================================================

import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminSidebar pathname={pathname} isOpen={isSidebarOpen} onClose={closeSidebar} />
      <AdminHeader toggleSidebar={toggleSidebar} />

      <main
        className="ml-0 md:ml-[260px] mt-[60px] min-h-[calc(100vh-60px)] p-4 md:p-8"
        id="admin-main-content"
      >
        {children}
      </main>
    </div>
  );
}