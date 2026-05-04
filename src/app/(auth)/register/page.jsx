"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/utils/auth-client";
import { TbLoader3 } from "react-icons/tb";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photoUrl } = data;
    // console.log(name);
    
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photoUrl,
      callbackURL: "/login",
    });
    console.log(res, error);
    if (error) {
      toast.error(error.message || "Registration failed");
    }
    if (res) {
      toast.success("Your account has been created successfully!");

      router.push("/login");
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Integrate authClient.signIn.social({ provider: "google" })
    console.log("Google Social Login Triggered");
  };

  return (
    <div className="min-h-[calc(100-80px)] bg-[#fdfaf1] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-[#f4a261]/20 p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#264653]">Create Account</h1>
          <p className="text-[#264653]/50 font-medium mt-2">
            Join LibConnect Today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                errors.name
                  ? "border-red-400"
                  : "border-[#f4a261]/20 focus:border-[#e76f51]"
              }`}
              placeholder="Daniel Dicaprio"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-bold">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
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

          {/* Photo URL Field */}
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-1">
              Photo URL
            </label>
            <input
              {...register("photoUrl", { required: "Photo URL is required" })}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                errors.photoUrl
                  ? "border-red-400"
                  : "border-[#f4a261]/20 focus:border-[#e76f51]"
              }`}
              placeholder="https://image-link.com"
            />
            {errors.photoUrl && (
              <p className="text-red-500 text-xs mt-1 font-bold">
                {errors.photoUrl.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-1">
              Password
            </label>
            <input
              type="password"
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
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#e76f51] text-white py-4 rounded-xl font-black text-lg hover:bg-[#f4a261] transition-all shadow-lg shadow-[#e76f51]/20 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span>Creating Account...</span>
                <TbLoader3 className="h-5 w-5 animate-spin" />
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-[#f4a261]/20 w-full"></div>
            <span className="absolute bg-white px-4 text-[#264653]/40 text-xs font-bold uppercase tracking-widest">
              Or continue with
            </span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-[#f4a261]/20 py-3 rounded-xl font-bold text-[#264653] hover:bg-[#fdfaf1] transition-all"
          >
            <FcGoogle size={24} /> Google
          </button>
        </div>

        <p className="text-center mt-8 text-[#264653]/60 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#e76f51] font-black hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
