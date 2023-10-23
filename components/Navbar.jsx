import Link from "next/link";

function NavButton({name, link}) {
  return (
    <Link className="text-white font-bold p-2 rounded hover:bg-orange-500 hover:scale-110" href={link}>{name}</Link>
  )
}

export default function Navbar() {
  return (
    <nav className="fixed z-10 top-0 w-screen flex justify-between items-center bg-orange-600 px-8 py-3">
      <NavButton name="Home" link="/"/>
      <NavButton name="Login/Sing up" link="/Login"/>
    </nav>
  );
}
