export default function Hero () {
    return(
        <main className = "font-Montserrat">
            <div>
                <h1 className = "text-[#23A6F0] w-[77px] h-[24px] text-[16px] leading-[24px] mt-[130px] justify-self-center font-bold tracking-[0.1px]">Welcome</h1>
            </div>
            <div>
                <h1 className = "text-white font-bold text-[58px] leading-[80px] justify-self-center text-center mt-[40px] text-wrap w-[545px] tracking-[0.2px]">Selling on the internet like a pro</h1>
            </div>
            <div>
                <h1 className = "text-white font-normal mt-[40px] text-[20px] leading-[30px] tracking-[0.2px] justify-self-center text-center text-wrap w-[539px] h-[60]">We know how large objects will act, but things on a 
                small scale just do not act that way.</h1>
            </div>
            <div className = "justify-self-center mt-[40px] items-center flex gap-[10px] ">
                <button className = "bg-[#23A6F0] w-[193px] h-[52px] rounded-[5px] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px]">Get Quote Now</button>
                <button className = "text-[#23A6F0] font-bold w-[162px] h-[52px] rounded-[5px] border-[1px] border-[#23A6F0]">Learn More</button>
            </div>
        </main>
    )
}