import { Card } from "@mui/material";
import EventIcon from "@mui/icons-material/EventOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditScoreIcon from "@mui/icons-material/CreditCardOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";

const Confirmation = () => {
  const Block = ({ title, value, children }) => {
    return (
      <div className="flexbox_row fb_row_space_between fb_row_center">
        <div className="flexbox_row fb_row_center padding_small">
          {children}
          <span className="padding_inline_small">{title}</span>
        </div>
        <div>{value}</div>
      </div>
    );
  };
  return (
    <div className="page_center">
      <div className="confirmation_title margin_bottom_sm inter">
        Thank you for your purchase
      </div>
      <div className="gray_text text_center inter">
        You will receive an confirmation letter through your email.
      </div>
      <img
        className="margin_inline_auto"
        height={200}
        src="https://user-images.githubusercontent.com/78612367/182245363-c4fd22fa-562e-4120-9ecc-7e12939cda5a.png"
      />
      <Card className="margin_top_med padding_med">
        <Block title="Date" value="27/04/2022">
          <EventIcon className="theme_color" />
        </Block>
        <Block title="Customer" value="John Miller">
          <PersonOutlineIcon className="theme_color" />
        </Block>
        <Block title="Payment Method" value="Visa">
          <CreditScoreIcon className="theme_color" />
        </Block>
        <Block title="Order Number" value="27042022">
          <ReceiptOutlined className="theme_color" />
        </Block>
        <Block title="Total" value="$273">
          <AttachMoneyIcon className="theme_color" />
        </Block>
      </Card>
    </div>
  );
};
export default Confirmation;
