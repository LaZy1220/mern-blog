import { NavBar } from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        {children}
      </div>
    </>
  );
};
