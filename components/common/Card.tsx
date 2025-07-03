import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title }) => {
  return (
      <div className='rounded-md bg-[#E9E9E9]'>
        <h1>{title}</h1>
    </div>
  );
};

export default Card;