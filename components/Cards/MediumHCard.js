import Image from "next/image";

const MediumHCard = () => {
  return (
    <div className="flex h-[400px] md:h-40 flex-col md:flex-row md:w-[600px] m-3">
      <div className="relative h-1/2 md:h-full w-full md:w-4/5">
        <Image
          src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="md:ml-4 flex flex-col justify-between space-y-3 md:space-y-0">
        <h3 className="text-xl leading-snug font-medium text-gray-900 hover:text-blue-400 transition-all duration-200">
          KTM Marchetti Signs with Larranaga and Zanotti for Next Season{" "}
        </h3>
        <span className="text-xs text-gray-500"> <strong className="text-black">Divyanshu Kaushik</strong> - January 06, 2022</span>
        <p className="text-[13px] card-text text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          accusantium saepe voluptas animi?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Explicabo laborum ut molestias officiis
          ex odio porro, adipisci quam vitae repellendus?
        </p>
      </div>
    </div>
  );
};

export default MediumHCard;
