import { useState } from "react";
import type { Employee } from "../types/Employee";
import toast from "react-hot-toast";

interface Props {
  onAdd: (employee: Employee) => void;
}

export const EmployeeForm = ({ onAdd }: Props) => {
  const [form, setForm] = useState<Employee>({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const validate = () => {
    if (!form.nombre || !form.dni || !form.direccion || !form.email) {
      toast.error("Todos los campos son obligatorios");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Formato de email inválido");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd(form);
    toast.success("Empleado agregado correctamente");
    setForm({ nombre: "", dni: "", direccion: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-sm hover:shadow-md rounded space-y-4"
    >
      <h2 className="text-lg font-semibold">Agregar Empleado</h2>
      <label className="text-sm font-medium text-gray-500">Nombre</label>
      <input
        type="text"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        className="w-full p-2 border rounded hover:bg-gray-100/50"
      />
      <label className="text-sm font-medium text-gray-500">DNI</label>
      <input
        type="text"
        value={form.dni}
        onChange={(e) => setForm({ ...form, dni: e.target.value })}
        className="w-full p-2 border rounded hover:bg-gray-100/50"
      />
      <label className="text-sm font-medium text-gray-500">Dirección</label>
      <input
        type="text"
        value={form.direccion}
        onChange={(e) => setForm({ ...form, direccion: e.target.value })}
        className="w-full p-2 border rounded hover:bg-gray-100/50"
      />
      <label className="text-sm font-medium text-gray-500">Email</label>
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border rounded hover:bg-gray-100/50"
      />
      <button
        type="submit"
        className="font-semibold bg-green-400 hover:bg-green-500 hover:invert cursor-pointer text-white px-4 py-2 rounded
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        Guardar
      </button>
    </form>
  );
};
