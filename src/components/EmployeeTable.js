import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  CircularProgress,
  Alert,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import api from "../api/axiosInstance";

// Yup schema to validate each employee record
const employeeSchema = Yup.object().shape({
  id: Yup.number().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().nullable(),
  department: Yup.string().nullable(),
});

const EmployeeTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // flag to avoid state update on unmounted component

    const fetchEmployees = async () => {
      try {
        const { data } = await api.get("/employees");

        // Validate and filter the received data
        const validRows = data.filter((item) => {
          try {
            employeeSchema.validateSync(item);
            return true;
          } catch {
            return false; // skip invalid rows
          }
        });

        if (isMounted) setRows(validRows);
      } catch (err) {
        if (isMounted) setError(err.message || "Failed to fetch data");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchEmployees();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return (
      <Box textAlign="center" my={4}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Alert severity="error" sx={{ my: 2 }}>
        {error}
      </Alert>
    );

  if (!rows.length)
    return (
      <Alert severity="info" sx={{ my: 2 }}>
        No employee data available.
      </Alert>
    );

  return (
    <Paper sx={{ width: "100%", overflowX: "auto", my: 4 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((emp) => (
            <TableRow key={emp.id} hover>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.firstName}</TableCell>
              <TableCell>{emp.lastName}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default EmployeeTable;