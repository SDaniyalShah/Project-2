export default function Navbar() {
    return(
        <main className = "font-Montserrat text-white justify-center w-screen h-[91px] flex items-center bg-[#252B42] ">
            <div>
                 <h1 className = "text-2xl tracking-[0.1px] font-bold "> BrandName </h1>
            </div>

            <div className = "font-bold text-[14px] ml-[74px] leading-[24px] tracking-[0.2px]">
                <button className = "flex gap-[21px]">
                    <p>Home</p>
                    <p>Product</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </button>
                


            </div>
            <div className = " font-bold tracking-[0.2px] pl-[351px] gap-[45px] leading-[22px] text-[14px] flex">
            <button>Login</button>
            <button className = "bg-[#23A6F0] rounded-[5px] w-[110px] h-[52px]">JOIN US</button>
            </div>

        </main>
    )
}