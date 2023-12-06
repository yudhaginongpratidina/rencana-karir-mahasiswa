import React from "react";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import Content from "./components/Content";

const Dashboard = () => {
  return (
    <div>
      <HeaderAdmin />
      <div class="flex pt-16 overflow-hidden bg-gray-50">
        <SidebarAdmin />

        <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64">
          <main>
            <Content />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
