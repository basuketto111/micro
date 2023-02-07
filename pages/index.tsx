import Link from "next/link";
import { client } from "../libs/client";

type blogProp = {
  blog: any,
  id: any,
  title: any
}

export default function Home({ blog }: blogProp) {
  return (
    <div>
      <ul>
        {blog.map((blog: blogProp) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};