import type { Metadata } from "next";
import { LoginPage } from "@/components/auth/LoginPage";

export const metadata: Metadata = {
  title: "Log in · Oryndoc",
  description: "Log in to your Oryndoc practice workspace.",
};

export default function Login() {
  return <LoginPage />;
}
