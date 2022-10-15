import React from "react";

import avatar from "../../assets/images/avatar.png";

export default function Profile() {
  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        className="top-search"
        placeholder="Search movie, cast, genre"
      />
      <div className="flex items-center gap-4">
        <span className="text-black text-sm font-medium">
          Welcome, Lailatul Fitriyah
        </span>
        <div className="collapsible-dropdown flex flex-col gap-2 relative">
          <a
            href="#!"
            className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
            data-target="#dropdown-button"
          >
            <img
              src={avatar}
              className="rounded-full object-cover w-full"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
