"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/pages/patient")}>Click</Button>
    </div>
  );
}
