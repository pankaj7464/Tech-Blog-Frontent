import React from "react";
import { useParams } from "react-router-dom";
import image from "../assets/images.jpg";
import PostCardWithThumbnail from "../components/cards/PostCardWithThumbnail";
import PostCard from "../components/cards/PostCard";
const PostDetail = () => {
  const { category, postId } = useParams();
  // Assuming you have some data or logic to fetch the post details based on the category and postId
  const post = {
    title: "Sample Blog Post Title",
    content: "This is the content of the blog post...",
    author: "John Doe",
    date: "August 19, 2023",
  };

  // Dummy data for recent posts
  const recentPosts = [
    { id: 1, title: "Recent Post 1" },
    { id: 2, title: "Recent Post 2" },
    { id: 3, title: "Recent Post 3" },
  ];
  return (
    <>
      <section className="md:w-[90%] mx-auto lg:flex">
        {/* Left section for blog post details */}
        <section className="lg:w-3/4 p-4 ">
          <section className="flex flex-col gap-6">
            <h1 className="text-2xl  md:text-4xl">{post.title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img className="  object-fill" src={image} alt="" />
                </div>
                <div>
                  <div>
                    <span className="text-xl">{post.author} </span>
                    <span className="text-slate-500 -mt-6">
                      {post.date}
                    </span>{" "}
                  </div>
                  <span>Designation</span>
                </div>
              </div>
              <div>
                <span>Like</span>
                <span>view : 15k</span>
              </div>
            </div>
            <p className=" text-xl font-light text-justify">
              {post.content}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ducimus dolor autem, voluptas exercitationem eligendi distinctio
              nesciunt dicta corrupti molestiae mollitia earum ab minima
              repellat aperiam incidunt impedit officia quisquam sequi? Quis
              possimus voluptas expedita et rerum ipsum eaque quod, suscipit
              incidunt cupiditate quasi adipisci quisquam repellendus molestias
              a magnam dolore tempore. Eius explicabo, vero laudantium, dolores
              similique optio animi, temporibus fuga sit quidem quia. Ex
              explicabo et obcaecati suscipit? Suscipit velit sapiente inventore
              ipsam! Tempore accusamus cum temporibus unde ea recusandae vel
              commodi, id consequuntur maxime iure impedit aut distinctio ad
              cupiditate eveniet consectetur, doloribus ab? Nihil cumque culpa
              expedita blanditiis harum illum reiciendis iure veritatis ipsum
              repellendus. Minus, magnam id. Commodi aliquam, culpa aliquid
              animi assumenda explicabo? Labore vero, repudiandae quasi fuga
              velit consequatur autem deserunt eligendi dicta molestiae ut
              voluptas officiis atque? Nam dolor modi repudiandae, ea officiis
              nisi quidem vero similique iste aliquam amet delectus, neque
              officia sed magni veniam eveniet illo suscipit deserunt commodi
              temporibus? Enim nesciunt facere pariatur! Sed reprehenderit,
              magnam culpa eius placeat numquam quibusdam quod omnis earum quae,
              facere voluptate porro fugit quasi. Veniam accusantium commodi
              facilis inventore, ipsum assumenda praesentium consequuntur odio?
              Excepturi minus totam, eos quasi eaque eius! Laborum, accusamus.
            </p>
          </section>
          <section className=" flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              Popular Post in Computing
            </h2>
            <PostCardWithThumbnail />
            <PostCardWithThumbnail />
            <PostCardWithThumbnail />
            <PostCardWithThumbnail />
          </section>
        </section>
        {/* Right section for recent posts */}
        <section className="lg:w-1/3 p-4">
          <h1 className=" text-2xl  mb-12 mt-[4.5rem]">Recent Posts</h1>

          <div className="flex flex-col gap-6">
            {recentPosts.map((recentPost) => (
              <>
                <PostCard />
                <hr className="border-t-2  border-slate-500" />
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default PostDetail;
