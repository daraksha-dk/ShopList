import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "./Form.scss";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    shopname: "",
    area: "",
    category: "",
    opening_date: "",
    closing_date: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData({
        ...post,
        opening_date: new Date(post.opening_date),
        closing_date: new Date(post.closing_date),
      });
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      shopname: "",
      area: "",
      category: "",
      opening_date: "",
      closing_date: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };

  const areas = [
    { value: "thane", label: "Thane" },
    { value: "pune", label: "Pune" },
    { value: "mumbai_suburban", label: "Mumbai Suburban" },
    { value: "nashik", label: "Nashik" },
    { value: "nagpur", label: "Nagpur" },
    { value: "ahmednagar", label: "Ahmednagar" },
    { value: "solapur", label: "Solapur" },
  ];

  const categories = [
    { value: "grocery", label: "Grocery" },
    { value: "butcher", label: "Butcher" },
    { value: "baker", label: "Baker" },
    { value: "chemist", label: "Chemist" },
    { value: "stationery shop", label: "Stationery shop" },
  ];

  const onSelectChange = (name, e) => {
    setPostData({ ...postData, [name]: e.target.value });
  };

  const onDateChange = (name, val) => {
    setPostData({ ...postData, [name]: val });
  };

  return (
    <Paper className="form" onSubmit={handleSubmit}>
      <form className="form_container">
        <Typography variant="h6">Creating a Shop List</Typography>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Shop Name</InputLabel>
          <Input
            placeholder="shopname"
            value={postData.shopname}
            onChange={(e) =>
              setPostData({ ...postData, shopname: e.target.value })
            }
          />
        </FormControl>
        <hr />
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Area</InputLabel>
          <Select
            onChange={(e) => onSelectChange("area", e)}
            input={<OutlinedInput label="Area" />}
            value={postData.area}
          >
            {areas.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <hr />
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Category</InputLabel>
          <Select
            onChange={(e) => onSelectChange("category", e)}
            input={<OutlinedInput label="category" />}
            value={postData.category}
          >
            {categories.map(({ value, label }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <hr />
        <h3>Opening Date</h3>
        <DatePicker
          selected={postData.opening_date}
          onChange={(e) => onDateChange("opening_date", e)}
        />
        <hr />
        <h3>Closing Date</h3>
        <DatePicker
          selected={postData.closing_date}
          onChange={(e) => onDateChange("closing_date", e)}
        />
        <hr />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
