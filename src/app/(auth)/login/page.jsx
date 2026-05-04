"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/utils/auth-client";
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Login Data:", data);
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (res) {
      toast.success("Welcome to LibConnect!");
    }
    if (error) {
      toast.error(error.message || "Login Failed");
    }
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf1] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-[#f4a261]/20 p-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-[#264653]">Welcome Back</h1>
          <p className="text-[#264653]/50 font-medium mt-2">
            Login to your library account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                errors.email
                  ? "border-red-400"
                  : "border-[#f4a261]/20 focus:border-[#e76f51]"
              }`}
              placeholder="libconnect@mail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-bold">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-[#264653] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Dynamic type switching
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                  errors.password
                    ? "border-red-400"
                    : "border-[#f4a261]/20 focus:border-[#e76f51]"
                }`}
                placeholder="••••••••"
              />

              {/* Eye Icon Toggle */}
              <button
                type="button" // Important: prevents form submission on click
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#264653]/40 hover:text-[#e76f51] transition-colors"
              >
                {showPassword ? (
                  <HiEye size={20} /> // Opened Eye
                ) : (
                  <HiEyeOff size={20} /> // Closed Eye
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#e76f51] text-white py-4 rounded-xl font-black text-lg hover:bg-[#f4a261] transition-all shadow-lg shadow-[#e76f51]/20"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-[#f4a261]/20 py-3 rounded-xl font-bold text-[#264653] hover:bg-[#fdfaf1] transition-all"
          >
            <FcGoogle size={24} /> Sign in with Google
          </button>
        </div>

        <p className="text-center mt-10 text-[#264653]/60 font-medium">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#e76f51] font-black hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
