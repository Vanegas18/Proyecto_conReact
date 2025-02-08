import { useState } from "react";
import { Nav } from "./Nav";
import { ListProducts } from ".";

export const MainLanding = () => {
  const [selectedCategory, setSelectCategory] = useState(null);
  return (
    <div>
      <Nav onCategorySelect={setSelectCategory} />
      <ListProducts selectedCategory={selectedCategory} />
    </div>
  );
};
