// pages/index.js
import { client } from "../libs/client";
import { ArticlesCardsGrid } from "../components/ArticlesCardsGrid";
import { HeaderMenuColored } from "../components/HeaderMenuColored";
import { FooterSocial } from "../components/FooterSocial";
import { HeroContentLeft } from "../components/HeroContentLeft";

export default function Home({ blogs }) {
  const menuLinks = [
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
      <HeaderMenuColored menuLinks={menuLinks}></HeaderMenuColored>
      <HeroContentLeft></HeroContentLeft>
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
