import React from "react";

const OrderReview: React.FC<{
  shippingInfo: any;
  paymentInfo: any;
  onNext: () => void;
}> = ({ shippingInfo, paymentInfo, onNext }) => {
  return (
    <div className="account-part confirm-part">
      <img
        src="../assets/images/gif/confirm.gif"
        alt="confirm"
        className="img-fluid account-img w-25"
      />
      <h3>Your order has been successfully placed</h3>
      <p>
        Sit and relax while your order is being worked on. It’ll take 5 min
        before you get it.
      </p>
      <div className="account-btn d-flex justify-content-center gap-2">
        <a className="btn theme-btn mt-0" href="/zomo/order/confirm-order">
          TRACK ORDER
        </a>
      </div>
    </div>
  );
};

export default OrderReview;
