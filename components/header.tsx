import { ModeToggle } from "./dark-mode/mode-toggle";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="w-full bg-[#17171A]">
      <header className="mx-auto flex max-w-7xl items-center justify-between p-2">
        <Logo />
        <ModeToggle />
      </header>
    </div>
  );
};

export default Header;
