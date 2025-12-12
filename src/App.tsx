import { EmployeeForm } from "./components/EmployeeForm";
import { EmployeeList } from "./components/EmployeeList";
import { useEmployees } from "./hooks/useEmployees";
import { Toaster } from "react-hot-toast";

function App() {
  const { employees, addEmployee } = useEmployees();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700 animate-pulse">Gestión de Empleados</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
