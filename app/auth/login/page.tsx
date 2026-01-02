import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { HospitalIcon } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex flex-col items-center justify-center gap-1">
            <span className=" h-12 w-12 bg-linear-to-br from-green-500 to-blue-500 rounded-full">
              <p className="flex items-center justify-center h-full">
                <HospitalIcon size={30} />
              </p>
            </span>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              OPD system
            </h1>
          </CardTitle>
          <CardDescription className="text-center">
            Outpatient department management system <br />
            Login to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="grid gap-1">
              <Label>Email</Label>
              <Input placeholder="johndoe@email.com" />
            </div>
            <div className="grid gap-1">
              <Label>Password</Label>
              <Input type="password" placeholder="Input password here" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
