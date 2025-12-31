import PageHeader from "@/components/common/PageHeader";
import { Users } from "lucide-react";

export default function Patient() {
  return (
    <>
      <PageHeader text="Patients" icon={<Users />} />
    </>
  );
}
