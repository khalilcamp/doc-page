import { Home, Search } from "lucide-react"
import GrafanaPNG from "../assets/grafanalogo.png"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Docs",
    url: "/docs/1",
    icon: Search,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-slate-900">
        <SidebarGroup>
          <SidebarGroupLabel>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <div className="flex items-center border-1 bg-slate-100 rounded-r-xl gap-4">
                <img src={GrafanaPNG} alt="" className='h-12' />
                <h2 className='pr-2 font-smoochregular text-xl font-semibold text-gray-800'>Grafana Documentação</h2>
            </div>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-white">
                      <item.icon />
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
  )
}
