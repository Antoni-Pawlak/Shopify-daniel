import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import PaymentForm from "./payment-form";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(feature, basic, business, enterprise) {
  return { feature, basic, business, enterprise };
}

const rows = [
  createData("Manual Recommendations", true, true, true),
  createData("AI Based Recommendations", false, true, true),
  createData(
    "No of Website Visits",
    false,
    "< 100,000 Monthly",
    "> 100,000 Monthly"
  ),
  createData("30-day free trial", false, true, true),
];

const ShowCustomIcon = ({ value }) => {
  return value === true ? (
    <CheckCircleOutlineIcon className="theme_color" />
  ) : value === false ? (
    <CloseIcon />
  ) : (
    <Button variant="outlined">{value}</Button>
  );
};

const Plans = () => {
  const [isFormScreenActive, setFormScreenActive] = React.useState(false);
  const PlanHeader = ({
    planType,
    desc,
    amount,
    categories,
    selected,
    buttonText,
  }) => {
    return (
      <div className="text_center">
        <div className="card_title padding_small">{planType}</div>
        <div className="gray_text">{desc}</div>
        <div className="amt_title">{amount}</div>
        <div className="gray_text margin_bottom_sm">{categories}</div>
        <Button
          className="theme_bg margin_left_small"
          variant="contained"
          size="small"
          disabled={selected}
          onClick={() => setFormScreenActive(true)}
        >
          {buttonText}
        </Button>
      </div>
    );
  };
  if (isFormScreenActive) {
    return <PaymentForm />;
  } else
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <b>Features</b>
              </StyledTableCell>
              <StyledTableCell>
                <PlanHeader
                  planType="Basic Plan"
                  desc="Best for personal use"
                  buttonText="Upgrade"
                  selected={true}
                  categories="forever"
                  amount="Free"
                />
              </StyledTableCell>
              <StyledTableCell>
                <PlanHeader
                  planType="Business Plan"
                  desc="Best for small business"
                  buttonText="Popular"
                  selected={false}
                  categories="/team/month"
                  amount="$74.99"
                />
              </StyledTableCell>
              <StyledTableCell>
                <PlanHeader
                  planType="Enterprise Plan"
                  desc="Best for large enterprise"
                  buttonText="Reach out to us"
                  selected={false}
                  categories="/team/month"
                  amount="$"
                />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.feature}>
                <StyledTableCell component="th" scope="row">
                  {row.feature}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ShowCustomIcon value={row.basic} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ShowCustomIcon value={row.business} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ShowCustomIcon value={row.enterprise} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Plans;
