import {
  LayoutDashboard,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const ROUTES = {
  DASHBOARD: "/dashboard",
  TRENDS: "/trends",
  CUSTOMERS: "/customers",
  BENCHMARK: "/benchmark",
  INSIGHTS: "/insights",
  INSIGHT_DETAIL: (id: string) => `/insights/${id}`,
  AI: "/ai",
  TRANSACTIONS: "/transactions",
} as const;

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { title: "داشبورد", url: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { title: "روندها", url: ROUTES.TRENDS, icon: TrendingUp },
  { title: "مشتریان", url: ROUTES.CUSTOMERS, icon: Users },
  { title: "مقایسه با هم‌صنفی‌ها", url: ROUTES.BENCHMARK, icon: BarChart3 },
  { title: "بینش‌ها", url: ROUTES.INSIGHTS, icon: Lightbulb },
  { title: "دستیار هوشمند", url: ROUTES.AI, icon: Sparkles },
];