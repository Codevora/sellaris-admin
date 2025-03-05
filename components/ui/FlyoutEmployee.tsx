interface FlyoutEmployeeProps {
 isVisible: boolean;
 content: string;
 style?: React.CSSProperties;
}

const FlyoutEmployee: React.FC<FlyoutEmployeeProps> = ({
 isVisible,
 content,
 style,
}) => {
 if (!isVisible) return null;

 return (
  <div
   style={style}
   className="flex flex-col gap-2 z-10 h-[150px] bg-white border border-gray-300 rounded-lg shadow-lg p-4">
   <p>Employee Access</p>
   <hr className="border w-full" />
   <div className="flex flex-col gap-2 text-sm">{content}</div>
  </div>
 );
};

export default FlyoutEmployee;
