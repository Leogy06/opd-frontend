import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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
        <SidebarInset>
          <Header />
          <main className="flex-1 overflow-y-auto">
            <div className="container px-4 py-10">{children}</div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
