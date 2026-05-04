"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    // TODO: Integrate authClient.signIn.email() here
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
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                errors.password
                  ? "border-red-400"
                  : "border-[#f4a261]/20 focus:border-[#e76f51]"
              }`}
              placeholder="••••••••"
            />
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
            Login
          </button>
        </form>

        <div className="mt-8">
          <button
            onClick={() => console.log("Google Login")}
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
