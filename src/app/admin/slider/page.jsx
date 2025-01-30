import { getSliders } from "@/actions/slideractions";
import LogoutButton from "@/components/admin/LogoutButton";
import AddSlider from "@/feature/adminslider/AddSlider";
import ManageSliders from "@/feature/adminslider/ManageSliders";
import AdminDashboardTemplate from "@/templates/AdminDashboardTemplate";

export const metadata = {
  title: "Jyothish Gyan kendra | Admin Slider",
  description: "Develop and managed by Rebbot AI PVT. LTD.",
};

export default async function Slider() {
  const sliders = await getSliders();
  return (
    <AdminDashboardTemplate>
      <div className=" h-[3rem] border-b border-[#00000033]">
        <div className="flex justify-end items-center gap-6 w-full ">
          <LogoutButton />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <AddSlider />

        <ManageSliders sliders={sliders} />
      </div>
    </AdminDashboardTemplate>
  );
}
