import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";
import React from "react";
import Posts from "../../components/Posts/Posts";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "tech",
    source: "source",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "tech",
    source: "source",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "sport",
    source: "source",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "sport",
    source: "source",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "sport",
    source: "source",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "sport",
    source: "source",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "bussiness",
    source: "divyanshukaushik.in",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "bussiness",
    source: "divyanshukaushik.in",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "bussiness",
    source: "divyanshukaushik.in",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste blanditiis in, commodi ipsa facilis hic recusandae eveniet nisi culpa saepe fuga vero doloribus beatae ipsum perferendis impedit eius delectus placeat tempora dicta voluptatibus officiis consequatur aliquam eaque. Explicabo, rerum. Praesentium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg",
    category: "bussiness",
    source: "divyanshukaushik.in",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
  {
    id: 5,
    title: "जुआ खेलते 4 जुआरी गिरफ्तार, जुआ एक्ट के तहत हुई कार्रवाई",
    summary:
      "इसी कड़ी में 25.12.21 की शाम मुखबिर की सूचना पर थाना शिवरीनारायण क्षेत्रान्तर्गत ग्राम सलखन में जुआ खेलते पकड़े गए चार जुआरी (1)शंकर कश्यप पिता स्व.शिव गोपाल कश्यप 59 वर्ष,साकिन सेमरा थाना नवागढ़,(2)रमाकांत चौबे पिता शत्रुहन प्रसाद 58 वर्ष ग्राम सेमरा थाना नवागढ़(3)सनत कुमार खरे पिता स्व.मोहनलाल खरे 40 वर्ष साकिन मुड़पार थाना नवागढ़(4)विजय कुमार कुर्रे पिता स्व.भक्तु राम कुर्रे 34 वर्ष साकिन ग्राम सेमरा थाना नवागढ़ ,जो ग्राम सलखन कृषि उपज मंडी के पीछे जुआ खेलते पकड़े जाने पर जुआड़ियों से 5100/रुपये जप्त कर जुआ एक्ट के तहत कारवाही करते हुए प्रतिबंधात्मक कार्यवाही कर जेल भेजा गया है।।",
    imageUrl:
      "https://khabarcgnews.com/wp-content/uploads/2021/12/Photo_1640501392998.jpg",
    category: "crime",
    source: "divyanshukaushik.in",
    author: "Divyanshu Kaushik",
    tags: ["janjgir", "khabar11"],
    time: "Sat Dec 25 2021 21:39:09",
    published: true,
  },
];

function Post() {
  return (
    <main className="relative">
      <div className="flex flex-wrap w-full px-20 justify-between py-2 md:sticky bg-white md:top-14 z-30">
        <h3 className="text-2xl text-gray-600 font-semibold">Your Posts</h3>
        <div className="bg-gray-100 rounded-3xl hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search post"
            className="bg-transparent h-full outline-none px-2 pl-4 text-gray-600 text-sm"
          />
          <FontAwesomeIcon icon={faSearch} className="mx-3 h-5 text-gray-600" />
        </div>
        <Link href="/posts/create">
          <Button
            color="amber"
            buttonType="filled"
            size="sm"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
          >
            Create New Post
          </Button>
        </Link>
      </div>
      <Posts posts={data} />
    </main>
  );
}

export default Post;
