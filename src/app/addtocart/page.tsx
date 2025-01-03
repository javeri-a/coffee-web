

"use client";
import { useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, title: "Latte", price: 7, quantity: 1 },
    { id: 2, title: "Peru Coffee", price: 6, quantity: 1 },
    { id: 3, title: "Columbian Coffee", price: 12, quantity: 1 },
  ]);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const deliveryFee = 15;

  
  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

 
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

 
  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT20") {
      setDiscount(0.2); 
    } else if (promoCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

 
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <div className="bg-black">
    <div className="container mx-auto py-10 px-4 bg-black text-white rounded-xl p-3   ">
      <h1 className="text-3xl font-extrabold text-center mb-8">Your Cart</h1>

      
      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-6 bg-gray-900 border border-[#D3AD7F] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="px-3 py-1 bg-[#D3AD7F] text-white rounded-lg "
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <div className="mt-10 p-6 bg-gray-900 rounded-lg shadow-lg border border-[#D3AD7F]">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-[#D3AD7F]">
            <span>Discount:</span>
            <span>- ${discountAmount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery Fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </p>
          <p className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </p>
        </div>

     
        <div className="mt-6">
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={applyPromoCode}
            className="mt-4 w-full bg-[#D3AD7F] text-white px-4 py-2 rounded-lg  transition"
          >
            Apply Promo Code
          </button>
        </div>

       
        <button className="mt-6 w-full bg-[#D3AD7F] text-white px-4 py-2 rounded-lg transition">
          Go to Checkout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
