import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Spin, Alert } from 'antd';
import { fetchPosts } from '../store/newsSlice';
import NewsCard from './NewsCard';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, hasMore, skip } = useSelector((state) => state.news);
  const observer = useRef();

  useEffect(() => {
    posts.length === 0 && dispatch(fetchPosts(0));
  }, [dispatch, posts.length]);

  const lastPostRef = (node) => {
    if (loading) return;
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) dispatch(fetchPosts(skip));
    });
    node && observer.current.observe(node);
  };

  if (error) return <Alert message="Ошибка" description={error} type="error" />;

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <List
        dataSource={posts}
        renderItem={(post, index) => (
          <List.Item ref={index === posts.length - 1 ? lastPostRef : undefined}>
            <NewsCard post={post} />
          </List.Item>
        )}
      />
      {loading && <Spin />}
      {!hasMore && posts.length > 0 && <div style={{ textAlign: 'center' }}>Все новости загружены</div>}
    </div>
  );
};

export default NewsFeed;