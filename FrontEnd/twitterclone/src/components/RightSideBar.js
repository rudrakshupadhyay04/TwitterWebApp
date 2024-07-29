import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSideBar = () => {
  return (
    <div className="w-1/5 ">
      <div className="flex items-center p-2 bg-gray-100 rounded-full">
        <CiSearch size={"20px"} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent px-2"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg ">Who to follow</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <div>
              <Avatar
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                size="60"
                round={true}
              />
            </div>
            <div className="ml-1">
              <h1 className="font-bold">Tomato</h1>
              <p className="text-sm">@rammohan</p>
            </div>
          </div>
          <div>
            <button className="bg-black text-white rounded-full w-full py-1 px-3">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
