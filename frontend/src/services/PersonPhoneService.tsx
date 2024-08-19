import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/personphone",
});

export const getPersonPhone = async () => {
  const response = await api.get("/");
  return response.data;
};

export const addPersonPhone = async (addPayload: {
  bussinessentity_id: number;
  phonenumbertype_id: number;
  phonenumber: string;
}) => {
  await api.post("/", addPayload);
};

export const updatePersonPhone = async (
  bussinessentity_id: number,
  phonenumbertype_id: number,
  phonenumber: string,
  updatePayload: { phonenumberNovo: string }
) => {
  await api.put(
    `/${bussinessentity_id}/${phonenumbertype_id}/${phonenumber}`,
    updatePayload
  );
};

export const deletePersonPhone = async (
  bussinessentity_id: number,
  phonenumbertype_id: number,
  phonenumber: string
) => {
  await api.delete(
    `/${bussinessentity_id}/${phonenumbertype_id}/${phonenumber}`
  );
};
