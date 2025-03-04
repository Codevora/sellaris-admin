interface PaymentTableProps {
    name: string;
    status: string;
}

const PaymentTable: React.FC<PaymentTableProps> = ({ name, status }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {name}
            </th>
            <td className="px-6 py-4">
                {status}
            </td>
        </tr>
    );
}

export default PaymentTable