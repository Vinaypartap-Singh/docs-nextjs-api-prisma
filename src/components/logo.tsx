import Image from "next/image";
import Link from "next/link";
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";

const karla = Jost({ subsets: ["latin"], weight: "500" });

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href={"/"}>
        <h2 className={cn("text-2xl ml-2", karla.className)}>Docify</h2>
      </Link>
    </div>
  );
};
