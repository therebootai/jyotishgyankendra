import AdminSideHeader from "@/feature/AdminSideHeader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminDashboardTemplate({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/reboots");
  }
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-row h-screen w-full ">
        <div className="w-[20%]">
          <AdminSideHeader />
        </div>
        <div className="w-full p-4 overflow-auto no-scrollbar">{children}</div>
      </div>
    </div>
  );
}
