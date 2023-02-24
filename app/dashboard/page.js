"use client";

import { GoogleSignInButton, DashboardForm } from "@/components/ui";

export default function DashboardPage() {
  return (
    <main className="flex flex-col justify-center items-center min-w-full min-h-screen text-slate">
      <GoogleSignInButton />
      <DashboardForm />
    </main>
  );
}
