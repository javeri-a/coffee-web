import Image from "next/image";


export default function About(){
    return(
        <div  className=" bg-black min-h-screen -mt-6 ">
        <h1 className=" text-[#D3AD7F] md:text-4xl text-3xl text-center md:pt-3 pt-4 font-bold">ABOUT <span className="text-white">US</span>  </h1>
         <div className="md:flex ">
        <Image
        src={"/about.png"}
        alt="about"
        height={420}
        width={620}
        className="md:pl-36  md:pt-20 md:pb-10"

        />

        <div className="md:h-[412px] md:w-[548px] h-auto w-auto bg-[#2f2f3066]  md:pr-20 md:mt-20 pb-20 text-white">
            <h1 className="md:p-4  p-2 mt-5 font-bold">What is Make Our Coffee Special? </h1>

            <p className="md:pl-4 pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae? Ipsa consequuntur, hic obcaecati sit quia expedita. Fugiat aliquid atque distinctio consectetur aut voluptate, facilis deserunt explicabo odio sint tempore.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae? Ipsa consequuntur, hic obcaecati sit quia expedita. Fugiat aliquid atque distinctio consectetur aut voluptate.
            </p>


            <button className="px-6 py-2 ml-4 mt-4 bg-[#ecbe88] hover:bg-[#f7cfa1] text-black font-medium rounded">
        Learn More
      </button>
        </div>
        </div>
        </div>
    )
}