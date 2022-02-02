import Image from "next/image";
import Link from "next/link";

const SmallVCard = ({ post }) => {
  const { image, title, category, id,time } = post;
  const slug = title.replace(/\s/g, "-").toLowerCase();

  return (
    <Link href={`/${category}/${slug}-${id}`}>
      <article className="flex flex-col h-[230px] w-44 m-1 shadow-lg">
        <div className="relative h-full w-full">
        <Image
            src={`${image ? image : "https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}`}
            layout="fill"
            objectFit="fill"
          />
          <span className="absolute bottom-0 text-white text-xs font-medium px-2 bg-black">
           {category}
          </span>
        </div>
        <div className="mt-2 p-2">
          <p className="text-[13px] leading-snug font-medium text-gray-900 hover:text-blue-500 transition-all duration-200">
           {title}
          </p>
          <span className="text-xs text-gray-500 mt-1">{time}</span>
        </div>
      </article>
    </Link>
  );
};

export default SmallVCard;

