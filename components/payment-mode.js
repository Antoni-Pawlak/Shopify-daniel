import { Button } from "@mui/material";

const PaymentMode = () => {
  return (
    <div
      style={{ height: "100%" }}
      className="margin_left_small flexbox_column"
    >
      <div style={{ flex: 1 }}>
        <div className="font_weight_600 font_size_med">Payment Mode</div>
        <div className="flexbox_row fb_row_space_between margin_block_med">
          <Button variant="outlined" className="margin_right_sm">
            <img
              src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png"
              alt="PayPal"
              style={{ height: "4rem" }}
            />
          </Button>
          <Button variant="outlined" className="no_padding">
            <img
              style={{ height: "4rem" }}
              src="https://user-images.githubusercontent.com/100185149/183243871-a8c62710-e3ad-46f8-b37a-263a30384b3f.png"
            />
          </Button>
        </div>
        <Button variant="outlined" className="no_padding">
          <img
            style={{ height: "15.5rem" }}
            src="https://www.yourtechstory.com/wp-content/uploads/2020/11/need-to-know-how-to-change-the-upi-pin-on-phone-through-payment-apps-like-googlepay-phonepe-and-paytm-here-is-the-step-by-step-method-1280x720.jpg"
            alt="UPI"
          />
        </Button>
      </div>
      <div className="flexbox_row flex_row_end">
        <Button variant="contained">Save and Apply</Button>
      </div>
    </div>
  );
};

export default PaymentMode;
