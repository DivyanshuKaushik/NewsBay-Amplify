import React from 'react'
import PostItem from './PostItem'

const Posts = ({posts}) => {
    return (
        <section className='w-full'>
            <ul className="w-full md:w-5/6 px-10 md:px-0 mx-auto flex flex-wrap justify-center items-center">
                {posts.map((data,i)=><PostItem key={data.id} sNum={i} postData={data} />)}
            </ul>  
        </section>
    )
}

export default Posts    