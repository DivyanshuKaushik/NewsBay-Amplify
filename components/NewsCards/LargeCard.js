import Image from "next/image";

const LargeCard = ({category}) => {
    return (
        <div className="flex flex-col h-[350px] w-72 m-3">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            layout="fill"
            objectFit="fill"
          />
          <span className="absolute bottom-0 text-white text-xs font-medium px-2 bg-black capitalize">{category}</span>
        </div>
        <div className="mt-2 space-y-2">
          <h3 className="text-lg leading-snug font-medium text-gray-900 hover:text-green-600 transition-all duration-200">
          Top Fashion Trends to Look for in Every Important Collection
          </h3>
        <span className="text-xs text-gray-500"> <strong className="text-black">Divyanshu Kaushik</strong> - January 06, 2022</span>
        <p className="card-text text-[13px] text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, dolore unde? A laudantium, dolore cupiditate consectetur quos magnam deserunt saepe!</p>
        </div>
      </div>
    )
}

export default LargeCard
