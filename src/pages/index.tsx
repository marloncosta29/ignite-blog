import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  console.log({ postsPagination });
  const [nextPage, setNextPage] = useState<string | null>(
    postsPagination.next_page
  );
  const [posts, setPosts] = useState<Post[]>(
    postsPagination.results.map(post => {
      return post;
    })
  );

  async function handleLoadMorePosts() {
    await fetch(nextPage)
      .then(results => results.json())
      .then((resultsJson: PostPagination) => {
        setNextPage(resultsJson.next_page);
        setPosts([...posts, ...resultsJson.results]);
      });
  }

  return (
    <div className={styles.container}>
      <img src="/images/logo.svg" alt="logo" />
      {posts.map(post => {
        return (
          <div key={post.uid} className={styles.post}>
            <Link href={`/post/${post.uid}`}>
              <a>{post.data.title}</a>
            </Link>
            <p>{post.data.subtitle}</p>
            <div>
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
            </div>
          </div>
        );
      })}

      {nextPage && (
        <button type="button" onClick={handleLoadMorePosts}>
          Carregar mais posts
        </button>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    { pageSize: 1 }
  );
  const postsPagination: PostPagination = {
    next_page: postsResponse.next_page,
    results: postsResponse.results,
  };
  return {
    props: {
      postsPagination,
    },
  };
};
