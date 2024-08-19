import React, { useState, useEffect } from "react";

interface PersonPhone {
  bussinessentity_id: number;
  phonenumbertype_id: number;
  phonenumber: string;
}

interface PersonPhoneFormProps {
  selectedPersonPhone: PersonPhone | null;
  onAddPersonPhone: (personPhone: PersonPhone) => void;
  onUpdatePersonPhone: (
    personPhone: PersonPhone,
    phonenumberNovo: string
  ) => void;
  onClear: () => void;
}

const PersonPhoneForm: React.FC<PersonPhoneFormProps> = ({
  selectedPersonPhone,
  onAddPersonPhone,
  onUpdatePersonPhone,
  onClear,
}) => {
  const [bussinessentityId, setBussinessentityId] = useState<number | "">("");
  const [phonenumberTypeId, setPhonenumberTypeId] = useState<number | "">("");
  const [phonenumber, setPhonenumber] = useState("");
  const [phonenumberNovo, setPhonenumberNovo] = useState("");

  useEffect(() => {
    if (selectedPersonPhone) {
      setBussinessentityId(selectedPersonPhone.bussinessentity_id);
      setPhonenumberTypeId(selectedPersonPhone.phonenumbertype_id);
      setPhonenumber(selectedPersonPhone.phonenumber);
      setPhonenumberNovo(selectedPersonPhone.phonenumber); // Configura o campo novo com o valor atual para edição
    } else {
      setBussinessentityId("");
      setPhonenumberTypeId("");
      setPhonenumber("");
      setPhonenumberNovo(""); // Limpa o campo novo para adição
    }
  }, [selectedPersonPhone]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPersonPhone) {
      onUpdatePersonPhone(selectedPersonPhone, phonenumberNovo);
    } else {
      onAddPersonPhone({
        bussinessentity_id: Number(bussinessentityId),
        phonenumbertype_id: Number(phonenumberTypeId),
        phonenumber: phonenumber, // Usa o número atual na adição
      });
    }
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full">
      <h2 className="text-xl font-bold mb-2">
        {selectedPersonPhone ? "Edit Person Phone" : "Add Person Phone"}
      </h2>
      <input
        type="number"
        value={bussinessentityId}
        readOnly
        className="border border-gray-300 rounded px-2 py-1 mr-2 bg-gray-100"
        placeholder="Bussiness Entity ID"
      />
      <input
        type="number"
        value={phonenumberTypeId}
        readOnly
        className="border border-gray-300 rounded px-2 py-1 mr-2 bg-gray-100"
        placeholder="Phone Number Type ID"
      />
      <input
        type="text"
        value={phonenumber}
        readOnly
        className="border border-gray-300 rounded px-2 py-1 mr-2 bg-gray-100"
        placeholder="Phone Number"
      />
      {selectedPersonPhone && (
        <input
          type="text"
          value={phonenumberNovo}
          onChange={(e) => setPhonenumberNovo(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
          placeholder="New Phone Number"
          required
        />
      )}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {selectedPersonPhone ? "Update" : "Add"}
      </button>
      {selectedPersonPhone && (
        <button
          type="button"
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default PersonPhoneForm;
