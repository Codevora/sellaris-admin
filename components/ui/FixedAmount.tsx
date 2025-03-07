interface FixedAmountProps {
 isOpen: boolean;
}

const FixedAmount: React.FC<FixedAmountProps> = ({isOpen}) => {
 if (!isOpen) return null;
 return <div className="fixed flex justify-center">Hello World</div>;
};

export default FixedAmount;
