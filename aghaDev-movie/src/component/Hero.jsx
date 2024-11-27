

const Hero = () => {

    return (
        <>
            <div className="w-full h-[53.75rem]  overflow-hidden flex relative" >
                <div className="w-full h-full bg-gradient-to-r from-black via-black to-transparent absolute top-0 left-0 z-[2] p-[7.5rem] flex justify-center ">
                    <div className="w-[20.813rem] h-full text-white  flex flex-col items-center  justify-end  px-2 gap-4">
                        <div className="w-full h-[15.375rem] p-1">
                            <h1 className="text-[2.5rem] font-extrabold text-center mb-2 ">Elysium</h1>
                            <p className="text-[1rem] font-semibold">Elysium adalah sebuah film thriller aksi fiksi ilmiah distopia Amerika 2013 yang ditulis, disutradarai, dan diproduksi oleh Neill Blomkamp, dan dibintangi oleh Matt Damon, Jodie Foster, dan Sharlto Copley. Film tersebut dirilis pada 9 Agustus 2013</p>
                        </div>
                        <div className="w-full h-[15.75rem] flex justify-center gap-4 text-center p-6">
                            <div className="flex flex-col items-start">
                                <p className="">Score : 6.6 / 10</p>
                                <p className="">vote : 477k </p>
                            </div>

                            <p className="">release date : <br /> 21 agustus 2013 </p>
                        </div>
                    </div>
                    <div className="w-[52rem] h-full flex items-end">
                        <div className="h-[19.25rem] w-full flex flex-col items-end">
                            <div className="h-[2.75rem] w-full  mb-[1.25rem] flex font-extrabold justify-between items-center text-white"> 
                                <h1 className="font-semibold ">The Popular Movie</h1>
                                <div className="flex gap-2">
                                    <div className="w-[2.75rem] h-[2.75rem] flex items-center justify-center rounded-md hover:scale-105 cursor-pointer border border-slate-200 backdrop-blur-[5px] bg-transparent ">&lt;
                                    </div>
                                    <div className="w-[2.75rem] h-[2.75rem] flex items-center justify-center rounded-md hover:scale-105 cursor-pointer border active:border-white backdrop-blur-[5px] ">&gt;
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full  flex  overflow-x-scroll scrollbar-custom py-1">
                                <div className="flex w-max  gap-[1rem] items-end">
                                    <div className="w-[9.5rem] h-[14.25rem] bg-sky-400 rounded-md shadow-md opacity-25 border-2 border-white  "></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                    <div className="w-[9.5rem] h-[13.75rem] bg-sky-400 rounded-md shadow-md opacity-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-[10%] bg-slate-950"  ></div>
                <div className="h-full w-[90%] ">
                    <img src="https://reformasi.co.id/wp-content/uploads/2023/06/elysium-696x392.webp" alt="" className="w-full h-full object-right-top " />
                </div>
            </div>
        </>
    )

}


export default Hero