import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Logotipo: CodeLab" width={102} height={31} />
    </Link>
  );
};

export default Logo;
