import React from 'react';
import { NewsData } from './model/news';
import { changeDate } from 'api/api';
import './NewsItem.css';

type OwnProps = {
  news: Array<NewsData>;
};

export const NewsItem: React.FC<OwnProps> = (props) => {
  const { news } = props;
  return (
    <>
      <div className='newsItemWrap'>
        {news?.map((item) => {
          return (
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              key={item.id}
            >
              <figure>
                <div>
                  <img src={item.imgUrl} alt={item.title} />
                </div>
                <figcaption>
                  <dl>
                    <dt>{item.title}</dt>
                    <dd className='text'>{item.text}</dd>
                    <dd className='date'>{changeDate(item.date)}</dd>
                  </dl>
                </figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </>
  );
};
