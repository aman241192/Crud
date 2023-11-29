import { Box, Button } from "@mui/material";
import React from "react";
import BasicTable from "../../shared/basicTable/BasicTable";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../slices/data/dataSlice";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);

  console.log("data", data);

  const addBtnHandler = () => {
    dispatch(
      addData({
        id: 5,
        name: "chopra",
        role: "manvendra developer",
        city: "agra",
        country: "india",
      })
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        border: "2px solid red",
      }}
    >
      <Button onClick={addBtnHandler}>Add</Button>
      <BasicTable data={data} />
    </Box>
  );
};

export default Home;
