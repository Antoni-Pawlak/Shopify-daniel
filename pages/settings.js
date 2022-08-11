import { Box, Button, Grid, TextField } from "@mui/material";
import PaymentMode from "../components/payment-mode";
import PaymentForm from "./payment-form";

const Settings = () => {
  return (
    <div className="flexbox_row">
      <div style={{ flex: 1 }}>
        <div className="flexbox_row">
          <Box
            className="margin_right_sm"
            sx={{
              width: 100,
              height: 100,
              backgroundColor: "#A9A9A9",
            }}
            style={{ borderRadius: "0.5rem" }}
          />
          <div className="flexbox_column fb_row_justify_center">
            <div className="font_weight_600">Select you company logo</div>
            <Button className="margin_top_small theme_bg" variant="contained">
              <input hidden accept="image/*" multiple type="file" />
              Browse
            </Button>
          </div>
        </div>
        <Grid
          className="margin_top_med"
          container
          direction={"column"}
          spacing={5}
        >
          <Grid item>
            <TextField label="First Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Last Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Address" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </div>
      <div>
        <PaymentMode />
      </div>
    </div>
  );
};

export default Settings;
