import Image from "next/image";
import Link from "next/link";
const LargeCard = ({post }) => {
  const {image,title,category,summary,id} = post 
  const slug = title.replace(/\s/g,'-').toLowerCase()
  return (
    <Link href={`/${category}/${slug}-${id}`}>
    <a>

      <article className="flex flex-col h-[350px] w-72 m-1 group shadow-lg">
        <div className="relative h-64 w-full">
          <Image
            src={`${image ? image : "https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}`}
            layout="fill"
            objectFit="fill"
            className="card-image"
          />
          <span className="absolute bottom-0 text-white text-xs font-light px-2 bg-black capitalize">
            {category}
          </span>
        </div>
        <div className="mt-2 space-y-3 p-3">
          <h3 className="text-lg md:text-xl leading-snug font-medium text-gray-900 group-hover:text-green-600 transition-all duration-200">
            {title}
          </h3>
          <span className="text-xs text-gray-500 text-right">January 06, 2022 
            {/* <strong className="text-black">Divyanshu Kaushik</strong> - January 06, 2022 */}
          </span>
          {/* <p className="card-text text-[13px] text-gray-500">
            {summary}
          </p> */}
        </div>
      </article>
    </a>
    </Link>
  );
};

export default LargeCard;
