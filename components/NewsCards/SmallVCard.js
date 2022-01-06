import Image from "next/image";

const SmallVCard = () => {
  return (
      <div className="flex flex-col h-[200px] w-40 m-3">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            layout="fill"
            objectFit="fill"
          />
          <span className="absolute bottom-0 text-white text-xs font-medium px-2 bg-black">Tech</span>
        </div>
        <div className="mt-2">
          <p className="text-[13px] leading-snug font-medium text-gray-900 hover:text-blue-500 transition-all duration-200">
          Luxe Hallway with Chess Table Flooring and Large Rounded Windows
          </p>
          <span className="text-xs text-gray-500 mt-1">January 06, 2022</span>
        </div>
      </div>
  );
};

export default SmallVCard;
