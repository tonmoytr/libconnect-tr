"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EditProfilePage() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: session?.user?.name,
      image: session?.user?.image,
    },
  });

  const onSubmit = async (data) => {
    // Logic First: Call BetterAuth update method
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#fdfaf1] px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-[#f4a261]/20">
        <h2 className="text-2xl font-black text-[#264653] mb-8 text-center uppercase tracking-tighter">
          Update <span className="text-[#e76f51]">Information</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-2">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#f4a261]/20 focus:border-[#e76f51] outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#264653] mb-2">
              Profile Image URL
            </label>
            <input
              {...register("image")}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#f4a261]/20 focus:border-[#e76f51] outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#e76f51] text-white py-4 rounded-xl font-black hover:bg-[#f4a261] transition-all disabled:bg-gray-300"
          >
            {isSubmitting ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}
