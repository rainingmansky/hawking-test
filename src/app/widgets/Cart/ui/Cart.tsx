"use client";

import CartIcon from "@/app/shared/CartIcon/ui/CartIcon";
import { useEffect, useState } from "react";
import { useGetProducts } from "../api/hooks/useGetProducts";
import { useGetSummary } from "../api/hooks/useGetSummary";

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products } = useGetProducts();
  const {summary} = useGetSummary();
  
  const onToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button className="flex gap-x-1 items-center" onClick={onToggleCart}>
        <CartIcon width={17} color="#777777" />
        Cart
        <span className="rounded-3xl text-white bg-secondary-color text-sm px-2 ">
            {summary?.TotalProducts}
        </span>
      </button>
      {isCartOpen && (
        <div className="absolute top-20 right-0 rounded-md p-5 bg-white">
          <section className="border-b-1 flex justify-between border-b pb-3">
            <div className="flex gap-x-2 items-center">
              <CartIcon width={20} color="#777777" />
              <span className="rounded-3xl text-white bg-secondary-color text-sm px-2 ">
                {summary?.TotalProducts}
              </span>
            </div>
            <span>
              Total: <span className="text-secondary-color">{summary?.Total}</span>
            </span>
          </section>
          <section className="pt-4">
            <table>

            </table>
          </section>
        </div>
      )}
    </div>
  );
};

const CartItem = () => {
  return (
    <tr>
      <td className="border">1</td>
      <td className="border">1</td>
    </tr>
  );
};
