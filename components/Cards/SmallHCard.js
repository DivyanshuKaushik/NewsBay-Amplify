import Image from 'next/image'
import Link from 'next/link'

const SmallHCard = ({post}) => {
    const {title,image,id,category} = post
    const slug = title.replace(/\s/g, "-").toLowerCase();

    return (
        <Link href={`/${category}/${slug}-${id}`}>
            <a>
                <article className="flex h-20 w-72 m-1 group shadow-lg rounded-md ">
                    <div className="relative h-full w-2/3 rounded-md">
                        <Image src={image} layout="fill" objectFit='fill' className='card-image rounded-md'/>
                    </div>
                    <div className="p-1 ml-3 flex flex-col justify-between">
                        <p className="text-md leading-snug font-medium text-gray-900 group-hover:text-yellow-600 transition-all duration-200">{title} </p>
                        {/* <span className="text-xs text-gray-500">January 06, 2022</span> */}
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default SmallHCard
