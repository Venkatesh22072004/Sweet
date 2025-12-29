import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Mango Cake",
      price: 450,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop",
    },
    {
      id: "5",
      name: "Jaggery Brownie",
      price: 200,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100&h=100&fit=crop",
    },
  ]);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.05);
  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const total = subtotal + tax + deliveryCharge;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Your Cart</h1>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-wide">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold text-lg mb-4">
                          ₹{item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 border border-border rounded-lg w-fit">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Total and Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            Total
                          </p>
                          <p className="text-xl font-bold text-primary">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mt-8"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (5%)</span>
                      <span className="font-semibold">₹{tax}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Delivery Charge
                      </span>
                      <span className="font-semibold">
                        {deliveryCharge === 0 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          `₹${deliveryCharge}`
                        )}
                      </span>
                    </div>
                    {deliveryCharge === 0 && (
                      <p className="text-sm text-green-600 font-semibold">
                        ✓ Free delivery on orders above ₹500
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-bold text-primary">
                      ₹{total}
                    </span>
                  </div>

                  <Link
                    to="/checkout"
                    className="btn-primary w-full text-center block mb-3"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/products"
                    className="btn-outline w-full text-center block border-primary text-primary"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
              <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/products" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
