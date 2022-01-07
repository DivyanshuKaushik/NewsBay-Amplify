import { useRouter } from "next/router";
import Image from "next/image";
import Ads from "../../components/Utilities/Ads";
import SmallVCard from "../../components/NewsCards/SmallVCard";
import Heading from "../../components/Utilities/Heading";
import SmallHCard from "../../components/NewsCards/SmallHCard";

const PostDetail = () => {
  const router = useRouter();
  let { title } = router.query;
  title = title && title.split("-");
  const id = title && title.pop();
  title = title && title.join(" ");
  console.log(title, id);
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 w-5/6 mx-auto py-10 gap-6 md:gap-0">
      <article className="md:col-span-2">
        <h1 className="text-2xl md:text-4xl mb-6 font-medium capitalize text-gray-800 leading-relaxed">
          {title}
        </h1>
        <div className="relative h-96 md:h-[500px] w-full md:w-4/5">
          <Image
            src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            layout="fill"
            objectFit="fill"
          />
          <span className="absolute bottom-0 text-white text-xs font-light px-2 bg-black capitalize">
            category
          </span>
        </div>
        <span className="text-sm text-gray-500 italic block my-5">
          By -<strong className="text-black">Divyanshu Kaushik</strong> -
          January 06, 2022
        </span>
        <p className="text-lg text-gray-600 text-justify md:pr-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, dolore
          unde? A laudantium, dolore cupiditate consectetur quos magnam deserunt
          saepe! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          accusamus debitis sunt quibusdam, totam cumque fugit quae tempore
          laboriosam similique, neque voluptas ullam nisi vitae ex dolorum unde
          nulla! Ipsum! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Enim fugit quod obcaecati qui atque, reiciendis earum
          perspiciatis labore voluptatum quasi quibusdam quisquam, nam aut quos
          dicta incidunt omnis! Consequuntur, vel.
        </p>
        <center> <Ads /></center>
        <div className="mt-10">
        <Heading title="Related Articles" color="black" />
        <div className="flex flex-wrap">
            <SmallVCard />
            <SmallVCard />
            <SmallVCard />
            <SmallVCard />
        </div>

        </div>
      </article>
      <aside className="flex flex-wrap space-y-5 justify-center">
        <Ads />
        <Ads />
        <Ads />
        <SmallHCard />
        <SmallHCard />
        <SmallHCard />
        <SmallHCard />
      </aside>
    </main>
  );
};

export default PostDetail;
