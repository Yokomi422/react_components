import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-turorial-bg min-h-screen bg-cover bg-center object-cover py-60 md:py-80">
        <div className="md:flex container mx-auto md:justify-around">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-5xl sm:text-7xl">サンプル</h1>
            <p className="text-xl">これはサンプルに作った</p>
            <button className="w-24 h-18 bg-blue-400 rounded shadow mt-4 ml-12 text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer p-2 self-center md:self-start">
              ボタン
            </button>
          </div>
          <div>
            <Image src="/icon.jpeg" layout="full" width={300} height={300} alt="icon" className="self-center md:self-start mx-auto mt-24 md:mt-0"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
