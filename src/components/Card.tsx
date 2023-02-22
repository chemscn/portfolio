import React from 'react';

interface CardProps {
    title?: string;
    imageSrc?: string;
    body?: string;
    footer?: React.ReactElement | React.ReactNode;
}

export const Card = ({title, body, imageSrc, footer}: CardProps)=> {
  return (
    <div className='min-w-fit shadow-sm hover:shadow-xl border rounded-md  border-primary my-10 mx-4'>
      <div className='flex-row flex-1 justify-center flex rounded-md rounded-b-none overflow-hidden'>
      <img className=' flex-1 max-h-60' src={imageSrc && imageSrc}></img>
      </div>
        <div className='pl-4 pr-4 pb-3 pt-1 max-h-72'>
        {title && <h2 className='text-center py-2'>{title}</h2>}
        {body && <p className='flex-col flex text-ellipsis overflow-hidden ... max-w-xl py-2'>{body}</p>}
        </div>
    </div>
  )
}
