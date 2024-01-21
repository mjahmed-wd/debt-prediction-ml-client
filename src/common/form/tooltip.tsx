import React from 'react';

type Props = {
  placeholder: string;
};

const Tooltip = (props: Props) => {
  const { placeholder } = props;
  return (
    <div className='has-tooltip relative'>
      <svg
        className='flex-shrink-0 h-4 w-4 text-gray-300 mt-0.5 dark:text-white'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='10'></circle>
        <path d='M12 16v-4'></path>
        <path d='M12 8h.01'></path>
      </svg>
      <div
        className='tooltip absolute right-0 bottom-5 z-50 break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none'
        style={{ minWidth: '250px' }}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default Tooltip;
