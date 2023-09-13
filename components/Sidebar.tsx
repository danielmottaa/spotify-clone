"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface ISidebar {
  children: React.ReactNode;
}

const Sidebar: React.FC<ISidebar> = ({ children }) => {
  const pathname = usePathname();

  const rotues = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Início",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Pesquisar",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div
        className="
      hidden 
      md:flex
      flex-col
      gap-y-2     
      bg-black
      h-full
      w-[300px]
      p-2
      "
      >
        <Box>
          <div
            className="
          flex
          flex-col
          grap-y-4
          px-5
          py-4
        "
          >
            {rotues.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="
        h-full
        flex-1
        overflow-y-auto
        py-2
      ">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
