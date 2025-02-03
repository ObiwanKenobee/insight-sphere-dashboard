import {
  LayoutDashboard,
  Briefcase,
  CreditCard,
  FileText,
  Heart,
  PawPrint,
  TrendingUp,
  Search,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Investment Banking",
    icon: Briefcase,
    url: "/investment",
  },
  {
    title: "Retail Banking",
    icon: CreditCard,
    url: "/retail",
  },
  {
    title: "InsurTech",
    icon: FileText,
    url: "/insurtech",
  },
  {
    title: "Healthcare",
    icon: Heart,
    url: "/healthcare",
  },
  {
    title: "Veterinary",
    icon: PawPrint,
    url: "/veterinary",
  },
  {
    title: "Market Trends",
    icon: TrendingUp,
    url: "/trends",
  },
  {
    title: "Research",
    icon: Search,
    url: "/research",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-semibold">Guardian-IO</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}