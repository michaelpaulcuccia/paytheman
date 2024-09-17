import { usePathname } from "next/navigation";

const useHideNav = () => {
  const pathname = usePathname();
  const hidePath = ["/"];

  // Returns true if the hero should be hidden
  return !hidePath.includes(pathname);
};

export default useHideNav;
