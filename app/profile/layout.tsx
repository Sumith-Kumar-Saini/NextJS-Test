import { JSX } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <h4 className="text-6xl">Layout</h4>
      {children}
    </>
  );
};

export default Layout;
