import Image from "next/image"

const CartModal = () => {
  const cartItems = true

  return (
    <div className="w-max absolute p-4 rounded-md flex flex-col gap-6 bg-white shadow top-12 right-0 z-20">
      {!cartItems ? (
        "The cart is empty"
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/30435434/pexels-photo-30435434.jpeg"
                }
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold w-36 truncate">
                      Product Name is very long long long
                    </h3>
                    <div className="p-1 rounded-sm bg-gray-50">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500 ">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="cursor-pointer text-blue-500">remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/30435434/pexels-photo-30435434.jpeg"
                }
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold w-36 truncate">
                      Product Name
                    </h3>
                    <div className="p-1 rounded-sm bg-gray-50">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500 ">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="cursor-pointer text-blue-500">remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div>
            {/* Total Value */}
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className=" text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxs calculated at checkout.
            </p>
            {/* Bottoms */}
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 bg-black text-white">
                Check out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartModal
