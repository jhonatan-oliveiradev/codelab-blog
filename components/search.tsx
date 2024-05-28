import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="relative flex items-center gap-2 space-y-8 bg-[#17171A] px-6 pb-12">
      <SearchIcon className="absolute left-8 top-11 text-primary" size={18} />
      <Input placeholder="Pesquisar no blog" type="text" className="pl-8" />
    </div>
  );
};

export default Search;
