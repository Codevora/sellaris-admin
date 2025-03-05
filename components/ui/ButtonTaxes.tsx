interface PopupProps {
 isOpen: boolean;
 onClose: () => void;
}

const ButtonTaxes: React.FC<PopupProps> = ({isOpen, onClose}) => {
 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
   <div className="flex flex-col gap-2 bg-white p-6 rounded shadow-lg h-[400px] w-[400px]">
    <p className="text-sm">Taxes Information</p>
    <hr className="border w-full" />
    <div className="flex flex-col justify-between h-full">
     <div className="flex flex-col gap-2">
      <form
       action=""
       className="flex flex-col gap-2">
       <label htmlFor="">Name</label>
       <input
        type="text"
        className="p-2 border w-full"
        placeholder="Name"
       />
      </form>
      <form
       action=""
       className="flex flex-col gap-2">
       <label htmlFor="">Amount (%)</label>
       <input
        type="number"
        className="p-2 border w-full"
        placeholder="Amount"
       />
      </form>
     </div>
     <div className="flex gap-2 justify-end">
      <button
       onClick={onClose}
       className="mt-4 px-4 py-2 bg-red text-white rounded">
       Tutup
      </button>
      <button
       onClick={onClose}
       className="mt-4 px-4 py-2 bg-primary text-white rounded">
       Simpan
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ButtonTaxes;
