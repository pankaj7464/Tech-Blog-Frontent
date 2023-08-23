import React from "react";
import PostMetaData from "../common/PostMetaData";
import image from "../../assets/images.jpg";
const PostCardWithThumbnail = ({className}) => {
  return (
    <div className={`flex gap-4 w-full max-h-[10rem]`}>
      <div className="relative w-[30%] max-h-full">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
      <div className="w-[70%]">
        <h2 className="text-xl font-semibold">
          Wordle Today (#791): Wordle answer and hints for August 19
        </h2>
        <PostMetaData
          category={"Entertainment"}
          author={"Nick Pankaj "}
          time={"9 hour ago"}
        />
      </div>
    </div>
  );
};

export default PostCardWithThumbnail;
