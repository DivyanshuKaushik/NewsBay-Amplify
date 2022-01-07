import Image from 'next/image'
import Link from 'next/link'

const SmallHCard = () => {
    return (
        <Link href="/posts/td-post-spring-fashion-show-at-the-versity-of-michigan-has-started-1">
            <a>
                <article className="flex h-20 w-72 m-3 hover:m-3 group">
                    <div className="relative h-full w-32">
                        <Image src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" layout="fill" objectFit='fill' className='card-image'/>
                    </div>
                    <div className="py-0.5 ml-3 flex flex-col justify-between">
                        <p className="text-sm leading-snug font-medium text-gray-900 group-hover:text-yellow-600 transition-all duration-200">Flying Over the Grand Canyon with a Helicopter </p>
                        <span className="text-xs text-gray-500">January 06, 2022</span>
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default SmallHCard
