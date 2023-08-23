import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Aside from "../admin-componant/Aside";
import Navbar from "../admin-componant/Navbar";

// 1. Dashboard
import HomeDashboard from "../pages/HomeDashboard";
import AllBlogs from "../blogs/AllBlogs";
import { AddBlog } from "../blogs/AddBlog";
import AddCategories from "../categories/AddCategories";
import AllCategories from "../categories/AllCategories";
let [onlyIcons, setOnlyIcons] = [null, null];

function Routing() {
  [onlyIcons, setOnlyIcons] = useState(false);
  return (
    <section className={`flex w-screen h-screen overflow-hidden`}>
      {/* Left Aside Section */}
      <div
        className={`hidden h-screen transition-all duration-1000 ${
          onlyIcons ? "w-[5vw] min-w-[75px] " : "w-[20vw] min-w-[320px] "
        } lg:block overflow-hidden`}
      >
        <Aside />
      </div>

      {/* Right Main Section */}
      <div
        className={`h-screen w-screen p-1 ${
          onlyIcons ? " lg:w-[95vw] " : " lg:w-[80vw] "
        } overflow-hidden transition-all duration-1000`}
      >
        <div className="w-full h-full overflow-hidden rounded">
          <div>
            <Navbar />
          </div>

          <div className="h-[calc(100vh-60px)] overflow-y-auto hide-scrollbar">
            <Routes>
              {/* 1. Dashboard */}
              <Route path="">
                <Route path="" element={<HomeDashboard />} />
              </Route>
              {/* 2. Blog Posts */}
              <Route path="/blogs" element={<AllBlogs />}>
                <Route path="" element={<AllBlogs />} />
                <Route path="add-post" element={<AddBlog />} />
              </Route>
              {/* 2. Blog Categories */}
              <Route path="/categories">
                <Route path="" element={<AllCategories />} />
                <Route path="add-categories" element={<AddCategories />} />
              </Route>

              {/* Other */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center w-full h-full">
                    This section under development...
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export { onlyIcons, setOnlyIcons };
export default Routing;
