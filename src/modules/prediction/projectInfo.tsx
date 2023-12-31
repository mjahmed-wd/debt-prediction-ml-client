import { MEMBERS } from 'pages/about';
import React from 'react';

const ProjectInfo = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white'>
          Debt Repayment Probability AI
        </h1>
        <p className='mt-1 md:text-lg text-gray-800 dark:text-gray-200'>
          We use machine learning to predict dept repayment probability of your
          customers.
        </p>

        <div className='mt-8'>
          <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
            Features
          </h2>

          <ul className='mt-2 space-y-2'>
            <li className='flex space-x-3'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z'
                  fill='currentColor'
                />
              </svg>
              <span className='text-gray-600 dark:text-gray-400'>
                Trustworthy debt risk predictions.
              </span>
            </li>

            <li className='flex space-x-3'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z'
                  fill='currentColor'
                />
              </svg>
              <span className='text-gray-600 dark:text-gray-400'>
                Transparent machine learning explanations
              </span>
            </li>

            <li className='flex space-x-3'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z'
                  fill='currentColor'
                />
              </svg>
              <span className='text-gray-600 dark:text-gray-400'>
                Multiple algorithms to choose from
              </span>
            </li>
          </ul>
        </div>

        <div className='mt-10 flex items-center gap-x-5'>
          <div className='flex -space-x-2'>
            {MEMBERS.map((member) => (
              <img
                key={member.name}
                className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800'
                src={member.img}
                alt={`${member.name} - ${member.designation}`}
              />
            ))}
          </div>
          <span className='text-sm text-gray-500'>
            Developed by MIT, SUST student
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
