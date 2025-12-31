import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto py-10">{children}</main>;
}
