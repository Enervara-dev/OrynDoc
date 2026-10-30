import type { Metadata } from "next";
import { LoginPage } from "@/components/auth/LoginPage";

export const metadata: Metadata = {
  title: "Log in · OrynDoc",
  description: "Log in to your OrynDoc practice workspace.",
};

export default function Login() {
  return <LoginPage />;
}
