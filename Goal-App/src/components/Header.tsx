import { type ReactNode } from "react";

interface HeaderProps {
    image: {src:string; alt:string};
    children:ReactNode;
}

const Header = ({image, children}:HeaderProps) => {
  return (
    <header>
        <img className="rounded-md w-28 mx-auto" {...image}/>
        <h1 className="text-center text-sky-400 font-bold text-2xl m-5">{children}</h1>
    </header>
  )
}

export default Header;
