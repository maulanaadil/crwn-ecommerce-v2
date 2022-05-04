import { PageTransition } from "@Animation";
import Checkout from "@Modules/checkout";

const CheckoutPage = () => {
  return (
    <PageTransition>
      <Checkout />
    </PageTransition>
  );
};

export default CheckoutPage;
