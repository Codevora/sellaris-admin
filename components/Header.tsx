
import Nav from "./Nav";
const Header: React.FC = () => {
 return (
  <header className="p-5 bg-primary sticky top-0 z-10">
   <div className="flex justify-between items-center">
    <img src="Logos/1.png" alt="" className="w-32"/>
    <Nav />
   </div>
  </header>
 );
};

export default Header;
