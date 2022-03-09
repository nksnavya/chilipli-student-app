import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AddStudent({ open, onClose, onSubmit }) {
  const initialValues = {
    name: "",
    age: "",
    phone: "",
    grade: "",
  };

  const [inputs, setInputs] = React.useState(initialValues);
  const [error, setError] = React.useState({});

  const handleInputChange = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    let formErros = {};
    let isError = false;
    for (const key in inputs) {
      if (inputs[key] === "") {
        formErros = { ...formErros, [key]: true };
        isError = true;
      } else if (key === 'phone') {
        if (inputs[key].length < 10 || isNaN(inputs[key])) {
          formErros = { ...formErros, [key]: true };
          isError = true;
        }
      } else if (key === 'age' && isNaN(inputs[key])) {
        formErros = { ...formErros, [key]: true };
        isError = true;
      }
    }
    // don't submit the form if error
    if (isError) {
      setError(formErros);
      return;
    }
    onSubmit(inputs);
    handleClose();
  };

  const handleClose = () => {
    setError({});
    setInputs(initialValues);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Student</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Enter student details to add new student
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Student Name"
          type="text"
          fullWidth
          error={error.name}
          helperText="Invalid student name"
          required
          onChange={handleInputChange}
          value={inputs.name}
          variant="outlined"
        />
        <TextField
          margin="dense"
          name="age"
          label="Student Age"
          type="text"
          fullWidth
          inputProps={{ maxLength: 2 }}
          error={error.age}
          helperText="Invalid student age"
          required
          onChange={handleInputChange}
          value={inputs.age}
          variant="outlined"
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone Number"
          type="text"
          inputProps={{ maxLength: 10 }}
          fullWidth
          required
          helperText="Invalid phone number"
          error={error.phone}
          onChange={handleInputChange}
          value={inputs.phone}
          variant="outlined"
        />
        <TextField
          margin="dense"
          name="grade"
          label="Student Grade"
          type="text"
          fullWidth
          required
          helperText="Invalid grade"
          error={error.grade}
          onChange={handleInputChange}
          value={inputs.grade}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Add Student
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default AddStudent;
