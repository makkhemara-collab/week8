import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  { product: "Banana", price: 54.6, quantity: 3 },
  { product: "Computer", price: 100.5, quantity: 4 },
  { product: "Table", price: 1070, quantity: 3 },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const handleQuantityChange = (productName, newQuantity) => {
    const updatedOrders = orders.map((order) =>
      order.product === productName ? { ...order, quantity: newQuantity } : order
    );
    setOrders(updatedOrders);
  };

  const totalPrice = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(order.product, newQuantity)
            }
          />
        ))}
      </div>

      <CheckoutButton total={totalPrice.toFixed(2)} />
    </>
  );
}