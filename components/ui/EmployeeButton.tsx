import Link from "next/link";
import React, {useState} from "react";

interface EmployeeButtonProps {
 isOpen: boolean;
 onClose: () => void;
}

const EmployeeButton: React.FC<EmployeeButtonProps> = ({isOpen, onClose}) => {
 const [name, setName] = useState("");
 const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
  item6: false,
  item7: false,
  item8: false,
  item9: false,
  item10: false,
  item11: false,
  item12: false,
  item13: false,
  item14: false,
 });

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const {name, checked} = event.target;
  setCheckedItems((prev) => ({...prev, [name]: checked}));
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
   <div className="w-[500px] max-h-[500px] overflow-y-auto rounded-lg">
    <div className="bg-white p-6 rounded shadow-lg w-full">
     <h2 className="text-lg font-bold mb-4">Create Role</h2>
     <form>
      <div className="mb-4">
       <label
        className="block text-sm font-medium mb-1"
        htmlFor="name">
        Role Name
       </label>
       <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
        placeholder="Role Name"
       />
      </div>
      <div className="mb-4 flex flex-col gap-2 justify-start border p-2">
       <label>
        <input
         type="checkbox"
         name="item14"
         checked={checkedItems.item14}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        <h1 className="text-xl font-bold text-primary">App Permission</h1>
        <p>
         Allow employees to sign in to your Point of Sale using their email and
         access the following. To set a 4-digit PIN for these permissions
         instead, go to
         <span className="text-primary hover:underline">
          <Link href="/employee-access/pin-access"> PIN Access.</Link>
         </span>
        </p>
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item1"
         checked={checkedItems.item1}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Manage All Open Bills
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item2"
         checked={checkedItems.item2}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Manage Discounts
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item3"
         checked={checkedItems.item3}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Issue Refunds
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item4"
         checked={checkedItems.item4}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Resend Receipts
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item5"
         checked={checkedItems.item5}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Record Invoice Payments
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item6"
         checked={checkedItems.item6}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Cancel Invoices
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item7"
         checked={checkedItems.item7}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        View and Print Current Shift Details
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item8"
         checked={checkedItems.item8}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Manage Items
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item9"
         checked={checkedItems.item9}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Manage Favorites
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item10"
         checked={checkedItems.item10}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Edit Customer Information
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item11"
         checked={checkedItems.item11}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Charge Customers
       </label>
       <label className="flex items-center p-4 border">
        <input
         type="checkbox"
         name="item12"
         checked={checkedItems.item12}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        Move Tables
       </label>
      </div>
      <div className="mb-4 flex flex-col gap-2 justify-start border p-2">
       <label>
        <input
         type="checkbox"
         name="item14"
         checked={checkedItems.item14}
         onChange={handleCheckboxChange}
         className="mr-2"
        />
        <h1 className="text-xl font-bold text-primary">
         Back-office Permission
        </h1>
        <p>
         Allow employees to sign in to your Backoffice using their email and
         access the following.
        </p>
       </label>
      </div>
      <div className="flex gap-2 justify-end">
       <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red text-white rounded">
        Cancel
       </button>
       <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-primary text-white rounded">
        Create
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default EmployeeButton;
