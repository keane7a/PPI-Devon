import Navbar from "./ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <>
    <div className="flex flex-col">
      <div className="h-dvh w-full bg-center bg-cover bg-[url('/homepage_bg.jpg')] text-white">
        <div className="flex flex-col text-center mt-80">
          <h1 className="text-4xl md:text-8xl font-bold mx-10 md:mx-40 md:px-8">Greetings and Welcome!</h1>
          <h2 className="font-bold text-xl md:text-2xl p-4">Join Our Community</h2>
          <div className="m-auto border border-white p-3 px-8 rounded-full hover:bg-white hover:text-black duration-300 ease-in-out">
            <Link href="/about">Learn More</Link>
          </div>
        </div>  
      </div>
      <div>
        instagram
      </div>
    </div>
  </>
  );
}