import React from 'react';
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
                        <Link to={`1`}><span className='hover:text-green-700 font-bold font-menu text-gray-500'>Introduce</span></Link>
                        <Link to={`2`}><span className='hover:text-green-700 font-bold font-menu text-gray-500'>Product</span></Link>
                        <Link to={`3`}><span className='hover:text-green-700 font-bold font-menu text-gray-500'>Blog</span></Link>
                        <Link to={`4`}><span className='hover:text-green-700 font-bold font-menu text-gray-500'>Contact  </span></Link>
                        <Link to={`5`}><span className='hover:text-green-700 font-bold font-menu text-gray-500'>Image</span></Link>
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
            <footer className='mt-10'>
                <hr />
                <div className="container">
                    <div>TRANG CHIA SẺ TÀI LIỆU HỌC LẬP TRÌNH TRỰC TUYẾN MIỄN PHÍ</div>
                    <div><span>:</span><span></span></div>
                    <div>Chúng tôi chuyên cung cấp các bài viết thuộc lĩnh vực lập trình web, tài liệu hướng dẫn học HTML, CSS, Javascript, jQuery, MySQL, PHP.</div>
                    <div>
                        <div>©2016 Bản quyền thuộc về <u>webcoban.vn</u></div>
                        <div>
                            <Link to={"https://www.dmca.com/Protection/Status.aspx?ID=a9ed0b5b-9ca8-4296-9ea8-7a325ebb0c78&amp;refurl=https://webcoban.vn/html/the-footer-trong-html.html"} title="DMCA.com Protection Status" className="dmca-badge fa fa-rss fa-lg" target="_blank" />

                            {/* <img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-06.png?ID=a9ed0b5b-9ca8-4296-9ea8-7a325ebb0c78" alt="DMCA.com Protection Status"></a> */}
                            <img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-06.png?ID=a9ed0b5b-9ca8-4296-9ea8-7a325ebb0c78" alt="" />
                            <script type="text/javascript" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-6KG3TVGLY7&amp;l=dataLayer&amp;cx=c"></script><script type="text/javascript" src="https://cse.google.com/cse.js?cx=009719991472361915522:mv0hqzomq50"></script><script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
                            <i className="fa fa-twitter fa-lg"></i>
                            <a href="https://www.youtube.com/channel/UCDGVJ64_Uaqlqh2tA2JR-Gw" target="_blank" rel="nofollow"><i className="fa fa-youtube fa-lg"></i></a>
                            <i className="fa fa-google-plus fa-lg"></i>
                            <a href="https://www.facebook.com/305673666495263" target="_blank" rel="nofollow"><i className="fa fa-facebook fa-lg"></i></a>
                            <i className="fa fa-bullseye fa-lg"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
