import { Link, NavLink } from "react-router-dom";
import { BookIcon, CatalogoIcon, HomeIcon, LogoIcon, MenuIcon, SearchIcon } from "../icons";

const linksData = [
  {
    id: 1,
    title: "home",
    href: "/",
    icon: <HomeIcon />
  },
  {
    id: 2,
    title: "Esplora",
    href: "/esplora",
    icon: <SearchIcon />
  },
  {
    id: 3,
    title: "Crea",
    href: "/crea",
    icon: <BookIcon />
  },
  {
    id: 4,
    title: "Catalogo",
    href: "/catalogo",
    icon: <CatalogoIcon />
  },
]

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col h-screen py-12 pl-8">
      <Link className="block pl-3" to={"/"}>
        <LogoIcon />
      </Link>
      {/* links */}
      <div className="flex flex-col items-start gap-2 mt-16">
        {linksData.map(link => (
          <NavLink key={link.id} to={link.href} className="flex items-center gap-2 h-10 rounded-10 hover:bg-brand-gray px-4 cursor-pointer">
            {link.icon}
            <span className="text-sm font-medium capitalize">{link.title}</span>
          </NavLink>
        ))}
      </div>
      {/* bottom content */}
      <div className="mt-auto">
        <button className="flex items-center gap-2 h-10 rounded-10 hover:bg-brand-gray px-4 cursor-pointer">
          <MenuIcon />
          <span className="text-sm font-medium capitalize">Altro</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
