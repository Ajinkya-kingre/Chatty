import React from "react";
import UserSide from "../components/UserSide";
import MsgContainer from "../components/MsgContainer";
import SidebarLeft from "../components/sidebarLeft";

const Home = () => {
  return (
    <div className="w-full flex flex-row content-center sm:h-[100vh] md:h-[100vh] rounded overflow-hidden bg-background">
      <SidebarLeft />

      <UserSide />

      <MsgContainer />
    </div>
  );
};

export default Home;
