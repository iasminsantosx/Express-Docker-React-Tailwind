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
      // Set static values for editing
      setBussinessentityId(selectedPersonPhone.bussinessentity_id);
      setPhonenumberTypeId(selectedPersonPhone.phonenumbertype_id);
      setPhonenumber(selectedPersonPhone.phonenumber);
      setPhonenumberNovo(selectedPersonPhone.phonenumber); // Set the current phone number as default for editing
    } else {
      // Reset values for adding new
      setBussinessentityId("");
      setPhonenumberTypeId("");
      setPhonenumber("");
      setPhonenumberNovo(""); // Clear new phone number for adding
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
        phonenumber, // Use the current phone number for adding
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
        onChange={(e) => setBussinessentityId(Number(e.target.value))}
        className={`border border-gray-300 rounded px-2 py-1 mr-2 ${
          selectedPersonPhone ? "bg-gray-100" : ""
        }`}
        placeholder="Bussiness Entity ID"
        readOnly={!!selectedPersonPhone} // Make read-only if editing
        required={!selectedPersonPhone} // Required only if adding
      />
      <input
        type="number"
        value={phonenumberTypeId}
        onChange={(e) => setPhonenumberTypeId(Number(e.target.value))}
        className={`border border-gray-300 rounded px-2 py-1 mr-2 ${
          selectedPersonPhone ? "bg-gray-100" : ""
        }`}
        placeholder="Phone Number Type ID"
        readOnly={!!selectedPersonPhone} // Make read-only if editing
        required={!selectedPersonPhone} // Required only if adding
      />
      <input
        type="text"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        className={`border border-gray-300 rounded px-2 py-1 mr-2 ${
          selectedPersonPhone ? "bg-gray-100" : ""
        }`}
        placeholder="Phone Number"
        readOnly={!!selectedPersonPhone} // Make read-only if editing
        required={!selectedPersonPhone} // Required only if adding
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
