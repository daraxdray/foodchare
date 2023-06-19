import { Layout, theme } from 'antd';
import ShopLayout from "@/components/Layouts/ShopLayout";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import Component8 from "@/components/Component8/Component8";
export default function Shop() {
  const { Content } = Layout;

  return (
    <>
     <ShopLayout children={(
      <>
       
        <Component8/>
      </>
     )} />
    
    
    </>
  );
}
