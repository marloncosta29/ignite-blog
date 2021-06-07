import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

import Header from '../../components/Header';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { format, addSeconds } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { RichText } from 'prismic-dom';
import { useEffect, useState } from 'react';

function formattedTime(seconds) {
  var helperDate = addSeconds(new Date(0), seconds);
  return format(helperDate, 'mm:ss');
}

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  console.log({ post });
  const [timeToRead, setTimeToRead] = useState(0);
  useEffect(() => {
    if (post) {
      const contentText = [];
      post.data.content.map(content => {
        contentText.push(RichText.asText(content.body));
      });
      const totalWords = contentText.join(' ').split(' ').length;
      setTimeToRead((totalWords / 200) * 60);
    }
  }, [post]);

  if (!post) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Header />
      <img className={styles.banner} src={post.data.banner.url} alt="banner" />
      <main className={styles.container}>
        <h1>{post.data.title}</h1>
        <div className={styles.info}>
          <time>
            <FiCalendar />
            {format(new Date(post.first_publication_date), 'dd LLL yyyy', {
              locale: ptBR,
            })}
          </time>
          <span>
            <FiUser />
            {post.data.author}
          </span>
          <span>
            <FiClock />
            {formattedTime(timeToRead)}
          </span>
        </div>
        {post.data.content.map((content, index) => {
          return (
            <div key={index} className={styles.postHeading}>
              <h1>{content.heading}</h1>
              <div
                className={styles.postContent}
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              ></div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    { pageSize: 1 }
  );
  console.log(posts);

  const paths = posts.results.map(item => {
    return { params: { slug: item.uid } };
  });
  console.log(paths);

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});
  const post = {
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author,
      content: response.data.content.map(cont => {
        return {
          heading: cont.heading,
          body: cont.body,
        };
      }),
    },
    first_publication_date: response.first_publication_date,
  };
  return {
    props: {
      post,
    },
  };
};
