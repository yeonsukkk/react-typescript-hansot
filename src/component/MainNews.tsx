import React, { useState, useCallback, useEffect } from 'react';
import { NewsItem } from './NewsItem';
import { NewsData } from './model/news';
import './MainNews.css';

const newsInit: NewsData = {
  id: 0,
  title: '',
  imgUrl: '',
  text: '',
  link: '',
  date: 0,
};

export const MainNews: React.FC = () => {
  const API_URL = '/json/newsData.json';

  const [newsData, setNewsData] = useState<NewsData[]>([newsInit]);
  const fetchData = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);
  useEffect(fetchData, []);
  const sortData = newsData.slice(-3).reverse();
  return (
    <section className='mainNewsWrap comWebWidth'>
      <h3>NEWS</h3>
      <NewsItem news={sortData} />
    </section>
  );
};
