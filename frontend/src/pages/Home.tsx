import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  addPersonPhone as addPersonPhoneService,
  updatePersonPhone as updatePersonPhoneService,
  deletePersonPhone as deletePersonPhoneService,
  getPersonPhone,
} from "../services/PersonPhoneService";
import ItemList from "../components/ItemList";
import PersonPhoneForm from "../components/ItemForm";
import { showToastSuccess, showToastError } from "../utils/Toastify";
import { ToastContainer } from "react-toastify";

interface PersonPhone {
  bussinessentity_id: number;
  phonenumbertype_id: number;
  phonenumber: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<PersonPhone[]>([]);
  const [selectedPersonPhone, setSelectedPersonPhone] =
    useState<PersonPhone | null>(null);

  useEffect(() => {
    fetchPersonPhone();
  }, []);

  const fetchPersonPhone = async () => {
    try {
      const response = await getPersonPhone();
      setItems(response);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddPersonPhone = async (item: PersonPhone) => {
    try {
      await addPersonPhoneService(item);
      showToastSuccess("PersonPhone adicionado com sucesso.");
      fetchPersonPhone();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const messageError =
          error.response?.data?.mensagem || "An unexpected error occurred";
        showToastError(messageError);
        console.error("Error adding person phone:", error);
      } else {
        showToastError("An unexpected error occurred");
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleUpdatePersonPhone = async (
    item: PersonPhone,
    phonenumberNovo: string
  ) => {
    if (!selectedPersonPhone) return;

    try {
      await updatePersonPhoneService(
        item.bussinessentity_id,
        item.phonenumbertype_id,
        item.phonenumber,
        {
          phonenumberNovo,
        }
      );
      showToastSuccess("PersonPhone editado com sucesso.");
      fetchPersonPhone();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const messageError =
          error.response?.data?.mensagem || "An unexpected error occurred";
        showToastError(messageError);
        console.error("Error updating person phone:", error);
      } else {
        showToastError("An unexpected error occurred");
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleDeletePersonPhone = async (item: PersonPhone) => {
    try {
      await deletePersonPhoneService(
        item.bussinessentity_id,
        item.phonenumbertype_id,
        item.phonenumber
      );
      showToastSuccess("PersonPhone deletado com sucesso.");
      fetchPersonPhone();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const messageError =
          error.response?.data?.mensagem || "An unexpected error occurred";
        showToastError(messageError);
        console.error("Error deleting person phone:", error);
      } else {
        showToastError("An unexpected error occurred");
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-slate-800 text-center p-4">
        Página de CRUD do PersonPhone
      </h1>
      <PersonPhoneForm
        selectedPersonPhone={selectedPersonPhone}
        onAddPersonPhone={handleAddPersonPhone}
        onUpdatePersonPhone={handleUpdatePersonPhone}
        onClear={() => setSelectedPersonPhone(null)}
      />
      <ItemList
        items={items}
        onEdit={setSelectedPersonPhone}
        onDelete={(item) => handleDeletePersonPhone(item)}
      />
      <ToastContainer />
    </div>
  );
};

export default Home;
