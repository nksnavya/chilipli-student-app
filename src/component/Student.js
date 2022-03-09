import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import userList from "./studentList.json";
import AddStudent from "./AddStudent";
import ProgressReport from "./ProgressReport";

function Student(props) {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    getStudentList();
  }, []);


  const getStudentList = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log('student list from API', data);
        setStudents(userList);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error(error.message);
      })
  }

  const addStudent = (newStudent) => {
    setLoading(true);
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newStudent),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedStudents = [...students, newStudent];
        setStudents(updatedStudents);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error(error.message);
      });
  };

  return (
    <div>
      <Typography variant="h4" component="h5" sx={{ backgrond: 'primary', textAlign: "left", m: 3 }}>
        Chilipli Dashboard
      </Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {loading ? <CircularProgress /> :
            <>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 2,
                pl: 3
              }}>
                <Typography variant="h5" component="span">
                  Student Details
                </Typography>
                <Button variant="contained" onClick={() => setShowModal(true)}>
                  Add Student
                </Button>
              </Box>
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {students.map((student) => (
                  <ListItem key={student.name}>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{ display: "inline" }}
                        component="h6"
                        variant="h6"
                        color="text.primary"
                      >
                        {student.name}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Age: {student.age}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Phone: {student.phone}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Grade: {student.grade}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </>}
        </Grid>
        <Grid item xs={8}>
          <ProgressReport />
        </Grid>
      </Grid>
      <AddStudent open={showModal} onClose={() => setShowModal(false)} onSubmit={addStudent} />
    </div>
  );
}

export default Student;
