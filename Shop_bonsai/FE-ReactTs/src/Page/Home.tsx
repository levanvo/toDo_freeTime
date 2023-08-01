import { Outlet, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { SlLogin } from "react-icons/sl";

const Home = () => {

    return (
        <div>
            <header className="header1 flex flex-wrap justify-around text-white items-center  ">
                <p>096-155-6217</p>
                <p>Contact with me or share this web for others .</p>
            </header>
            {/* =================== Nav */}
            <div className="header2 flex flex-wrap justify-center space-x-16 items-center  ">
                {/* logo */}
                <Link to={`/`}><img src="../../image/iabonsai-logo.png" alt="" className='h-20 w-56' /></Link>
                {/* search */}
                <form className='flex'>
                    <div className="">
                        <input type="text" title='enter product you interest !' className='w-[500px] outline-0 p-2 border ' placeholder=' ...' />
                    </div>
                    <button className='px-4 py-2 bg-gray-600 text-white' ><BsSearch /></button>
                </form>
                <div className="flex flex-wrap justify-between space-x-16 mr-4">
                    {/* menu */}
                    <div className="navigate flex space-x-7 flex-wrap justify-center">
                        <Link to={`1`}><span className='hover:text-green-700 font-medium font-menu text-gray-500'>Introduce</span></Link>
                        <Link to={`2`}><span className='hover:text-green-700 font-medium font-menu text-gray-500'>Product</span></Link>
                        <Link to={`3`}><span className='hover:text-green-700 font-medium font-menu text-gray-500'>Blog</span></Link>
                        <Link to={`4`}><span className='hover:text-green-700 font-medium font-menu text-gray-500'>Contact  </span></Link>
                        <Link to={`5`}><span className='hover:text-green-700 font-medium font-menu text-gray-500'>Image</span></Link>
                    </div>
                    <div className="flex space-x-8 justify-center">
                        {/* cart */}
                        <div className="relative">
                            <p className='cart_menu active:scale-110'><GiShoppingCart /></p>
                            <p className='absolute -top-[10px] left-[9px] px-1 rounded-full text-xs bg-orange-500 text-white'>41</p>
                        </div>
                        {/* login */}
                        <div className="">
                            <p className='login_menu active:scale-110'><SlLogin /></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* =================== Nav */}
            <main>
                <Outlet />
            </main>
            <hr />
            <footer className="flex justify-center flex-wrap space-x-20">
                <div className="w-[300px] mt-0">
                    <p className="text-xl text-center fontFooter text-green-600">WEBCAYCANH . CO., LTD</p>
                    <p className="text-sm mb-3">Office: No. 3, Hoang Loc Street, Area 17, Hai Duong City</p>
                    <p className="text-sm mb-3"> Representative: Nguyen Minh Huy</p>
                    <p className="text-sm mb-3">Tax code: 0801244382</p>
                    <p className="text-sm mb-3"> webcaycanhhot@gmail.com</p>
                    <p className="text-sm mb-3"> Reflect: 0966561589</p>
                </div>
                <div className="w-[300px] mt-0">
                    <p className="text-xl text-center fontFooter text-green-600">Wholesale and retail address</p>
                    <p className="ml-3 font-medium">At Facility 1</p>
                    <p className="text-sm mb-3"> No. 60 - Alley 235</p>
                    <p className="text-sm mb-3">Yen Hoa - Cau Giay District - Hanoi</p>
                    <p className="text-sm mb-3"> Tel: 0988 833 653</p>

                    <p className="ml-3 font-medium">At Facility 2</p>
                    <p className="text-sm mb-3"> No. 14 - Alley 12/13</p>
                    <p className="text-sm mb-3">Luong Khanh Thien - Tuong Mai - Hoang Mai - Hanoi</p>
                    <p className="text-sm mb-3"> Tel: 0353 326 266</p>
                </div>
                <div className="w-[300px] mt-0">
                    <p className="text-xl text-center fontFooter text-green-600">Policy</p>
                    <p className="text-sm mb-3"> 14 Days Warranty</p>
                    <p className="text-sm mb-3"> Lifetime care support</p>
                    <p className="text-sm mb-3"> Delivery</p>
                </div>
                <div className="w-[300px] mt-0">
                    <p className="text-xl text-center fontFooter text-green-600">GET THE LATEST PRODUCT INFORMATION</p>
                    <p className="text-xs">Please enter Email, we will send information and quote right away!</p>
                    <form action="" className="flex">
                        <input type="text" className="border outline-0 p-1" placeholder=" Enter your email"/>
                        <button className="p-1 bg-lime-500 text-white font-medium">Send</button>
                    </form>
                </div>
            </footer>
        </div>
    )
}

export default Home
