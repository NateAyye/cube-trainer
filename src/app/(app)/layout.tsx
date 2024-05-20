import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebar }) => {
  return (
    <>
      {sidebar}
      {children}
    </>
  );
};

export default MainLayout;
