import Header from "../components/layoust/Header";
import Footer from '../components/layoust/Footer'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
