import type { ReactNode } from "react";
import Avatar from "../../../components/Avatar";
import Badge from "../../../components/Badge";

interface UserProfileProps {
  imageUrl: string;
  name: string;
  role: string;
  isAdmin?: boolean;
  children: ReactNode;
}

const UserProfile = ({
  imageUrl,
  name,
  role,
  isAdmin,
  children,
}: UserProfileProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 ">
      <div className="flex gap-4">
        <Avatar imageUrl={imageUrl} altText={`${name}'s avatar`} size="lg" />
        <div>
          <h2 className="text-xl font-extrabold text-gray-900">{name}</h2>
          <div className="mt-2">
            <Badge role={role} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default UserProfile;
