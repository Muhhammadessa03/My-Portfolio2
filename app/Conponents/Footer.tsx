import Link from "next/link";



export default function Footer(){
    return(
        <section>


<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <div className="w-full h-fit bg-gray-800">
            <div className="h-full w-[80%] mx-auto md:py-10 py-4 flex sm:flex-row flex-col justify-between items-center">
                <div>
                    <img className="lg:w-[10rem] lg:h-[10rem] md:w-[10rem] md:h-[10rem] w-[10rem] h-[10rem] rounded-xl" src="/M Essa.jpg" alt="Logo" />
                </div>
        
                <div className="flex flex-col gap-4 items-center">
                    <ul className="flex lg:gap-6 md:gap-4 md:flex-row flex-col justify-center md:text-xl text-lg md:mt-0 mt-4 md:font-semibold text-gray-300">
                        <li className="">
                            <Link href="/" className="text-white hover:font-bold">Home</Link>
                        </li>
                        <li className="">
                            <Link href="/About" className="text-white hover:font-bold">About</Link>
                        </li>
                        <li className="">
                            <Link href="/Skills" className="text-white hover:font-bold">Skills</Link>
                        </li>
                        <li className="">
                            <Link href="/Contact" className="text-white hover:font-bold">Contact</Link>
                        </li>                
                       
                    </ul>
        
                    <div>
                        <h3 className="text-semibold text-center lg:text-2xl text-xl text-white md:mt-6 ">Certified Cloud Applied Generative Generative Artificial Intelligence (AI) Engineer (GenEng)</h3>
                    </div>
                </div>
              

                <div>
                    <ul className="flex gap-2 justify-center md:py-0 py-4 md:flex-col lg:flex-row text-gray-300">
                        <li className="">
                            <Link href="https://www.facebook.com/gadani.baloch.98" className=""><i className="uil uil-facebook lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></Link>
                        </li>
                      

                        <li className="">
                            <Link href="https://www.linkedin.com/in/muhammad-essa-8777a8291" className=""><i className="uil uil-linkedin lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></Link>
                        </li>
                        <li className="">
                            <Link href=" https://mailto:essagadaani036@gmail.com" className=""><i className="uil uil-telegram lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
         

            <div className="md:w-[70%] sm:w-[80%] w-[96%] mx-auto flex md:gap-4 gap-2 items-center justify-center">
                <hr className="w-full md:border-2 border-gold" />
                <h1 className="w-fit sm:text-2xl text-xl font-semibold font-serif text-white">GADANI</h1>
                <hr className="w-full md:border-2 border-gold" />
            </div>
        
           
            <div className="flex justify-center items-center py-4 capitalize">
                <h4 className="text-white sm:text-xl font-smibold text-lg">&copy;2024 Designed by GenEng M Essa Gadani</h4>
            </div>
        </div>
        </section>
    )
}