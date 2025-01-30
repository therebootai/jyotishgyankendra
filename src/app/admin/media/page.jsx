import { getMedia } from "@/actions/mediaactions";
import LogoutButton from "@/components/admin/LogoutButton";
import AddMedia from "@/feature/adminmedia/AddMedia";
import ManageMedia from "@/feature/adminmedia/ManageMedia";
import AdminDashboardTemplate from "@/templates/AdminDashboardTemplate";

export const metadata = {
  title: "Jyothish Gyan kendra | Admin Media",
  description: "Develop and managed by Rebbot AI PVT. LTD.",
};

const Media = async () => {
  const { medias, pagination } = await getMedia();

  return (
    <AdminDashboardTemplate>
      <div className="h-[3rem] border-b border-[#00000033]">
        <div className="flex justify-end items-center gap-6 w-full ">
          <LogoutButton />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <AddMedia />
        <ManageMedia media={medias} pagination={pagination} />
      </div>
    </AdminDashboardTemplate>
  );
};

export default Media;
