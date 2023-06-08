import cls from "./users-table.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UsersTableProps {}

const UsersTable: React.FC<UsersTableProps> = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("https://bugbounty-production.up.railway.app/api/admin/researchers")
      .then((res) => setCompany(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={cls["wrapper"]}>
      <div className={cls["companies-table_wrapper"]}>
        <div className={cls["table-header"]}>
          <h1 className={cls["table-h1"]}>Users</h1>
          <div className={cls["search-companies"]}>
            <form>
              <input type="text" placeholder="Search Companies here" />
            </form>
            <div className={cls["search-icon"]}>
              <SearchOutlined />
            </div>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#fff", fontSize: "16px" }}>
                Name
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontSize: "16px" }}
                align="right">
                Description
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontSize: "16px" }}
                align="right">
                UserName
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {company.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}>
                <TableCell
                  style={{ color: "#fff", fontSize: "16px" }}
                  component="th"
                  scope="row">
                  {row.name}
                </TableCell>
                <TableCell
                  style={{ color: "#fff", fontSize: "16px" }}
                  align="right">
                  {row.description}
                </TableCell>
                <TableCell
                  style={{ color: "#fff", fontSize: "16px" }}
                  align="right">
                  {row?.user?.username}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersTable;
