import React from "react";
import Link from "next/link";

export default function Header() {
  return(
    <header className="bg-sky-100">
      <nav className="flex p-4 justify-between container mx-auto items-center">
        <div className="">
          サンプルサイト
        </div>
        <div className="space-x-8 font-bold">
          <Link href="#" className="hover:text-green-50 transtion-all duration-4000 ease-out">ホーム</Link>
          <Link href="#" className="hover:text-green-50 transtion-all duration-4000 ease-out">ブログ</Link>
          <Link href="#" className="hover:text-green-50 transtion-all duration-400 ease-out">お問い合わせ</Link>
        </div>
      </nav>
    </header>
  );
}
