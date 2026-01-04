import PageHeader from "@/components/common/PageHeader";
import PatientForm from "@/features/patients/components/PatientForm";
import { Users } from "lucide-react";

export default function Patient() {
  return (
    <>
      <PageHeader text="Patients" icon={<Users />} />
      <PatientForm />
    </>
  );
}
