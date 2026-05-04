import { headers } from "next/headers";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import {
  FaUserShield,
  FaEnvelope,
  FaCalendarAlt,
  FaIdBadge,
} from "react-icons/fa";
import Link from "next/link";

export default async function MyProfilePage() {
  // 1. Logic First: Fetch session on the server
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 2. Security Guard: Redirect if not logged in
  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-[#fdfaf1] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#264653] uppercase tracking-tighter">
            Account <span className="text-[#e76f51]">Overview</span>
          </h1>
          <p className="text-[#264653]/50 font-medium mt-2">
            Manage your digital library identity
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-[#f4a261]/10 overflow-hidden">
          {/* Top Banner Accent */}
          <div className="h-32 bg-[#264653] w-full relative">
            <div className="absolute -bottom-16 left-12">
              <div className="w-32 h-32 rounded-3xl border-4 border-white overflow-hidden bg-slate-100 shadow-lg">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={128}
                    height={128}
                    unoptimized
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#264653]/20">
                    <FaIdBadge size={64} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-12 px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h2 className="text-3xl font-black text-[#264653]">
                  {user.name}
                </h2>
                <p className="text-[#e76f51] font-bold">Verified Member</p>
              </div>
              <Link
                href="/my-profile/edit"
                className="px-8 py-3 bg-[#fdfaf1] text-[#264653] border-2 border-[#f4a261]/20 rounded-2xl font-bold hover:border-[#e76f51] transition-all"
              >
                Edit Profile
              </Link>
            </div>

            {/* Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4 p-6 bg-[#fdfaf1] rounded-2xl border border-[#f4a261]/10">
                <div className="p-3 bg-white rounded-xl text-[#e76f51] shadow-sm">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#264653]/40 tracking-widest">
                    Email Address
                  </p>
                  <p className="font-bold text-[#264653]">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-[#fdfaf1] rounded-2xl border border-[#f4a261]/10">
                <div className="p-3 bg-white rounded-xl text-[#e76f51] shadow-sm">
                  <FaUserShield size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#264653]/40 tracking-widest">
                    Role
                  </p>
                  <p className="font-bold text-[#264653] capitalize">
                    {user.role || "User"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-[#fdfaf1] rounded-2xl border border-[#f4a261]/10">
                <div className="p-3 bg-white rounded-xl text-[#e76f51] shadow-sm">
                  <FaCalendarAlt size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#264653]/40 tracking-widest">
                    Joined On
                  </p>
                  <p className="font-bold text-[#264653]">
                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-[#fdfaf1] rounded-2xl border border-[#f4a261]/10">
                <div className="p-3 bg-white rounded-xl text-[#e76f51] shadow-sm">
                  <FaIdBadge size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#264653]/40 tracking-widest">
                    User ID
                  </p>
                  <p className="font-mono text-xs text-[#264653]/60 truncate max-w-[150px]">
                    {user.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
