import { useSelector } from "react-redux";

import { selectCategoriesIsLoading } from "@Store/categories/categories.selector";

import CategoriesPreview from "@Modules/categories-preview";
import Spinner from "@Components/spinner";
import { PageTransition } from "@Animation";

const CategoriesPreviewPage = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <PageTransition>
          <CategoriesPreview />
        </PageTransition>
      )}
    </>
  );
};

export default CategoriesPreviewPage;
