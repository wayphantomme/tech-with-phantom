"use client";

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { register } from "@/actions/auth.actions";
import { Login1 } from "@/components/ui/login-1";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [isGooglePending, setIsGooglePending] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setIsGooglePending(true);
    await signIn("google", { callbackUrl: "/courses" });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    startTransition(() => {
      register({ name, email, password }).then((data) => {
        if (data.error) setError(data.error);
        if (data.success) {
          setSuccess(data.success);
          setTimeout(() => {
            router.push("/login");
          }, 1500);
        }
      });
    });
  };

  return (
    <div className="relative">
      {success && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-green-100 text-green-800 p-4 rounded-md shadow-md text-sm text-center">
          {success}
          <div className="mt-1 text-xs opacity-80">Mengarahkan ke halaman login...</div>
        </div>
      )}
      <Login1
        heading="Buat Akun Baru"
        subheading="Daftar gratis dan mulai belajar hari ini"
        buttonText="Daftar Sekarang"
        googleText="Daftar dengan Google"
        signupText="Sudah punya akun?"
        signupLinkText="Masuk sekarang"
        signupUrl="/login"
        showName={true}
        mode="register"
        onSubmit={onSubmit}
        onGoogleLogin={handleGoogleLogin}
        isPending={isPending}
        isGooglePending={isGooglePending}
        error={error}
      />
    </div>
  );
}
