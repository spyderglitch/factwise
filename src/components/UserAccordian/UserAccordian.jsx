import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./UserAccordian.scss";
import Dropdown from "../DropDown/Dropdown";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { TextField } from "@mui/material";
import { countryList } from "../../data/countryList";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const calculateAge = (dateString) => {
  const birthday = new Date(dateString);
  const ageDif = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const UserAccordian = ({ celeb }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(celeb.first + " " + celeb.last);
  const [age, setAge] = useState(calculateAge(celeb.dob));
  const [gender, setGender] = useState(celeb.gender);
  const [country, setCountry] = useState(celeb.country);
  const [desc, setDesc] = useState(celeb.description);
  const [editValues, setEditValues] = useState({name: '', age: 0, gender: '', country: '', descp: ''})

  useEffect(() => {}, [isEdit]);

  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push(i);
  }

  const genderOptions = ["Male", "Female"];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDropdownChange = (event) => {};

  const handleEditChange = (e) => {
    debugger
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value
    })
  }

  console.log(editValues);
  return (
    <div>
      <Accordion
        className="accordian"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="accordian-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img className="user-img" src={celeb.picture} alt="userIcon" />
          {isEdit && (
            <TextField
              defaultValue={name}
              id="outlined-basic"
              variant="outlined"
            />
          )}
          {!isEdit && (
            <Typography name='name' variant="h5" sx={{ width: "43%", flexShrink: 0 }} onChange={(e)=>{console.log(e.target.value)}}>
              {name}
            </Typography>
          )}
        </AccordionSummary>
        <AccordionDetails className="acc-deets">
          <div className="select-container">
            <div>
              <Typography variant="body2">Age</Typography>
              {isEdit && <Dropdown value={age} options={ageOptions} />}
              {!isEdit && (
                <Typography name='age' color="black" variant="caption">
                  {age}
                </Typography>
              )}
            </div>
            <div>
              <Typography variant="body2">Gender</Typography>
              {isEdit && <Dropdown value={gender} options={genderOptions} />}
              {!isEdit && (
                <Typography name='gender' color="black" variant="caption">
                  {gender}
                </Typography>
              )}
            </div>
            <div>
              <Typography variant="body2">Country</Typography>
              {isEdit && <Dropdown value={country} options={countryList} />}
              {!isEdit && (
                <Typography name='country' color="black" variant="caption">
                  {country}
                </Typography>
              )}
            </div>
          </div>
          <div className="description">
            <Typography variant="body2">Description</Typography>
            <Typography color="black" variant="caption">
              {desc}
            </Typography>
          </div>
          <div className="icons">
            {!isEdit && (
              <>
                <DeleteOutlineOutlinedIcon className="delete-icon" />
                <EditOutlinedIcon
                  className="edit-icon"
                  onClick={() => setIsEdit(!isEdit)}
                />
              </>
            )}
            {isEdit && <>
              <CancelOutlinedIcon className="delete-icon" />
              <CheckCircleOutlineOutlinedIcon className="edit-icon" />
            </>}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserAccordian;
