import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center h-[91px]">
      <div className="pl-[175px] z-20 text-white">Logo</div>
      <div className="pr-[175px]">
        <ul className="flex gap-[107px]">
          <li className="z-20 text-white">About</li>
          <li className="z-20 text-white">Pricing</li>
          <li className="z-20 text-white">Review</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
