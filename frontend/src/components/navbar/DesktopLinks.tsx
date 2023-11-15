import React, { FC } from "react";

interface DesktopLinksProps {
  children: React.ReactNode;
}

const DesktopLinks: FC<DesktopLinksProps> = ({ children }) => {
  return (
    <div className="relative hidden md:ml-6 md:block">
      <div className="flex space-x-4">{children}</div>
    </div>
  );
};

export default DesktopLinks;
