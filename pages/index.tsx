// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import { ArticlesCardsGrid } from "../components/ArticlesCardsGrid";
import { HeaderMenuColored } from "../components/HeaderMenuColored";
import { FooterSocial } from "../components/FooterSocial";

export default function Home({ blogs }) {
  console.log("blogs", blogs);

  const links = [
    {
      link: "/about",
      label: "Features",
    },
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
    //メガメニューの参考
    // {
    //   link: "#1",
    //   label: "Learn",
    //   links: [
    //     {
    //       link: "/docs",
    //       label: "Documentation",
    //     },
    //     {
    //       link: "/resources",
    //       label: "Resources",
    //     },
    //     {
    //       link: "/community",
    //       label: "Community",
    //     },
    //     {
    //       link: "/blog",
    //       label: "Blog",
    //     },
    //   ],
    // },
    // {
    //   link: "#2",
    //   label: "Support",
    //   links: [
    //     {
    //       link: "/faq",
    //       label: "FAQ",
    //     },
    //     {
    //       link: "/demo",
    //       label: "Book a demo",
    //     },
    //     {
    //       link: "/forums",
    //       label: "Forums",
    //     },
    //   ],
    // },
  ];
  return (
    <div>
      <HeaderMenuColored links={links}></HeaderMenuColored>
      <ArticlesCardsGrid blogs={blogs}></ArticlesCardsGrid>
      <FooterSocial></FooterSocial>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
