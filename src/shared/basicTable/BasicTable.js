import {
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch } from "react-redux";
import { editData, removeData } from "../../slices/data/dataSlice";

const Heading = ["Name", "Role", "City", "Country", "Action"];

const BasicTable = ({ data }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(removeData(id));
  };

  const editBtnHandler = () => {
    dispatch(
      editData({
        id: 3,
        name: "shaktiman",
        role: "javascript developer",
        city: "orisa",
        country: "india",
      })
    );
  };

  return (
    <TableContainer
      sx={{
        border: "2px solid yellow",
      }}
    >
      <TableHead>
        <TableRow>
          {Heading.map((item, index) => (
            <TableCell key={index}>{item}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.country}</TableCell>
            <TableCell>
              <EditIcon onClick={() => editBtnHandler()} />
              <DeleteIcon onClick={() => deleteHandler(item.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default BasicTable;
