import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MouseOutlined from "@mui/icons-material/MouseOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PercentIcon from "@mui/icons-material/Percent";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PaidOutlined from "@mui/icons-material/PaidOutlined";
import { CustomChart } from "../components/chart";

function createData(item, units, price) {
  return { item, units, price };
}

const rows = [
  createData("Minim sunt", 1000, "$879"),
  createData("Commo Ipsum", 900, "$847"),
  createData("Adipisicing", 800, "$484"),
];

const DashBoard = () => {
  const CardBlock = ({ title, children, amount, change, isPositive }) => {
    return (
      <Card className="padding_small">
        <div className="card_title inter">{title}</div>
        <div className="flexbox_row">
          <div style={{ flex: 2 }}>
            <div className="amt_title epilogue">{amount}</div>
            <div style={{ color: isPositive ? "green" : "red" }}>
              <span className="vertical_align_center">
                {isPositive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </span>
              {change}
            </div>
          </div>
          <div style={{ flex: 0.5 }} className="fb_item_center">
            {children}
          </div>
        </div>
      </Card>
    );
  };

  const TableBlock = ({ rows }) => {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Items</TableCell>
              <TableCell>Total Units Sold</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.items}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.item}
                </TableCell>
                <TableCell>{row.units}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <div className="grid_4_column uppercase">
      <CardBlock
        title="Total Sales"
        amount="66,452"
        change="5.39%"
        isPositive={true}
      >
        <TrendingUpIcon className="enlarge_icon" />
      </CardBlock>
      <CardBlock
        title={
          <div>
            Sales by <span className="theme_color"> Recommendo</span>
          </div>
        }
        amount="42,502"
        change="0.65%"
        isPositive={true}
      >
        <PaidOutlined className="enlarge_icon" />
      </CardBlock>
      <CardBlock
        title="Total number of clicks"
        amount="56,201"
        change="2.39%"
        isPositive={true}
      >
        <MouseOutlined className="enlarge_icon" />
      </CardBlock>
      <CardBlock
        title="Added to Cart"
        amount="56,201"
        change="2.29%"
        isPositive={true}
      >
        <ShoppingCartOutlined className="enlarge_icon" />
      </CardBlock>
      <div style={{ gridColumn: "1/ span 3", gridRow: "2/span 2" }}>
        <CustomChart />
      </div>
      <div style={{ alignSelf: "center" }}>
        <CardBlock
          title="Purchased"
          amount="56,201"
          change="2.29%"
          isPositive={true}
        >
          <ShoppingBagOutlinedIcon className="enlarge_icon" />
        </CardBlock>
      </div>
      <div style={{ alignSelf: "center" }}>
        <CardBlock
          title="Conversion Rate"
          amount="56"
          change="2.29%"
          isPositive={true}
        >
          <PercentIcon className="enlarge_icon" />
        </CardBlock>
      </div>
      <div style={{ gridColumn: "1/span 3" }}>
        <div className="flexbox_row">
          <div className="margin_right_extra_lg flex_1">
            <Card>
              <h3 className="text_center inter text_underline uppercase">
                Top Performing Products
              </h3>
              <TableBlock rows={rows} />
            </Card>
          </div>
          <div className="flex_1">
            <Card>
              <h3 className="text_center inter text_underline uppercase">
                Least Performing Products
              </h3>
              <TableBlock rows={rows} />
            </Card>
          </div>
        </div>
      </div>
      <div>
        <Card className="padding_med">
          <h3 className="inter">Location - Top Places</h3>
          <ListItem>
            <Avatar
              alt="Sriom Chakrabarti"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
            />
            <ListItemText
              primary={
                <div className="margin_left_small flexbox_row fb_row_space_between">
                  <div> USA</div>
                  <div className="theme_color font_weight_500">40%</div>
                </div>
              }
            />
          </ListItem>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
