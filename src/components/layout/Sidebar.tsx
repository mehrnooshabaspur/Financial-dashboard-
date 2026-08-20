"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NAV_ITEMS } from "@/constants/routes";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarPrimitive side="right" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            ز
          </div>
          <span className="font-semibold text-sm group-data-[collapsible=icon]:hidden">
            زرین‌پال آنالیتیکس
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>منو</SidebarGroupLabel>
          <SidebarGroupContent>
<SidebarMenu>
  {NAV_ITEMS.map((item) => {
    const isActive = pathname.startsWith(item.url);
    return (
      <SidebarMenuItem key={item.url}>
        <SidebarMenuButton isActive={isActive} render={<Link href={item.url} />}>
          <item.icon />
          <span>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  })}
</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarPrimitive>
  );
}