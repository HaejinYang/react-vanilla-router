import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
