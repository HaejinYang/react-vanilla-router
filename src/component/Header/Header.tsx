import React from "react";
import Link from "../Link/Link";

const Header: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/all">all</Link>
        </li>
        <li>
          <Link href="/accordion">아코디언</Link>
        </li>
        <li>
          <Link href="/color-selector">색깔선택</Link>
        </li>
        <li>
          <Link href="/interpreter">인터프리터</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
