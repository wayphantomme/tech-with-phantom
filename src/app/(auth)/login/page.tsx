"use client";

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { login } from "@/actions/auth.actions";
import { useRouter } from "next/navigation";
import { Login1 } from "@/components/ui/login-1";

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>("");
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

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    startTransition(() => {
      login({ email, password }).then((data) => {
        if (data?.error) {
          setError(data.error);
        } else {
          router.push("/courses");
        }
      });
    });
  };

  return (
    <Login1
      heading="Selamat Datang Kembali"
      subheading="Login ke akun Tech with Phantom kamu"
      buttonText="Masuk"
      googleText="Lanjutkan dengan Google"
      signupText="Belum punya akun?"
      signupLinkText="Daftar sekarang"
      signupUrl="/register"
      mode="login"
      onSubmit={onSubmit}
      onGoogleLogin={handleGoogleLogin}
      isPending={isPending}
      isGooglePending={isGooglePending}
      error={error}
    />
  );
}
