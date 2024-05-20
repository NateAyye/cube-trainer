import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeLink: React.FC = () => {
  return (
    <Link
      href="/home"
      className="hover:bg-muted2 m-1 flex w-fit cursor-pointer items-end gap-1 rounded-md p-1"
    >
      <Image src="/logoipsum.svg" alt="Home" width={28} height={28} />
      <span className="font-anton text-foreground text-2xl font-semibold leading-6 tracking-[-0.03em] ">
        CubeTrainer
      </span>
    </Link>
  );
};

export default HomeLink;
