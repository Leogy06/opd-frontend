import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
            <div className="container mx-2 sm:mx-4 md:mx-6 lg:mx-8 py-10 ">
              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
