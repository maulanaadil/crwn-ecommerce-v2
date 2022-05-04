import { useParams } from "react-router-dom";

import Category from "@Modules/category";
import { CategoryRouteParams } from "@Modules/category/types";
import { PageTransition } from "@Animation";

const CategoryPage = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  return (
    <>
      <PageTransition>
        <Category category={category} />
      </PageTransition>
    </>
  );
};

export default CategoryPage;
