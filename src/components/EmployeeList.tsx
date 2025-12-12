import type { Employee } from "../types/Employee";

interface Props {
    employees: Employee[];
}

export const EmployeeList = ({ employees }: Props) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Listado de Empleados</h2>
      <ul className="space-y-2">
        {employees.map((emp) => (
          <li key={emp.id} className="p-4 border rounded bg-gray-50">
            <p><span className="font-semibold text-md text-gray-800">Nombre:</span> {emp.nombre}</p>
            <p><span className="font-semibold text-md text-gray-800">DNI:</span> {emp.dni}</p>
            <p><span className="font-semibold text-md text-gray-800">Dirección:</span> {emp.direccion}</p>
            <p><span className="font-semibold text-md text-gray-800">Email:</span> {emp.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
