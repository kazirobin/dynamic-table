import Navbar from "../navbar.component";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout;
