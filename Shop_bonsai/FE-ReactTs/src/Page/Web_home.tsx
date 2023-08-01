import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPr } from '../api/api_products';
import { Link } from 'react-router-dom';

import { BsTelephoneInbound } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiLoop } from "react-icons/tfi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import {BsCartPlus} from "react-icons/bs";
import {RiMoneyDollarCircleLine} from "react-icons/ri"

const Web_home = () => {
    const dispatch = useDispatch();
    const { dataPr } = useSelector((item: any) => item.getDataPr);
    useEffect(() => {
        const fetchAPI = async () => {
            const { data } = await getAllPr();
            dispatch({ type: "fetchAPI", payload: data.data });     
        };
        fetchAPI();
    }, []);
    // add cart
    const AddCart=async (data:any)=>{
        alert(`add-cart -${data.name}`);
    }
    // buy now
    const BuyNow=async (data:any)=>{
        alert(`buy-now -${data.name}`)
    }

    return (
        <div className="">
            {/* background */}
            <div className="bg_website">
                <img className='w-[80vw] h-[60vh] mx-auto' src="https://www.japan-guide.com/g20/2097_01.jpg" alt="" />
            </div>
            {/* nav-sub */}
            <div className="mt-5 mb-10 flex flex-wrap justify-center">
                <div className="flex hover:bg-gray-100 space-x-5 justify-center w-[250px] m-3 h-[60px] bg-gray-200">
                    <p className='text-gray-700 my-auto scale-150'><BsTelephoneInbound /></p>
                    <div className="">
                        <p className='text-green-600'>ONLINE SUPPORT 24/7</p>
                        <p className='text-xs text-gray-500 hover:text-gray-700'><Link to={``}>096.155.6217</Link></p>
                    </div>
                </div>
                <div className="flex hover:bg-gray-100 space-x-5 justify-center w-[250px] m-3 h-[60px] bg-gray-200">
                    <p className='text-gray-700 my-auto scale-[2.1]'><CiDeliveryTruck /></p>
                    <div className="">
                        <p className='text-green-600'>DELIVERY</p>
                        <p className='text-xs text-gray-500 hover:text-gray-700'><Link to={``}>NATIONWIDE COD</Link></p>
                    </div>
                </div>
                <div className="flex hover:bg-gray-100 space-x-5 justify-center w-[250px] m-3 h-[60px] bg-gray-200">
                    <p className='text-gray-700 my-auto scale-150'><TfiLoop /></p>
                    <div className="">
                        <p className='text-green-600'>RETURN GOODS</p>
                        <p className='text-xs text-gray-500 hover:text-gray-700'><Link to={``}>IN 365 DAYS</Link></p>
                    </div>
                </div>
                <div className="flex hover:bg-gray-100 space-x-5 justify-center w-[250px] m-3 h-[60px] bg-gray-200">
                    <p className='text-gray-700 my-auto scale-150'><MdOutlineAdminPanelSettings /></p>
                    <div className="">
                        <p className='text-green-600'>GUARANTEE</p>
                        <p className='text-xs text-gray-500 hover:text-gray-700'><Link to={``}>LIFETIME WARRANTY</Link></p>
                    </div>
                </div>
                <div className="flex hover:bg-gray-100 space-x-5 justify-center w-[250px] m-3 h-[60px] bg-gray-200">
                    <p className='text-gray-700 my-auto scale-150'><BiPurchaseTag /></p>
                    <div className="">
                        <p className='text-green-600'>PURCHASE</p>
                        <p className='text-xs text-gray-500 hover:text-gray-700'><Link to={``}>SHOPPING GUIDE</Link></p>
                    </div>
                </div>
            </div>
            {/* show-products */}
            <div className='w-auto mx-auto'>
                <p className='ml-[10%] text-2xl text-teal-500'>Top outstanding and best-selling bonsai</p>
                <div className="flex flex-wrap justify-center">
                    {dataPr?.map((items: any) => (
                        <div className="relative w-[200px] h-[250px] bg-gray-100 m-5 rounded-md" key={items._id}>
                            <div className="img relative overflow-hidden rounded-t-md">
                                <Link to={``} className='image_bonsai'><img className='border hover:scale-150 duration-200 w-[200px] h-[200px] rounded-t-md ' src={items.image} alt="" /></Link>
                                <div className="buy_cart w-[65px] flex justify-around h-8 bg-white duration-200">
                                    <button onClick={()=>AddCart(items)} className='text-green-600 scale-125 active:scale-150'><BsCartPlus/></button>
                                    <div className="w-[1px] h-6 bg-gray-400"></div>
                                    <button onClick={()=>BuyNow(items)} className='text-green-600 scale-125 active:scale-150'><RiMoneyDollarCircleLine/></button>
                                </div>
                            </div>
                            <div className="content-products mt-[1px]">
                                <p className='text-lime-600 text-center'>{items.name}</p>
                                <div className="flex justify-between text-gray-600 text-xs">
                                    {items.discount?<p className='ml-1'><del>${items.price}</del> - <span className='text-red-500'> ${items.price-(items.price*(items.discount/100))}</span></p>:<p className='ml-1'>${items.price}</p>}
                                    <p className='mr-1'>{items.price}</p>
                                </div>
                            </div>
                            {items.discount?<img className='w-8 absolute top-0 -left-[28px]' src="../../image/discounts.png" alt="" />:""}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Web_home
