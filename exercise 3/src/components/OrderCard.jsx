export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$ " + price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          style={{ backgroundColor: quantity === 0 ? "#bfbfbf" : undefined }}
          onClick={() => quantity > 0 && onQuantityChange(quantity - 1)}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div
          className="order-button"
          onClick={() => onQuantityChange(quantity + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
}