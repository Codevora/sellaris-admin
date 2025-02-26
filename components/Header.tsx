
import Nav from "./Nav";
const Header: React.FC = () => {
 return (
  <header className="p-5 bg-primary">
   <div className="flex justify-between items-center">
    <img src="Logos/1.png" alt="" className="w-32"/>
    <Nav />
   </div>
  </header>
 );
};

export default Header;
