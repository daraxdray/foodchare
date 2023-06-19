import { Layout, theme } from 'antd';
import ShopLayout from "@/components/Layouts/ShopLayout";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import OrderListComponent from "@/components/Component8/OrderListComponent";
export default function Shop() {
  const { Content } = Layout;

  return (
    <>
     <ShopLayout children={(
      <>
       
        <OrderListComponent/>
      </>
     )} />
    
    
    </>
  );
}
