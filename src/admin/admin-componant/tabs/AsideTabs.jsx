import React from "react";
import Tab from "./Tab";

function AsideTabs() {
  return (
    <section>
      <Tab
        index={0}
        title="DASHBOARD"
        disabled={true}
        subtabs={[{ tabName: "Dashboard", link: "" }]}
      />
      <Tab
        index={1}
        title="POST"
        disabled={false}
        subtabs={[
          { tabName: "All Posts", link: "" },
          { tabName: "Add Post", link: "add-post" },
          { tabName: "Edit Post", link: "edit-post" },
        ]}
      />
      <Tab
        index={2}
        title="CATEGORY"
        disabled={false}
        subtabs={[
          { tabName: "All Categories", link: "/" },
          { tabName: "Add Category", link: "/add-category" },
          { tabName: "Edit Category", link: "edit-category" },
        ]}
      />
    </section>
  );
}

export default AsideTabs;
