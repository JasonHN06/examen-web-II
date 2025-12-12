import { useEffect, useState } from "react";
import axios from "axios";
import type { Employee } from "../types/Employee";

const API_URL =
  "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const fetchEmployees = async () => {
    const res = await axios.get<Employee[]>(API_URL);
    setEmployees(res.data);
  };

  const addEmployee = async (employee: Employee) => {
    const res = await axios.post<Employee>(API_URL, employee);
    setEmployees([...employees, res.data]);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, addEmployee };
};
