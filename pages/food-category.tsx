import ProductCategoryTitle from "../components/Typography/ProductCategoryTitle";
import FoodCard from "../components/Cards/FoodCard";
import DivideY from "../components/Divider/DivideY";
import { Layout, theme } from 'antd';
import ShopLayout from "@/components/Layouts/ShopLayout";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
export default function Shop() {
  const { Content } = Layout;

  return (
    <>
     <ShopLayout children={(
      <>
       


        <ProductCategoryTitle
          title="Products near you"
        />



        <FoodCard />



        {/* Our Most  Delicious Meal Ends */}
        {/* Groceries To Your Door Starts */}
        <DivideY>
          <ProductCategoryTitle
            title="Healthy spot"
          />
          <FoodCard />

        </DivideY>
        {/* Groceries To Your Door Ends */}

        {/* BREAKFAST */}
        <DivideY>
          <ProductCategoryTitle
            title="Breakfasst & Brunch"
          />
          <FoodCard />
        </DivideY>
      
      </>
     )} />
    
    
    </>
  );
}
