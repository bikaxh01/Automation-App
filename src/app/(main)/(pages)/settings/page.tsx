import ProfileForm from "@/components/Forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";

function Settings() {
  return (
    <div className=" flex flex-col gap-4 relative">
      <h1 className=" text-2xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Setting
      </h1>
      <div className=" flex flex-col gap-10 p-10">
        <div>
          <h1 className=" text-2xl font-bold">User Profile</h1>
          <p className=" text-base text-white/50">
            Add or update your information
          </p>

        </div>
        <ProfilePicture>
          
        </ProfilePicture>

        <ProfileForm/>
      </div>
    </div>
  );
}

export default Settings;
