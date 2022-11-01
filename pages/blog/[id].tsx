import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { HeaderMenuColored } from "../../components/HeaderMenuColored";
import {
  Card,
  CardSection,
  Container,
  createStyles,
  Grid,
  Paper,
} from "@mantine/core";
import { UserCardImage } from "../../components/UserCardImage";
import { FooterSocial } from "../../components/FooterSocial";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: "center",
    gridArea: "1 / -1",
    zIndex: 1,
  },
  titleWrap: {
    display: "grid",
    alignItems: "center",
    marginBottom: 120,
    color: "#fff",
  },
  imageWrap: {
    gridArea: "1 / -1",
    position: "relative",
    minHeight: 160,
    zIndex: -1,
    filter: "brightness(.5)",
  },
  publishedAt: {
    margin: 0,
  },
}));

export default function BlogId({ blog, user }) {
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
  const { classes } = useStyles();
  return (
    <>
      <HeaderMenuColored menuLinks={menuLinks}></HeaderMenuColored>
      <div className={classes.titleWrap}>
        <h1 className={classes.title}>{blog.title}</h1>
        <div className={classes.imageWrap}>
          <Image
            src={blog.eyecatch.url}
            width={blog.eyecatch.width}
            height={blog.eyecatch.height}
            alt="My avatar"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      <Container>
        <Paper shadow="xs" radius="md" p="md" withBorder mb={80}>
          <main>
            <p className={classes.publishedAt}>
              作成日:
              {dayjs
                .utc(blog.publishedAt)
                .tz("Asia/Tokyo")
                .format("YYYY-MM-DD")}
            </p>
            <p className="category">
              {blog.category && `${blog.category.name}`}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
              className={styles.post}
            />
          </main>
        </Paper>
        <UserCardImage user={{ user }}></UserCardImage>
      </Container>
      <FooterSocial></FooterSocial>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const blogData = await client.get({ endpoint: "blogs", contentId: id });
  const userData = await client.get({ endpoint: "user" });
  return {
    props: {
      blog: blogData,
      user: userData.contents,
    },
  };
};
