import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, TablePagination } from "@mui/material";
import { useState } from "react";
import { GetData } from "@/app/api/aws_get_data";

type Column = {
  id: "id" | "title";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
};

const MDList = ({
  get_result,
  ClickListFunc,
}: {
  get_result: GetData[];
  ClickListFunc: (id: string, title: string) => void;
}) => {
  //====
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = get_result;
  //페이지를 변경할 때 사용하는 func
  const HandleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  //====
  //페이지 당 보여주는 수를 변경할 때
  const HandleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //====
  //헤드를 위한 변수
  const columns: Column[] = [
    { id: "id", label: "id", minWidth: 100 },
    { id: "title", label: "Title", minWidth: 500 },
  ];
  //====

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Box onClick={() => ClickListFunc(row["id"], row["title"])}>{value}</Box>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* 페이지네이션 부분 */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={HandleChangePage}
        onRowsPerPageChange={HandleChangeRowsPerPage}
      />
    </>
  );
};

export default MDList;

//style code
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
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
