
import Image from "next/image";

export default function Menu() {
  return (
    <div className="min-h-screen  bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-10 pt-14">
        OUR <span className="text-[#D3AD7F]">MENU</span>
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
      
        <div className="h-96 w-full border border-white flex flex-col items-center text-center p-5">
          <Image
            src={"/about.png"}
            alt="img"
            height={180}
            width={180}
            className="rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Tasty And Healthy</h1>
          <h2 className="font-bold mb-2 text-xl">₹40.00</h2>
          <button className="bg-[#D3AD7F]  text-black p-3 rounded-md">Add To Cart</button>
        </div>

      
        <div className="h-96 w-full border border-white flex flex-col items-center text-center p-5">
          <Image
            src={"/about.png"}
            alt="img"
            height={180}
            width={180}
            className="rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Tasty And Healthy</h1>
          <h2 className="font-bold mb-2 text-xl">₹40.00</h2>
          <button className="bg-[#D3AD7F] text-black p-3 rounded-md">Add To Cart</button>
        </div>

        <div className="h-96 w-full border border-white flex flex-col items-center text-center p-5">
          <Image
            src={"/about.png"}
            alt="img"
            height={180}
            width={180}
            className="rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Tasty And Healthy</h1>
          <h2 className="font-bold text-xl mb-2">₹40.00</h2>
          <button className="bg-[#D3AD7F]  text-black p-3 rounded-md">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
