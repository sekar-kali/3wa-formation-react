import { useCartProvider } from '../../context/CartContext';
import Card from './Card';
import TotalPrice from './TotalPrice';

export default function DisplayCarts() {
  const value = useCartProvider();

  return (
    <div className="flex items-center gap-10">
      {value.cartUser.map((item, index) => (
        <Card
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          index={index}
        />
      ))}

      <TotalPrice />
    </div>
  );
}
