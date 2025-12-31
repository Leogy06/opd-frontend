import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <SidebarProvider>
        <NavigationBar />
        <div className="flex-1 border">
          <div className="flex flex-col">
            <Header />
            <div className="container mx-auto py-10 ">{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
