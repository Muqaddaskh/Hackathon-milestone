"use client";

import Image from "next/image";
import React from "react";
import topLogo from "../public/favicon.svg";
import logo from "../public/logo.svg";
import wishlistIcon from "../public/wishlist.svg";
import cartIcon from "../public/cart.svg";
import searchIcon from "../public/search.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className="w-full h-9 bg-[#F5F5F5] flex justify-between items-center px-12">
        {/* Logo */}
        <Image className="ml-4" src={topLogo} alt="Top Logo" />

        {/* Skip Button */}
        <button className="bg-white text-[13px] py-1 px-3 border border-gray-300 rounded hover:bg-gray-100">
          Skip to main content
        </button>

        {/* Top Navigation */}
        <ul className="flex space-x-6 text-[11px] font-medium text-gray-700">
          <li>
            <Link href="#"  style={{padding:"4px"}}>Find a Store</Link>
          </li>
          <li>
            <Link href="#" style={{padding:"4px"}}>Help</Link>
          </li>
          <li>
            <Link href="/joinus" style={{padding:"4px"}}>Join Us</Link>
          </li>
          <li>
            <Link href="/login" style={{padding:"4px"}}>Login</Link>
          </li>
        </ul>
      </div>

      {/* Main Header */}
      <div className="w-full h-16 bg-white flex justify-between items-center px-12">
        {/* Main Logo */}
        <Image src={logo} alt="Nike Logo" className="h-8" />

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-800 font-medium">
          <li>
            <Link href="#" style={{padding:"4px"}}>New & Featured</Link>
          </li>
          <li>
            <Link href="/cards" style={{padding:"4px"}}>Men</Link>
          </li>
          <li>
            <Link href="#" style={{padding:"4px"}}>Women</Link>
          </li>
          <li>
            <Link href="#" style={{padding:"4px"}}>Kids</Link>
          </li>
          <li>
            <Link href="#" style={{padding:"4px"}}>Sale</Link>
          </li>
          <li>
            <Link href="#" style={{padding:"4px"}}>SNKRS</Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Box */}
          <div className="relative w-48">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 border rounded-full bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Image
              src={searchIcon}
              alt="Search Icon"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="flex space-x-4">
            <Image src={wishlistIcon} alt="Wishlist Icon" className="w-6 h-6 cursor-pointer" />
            <Image src={cartIcon} alt="Cart Icon" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <div className="flex flex-col justify-center items-center mt-6 text-center">
        <h3 className="font-extrabold text-lg">Hello Nike App</h3>
        <p className="text-sm text-gray-600">
          Download the app to access everything Nike. Get Your Great.
        </p>
      </div>
    </div>
  );
}
