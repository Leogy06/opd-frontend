import { Hospital, Stethoscope, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export default function NavigationBar() {
  const items = [
    {
      title: "Patients",
      url: "/pages/patient",
      icon: Users,
    },
    {
      title: "Doctors",
      url: "/pages/doctor",
      icon: Stethoscope,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <div className="flex gap-3 items-center px-6 py-8">
              <div className="h-12 w-12 bg-linear-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Hospital size={30} />
              </div>
              <h1 className=" text-lg font-bold leading-tight">OPD System</h1>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((i) => {
                return (
                  <SidebarMenuItem key={i.title}>
                    <SidebarMenuButton asChild>
                      <a href={i.url}>
                        <i.icon />
                        <span>{i.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
