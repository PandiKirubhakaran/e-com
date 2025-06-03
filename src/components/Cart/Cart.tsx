"use client";

import { useCart } from "@/context/useCart";
import { Trash2, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Button from "../ui-common/Button";
import {
  BUTTON_LABELS,
  CartActionType,
  MessageLabels,
  UILable,
} from "@/constants/enums";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{UILable.YOUR_CART}</h1>

      {cart.length === 0 ? (
        <p>{MessageLabels.YOUR_CART_EMPTY}</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 items-center border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>

                  <div className="flex items-center mt-2 gap-2">
                    <Button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      variant="secondary"
                      ariaLabel="Decrease quantity"
                      className="p-1"
                      disabled={item.quantity === 1}
                    >
                      <Minus size={16} />
                    </Button>

                    <span>{item.quantity}</span>

                    <Button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      variant="secondary"
                      ariaLabel="Increase quantity"
                      className="p-1"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                  ariaLabel="Remove item"
                  className="p-2"
                >
                  <Trash2 size={20} />
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">
              {CartActionType.TOTAL} ${total.toFixed(2)}
            </p>

            <Button onClick={clearCart} variant="danger">
              {BUTTON_LABELS.Clear_Cart}
            </Button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
