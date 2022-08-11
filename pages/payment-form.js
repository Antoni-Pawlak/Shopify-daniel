import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="font_size_lg font_weight_600 margin_bottom_sm">
        Billing and Payment
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid_3_column">
          <div className="row_span_1to3 flexbox_row">
            <ReceiptOutlined className="theme_color margin_right_sm font_size_lg" />
            <div>
              <div className="font_size_med font_weight_500">Billing Info</div>
              <div className="gray_text">decription</div>
            </div>
          </div>
          <div>
            <TextField
              {...register("First Name", { required: true })}
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("Last Name", { required: true })}
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("Email", { required: true })}
              label="Email"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("Phone Number", { required: true })}
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="Company Name"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="VAT/GST Number"
              variant="outlined"
              fullWidth
            />
          </div>
        </div>
        <div className="horizontal_ruler margin_block_large"></div>
        <div className="grid_3_column">
          <div className="row_span_1to3 flexbox_row">
            <HomeOutlinedIcon className="theme_color margin_right_sm font_size_lg" />
            <div>
              <div className="font_size_med font_weight_500">
                Billing Address
              </div>
              <div className="gray_text">decription</div>
            </div>
          </div>
          <div className="column_span_2to3">
            <TextField
              {...register("test", { required: true })}
              label="Address"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              select
              {...register("test", { required: true })}
              value=""
              label="Select City"
              onChange={() => console.log()}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField
              select
              {...register("test", { required: true })}
              value=""
              label="State/Province"
              onChange={() => console.log()}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="Zip/Postal code"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              value=""
              label="Country/Region"
              onChange={() => console.log()}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </div>
        </div>
        <div className="horizontal_ruler margin_block_large"></div>
        <div className="grid_3_column">
          <div className="row_span_1to5 flexbox_row">
            <CreditCardOutlined className="theme_color margin_right_sm font_size_lg" />
            <div>
              <div className="font_size_med font_weight_500">
                Payment Method
              </div>
              <div className="gray_text">decription</div>
            </div>
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="Name on card"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="Card Number"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              select
              value=""
              label="Expiration Date"
              onChange={() => console.log()}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="CVV"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="column_span_2to3">
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  onChange={() => console.log()}
                  name="jason"
                />
              }
              label="Use same address as billing info"
            />
          </div>
          <div className="column_span_2to3">
            <TextField
              {...register("test", { required: true })}
              label="Address"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              {...register("test", { required: true })}
              label="Zip/Postal code"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <TextField
              select
              {...register("test", { required: true })}
              value=""
              label="Country/Region"
              onChange={() => console.log()}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
