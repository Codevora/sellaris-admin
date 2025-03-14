import Link from "next/link";

const Header: React.FC = () => {
 return (
  <header className="p-4 px-7 bg-primary sticky top-0 z-10">
   <div className="flex justify-between items-center">
    <img
     src="Logos/1.png"
     alt=""
     className="w-32"
    />
    <div className="flex gap-4">
     <button className="text-white font-semibold">Help</button>
     <Link href="https://codevora.id">
      <button className="text-white font-semibold">Sign Up</button>
     </Link>
    </div>
   </div>
  </header>
 );
};

export default Header;
