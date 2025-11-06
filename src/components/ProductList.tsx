import Image from "next/image"
import Link from "next/link"
import React from "react"

export const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* Product Item */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* Product Image */}
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/1884573/pexels-photo-1884573.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Product name and price */}
        <div className="flex justify-between">
          <div className="font-medium">Product Name</div>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* Product Image */}
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/1884573/pexels-photo-1884573.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Product name and price */}
        <div className="flex justify-between">
          <div className="font-medium">Product Name</div>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* Product Image */}
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/1884573/pexels-photo-1884573.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Product name and price */}
        <div className="flex justify-between">
          <div className="font-medium">Product Name</div>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* Product Image */}
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/1884573/pexels-photo-1884573.jpeg"
            }
            alt=""
            fill
            sizes="25vh"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Product name and price */}
        <div className="flex justify-between">
          <div className="font-medium">Product Name</div>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  )
}
