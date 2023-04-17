import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/all">All</a>
        </li>
        <li>
          <a href="/accordion">아코디언</a>
        </li>
        <li>
          <a href="/color-selector">색깔선택</a>
        </li>
        <li>
          <a href="/interpreter">인터프리터</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
