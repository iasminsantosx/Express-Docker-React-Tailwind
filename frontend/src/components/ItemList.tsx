import React from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";

interface PersonPhone {
  bussinessentity_id: number;
  phonenumbertype_id: number;
  phonenumber: string;
}

interface ItemListProps {
  items: PersonPhone[];
  onEdit: (item: PersonPhone) => void;
  onDelete: (item: PersonPhone) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete }) => {
  return (
    <Card className="flex flex-col bg-slate-50 p-2">
      <CardHeader className="justify-center items-center">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Person Phones</h2>
      </CardHeader>
      <CardContent className="w-full h-full m-0 p-0">
        <ul>
          {items.map((item) => (
            <li
              key={`${item.bussinessentity_id}-${item.phonenumbertype_id}-${item.phonenumber}`}
              className="flex justify-between items-center w-full h-full m-2"
            >
              <div className="flex flex-row justify-between w-full h-full p-1 m-6">
                <div className="flex flex-row mr-2">
                  <span className="text-base font-bold text-slate-800 mr-1">
                    Person Phone:{"  "}
                  </span>
                  <span className="text-base font-bold text-slate-600">
                    {"  "}
                    {item.phonenumber}
                  </span>
                </div>
                <div className="flex flex-row mr-2">
                  <span className="text-base font-bold text-slate-800 mr-1">
                    BussinesEntity_id:{"  "}
                  </span>
                  <span className="text-base font-bold text-slate-600">
                    {"  "}
                    {item.bussinessentity_id}
                  </span>
                </div>
                <div className="flex flex-row mr-2">
                  <span className="text-base font-bold text-slate-800 mr-1">
                    PhoneNumberType_id:{"  "}
                  </span>
                  <span className="text-base font-bold text-slate-600">
                    {"  "}
                    {item.phonenumbertype_id}
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between w-32 h-8 mr-1">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded h-full"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded h-full"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ItemList;
