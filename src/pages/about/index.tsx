import React from 'react';

export const MEMBERS = [
  {
    name: 'Md Abu Sayed',
    designation: 'Team Leader',
    registrationNo: '2022822010',
    img: '/asset/img/sayed.png',
    description: `Hi, I'm MD ABU SAYED,
    I have done my PGD in IT at SUST. Also, I have almost 7 years of experience in networking.
    I'm certified in CCNA, MTCNA, and MTCRE. I have strong networking and network automation knowledge. Now I'm a student at MIT in IICT at SUST. I'm leading the team on this project. I am also directly involved with the core development of this project.`,
  },
  {
    name: 'Md Jubair. Ahmed',
    designation: 'Programmer',
    img: '/asset/img/jubair.jpeg',
    registrationNo: '2022822001',
    description:
      'Continuous learner, passionate about programming, and problem-solving and ready to take new challenges every single day. Having 2 years of experience in MERN stack development. ',
  },
  {
    name: 'Arnab Bhattacharjee',
    designation: 'Programmer',
    registrationNo: '2022822034',
    img: '/asset/img/arnab.jpeg',
    description:
      'Most of my Work centers around Modeling and Training a Neural Network that could predict the Loan status. I Used python to build the Model. I also bring an understanding of HTML, CSS, and JavaScript in regards to the frontend side of the project.  ',
  },
  {
    name: 'Fahmida Akter',
    designation: 'Programmer',
    registrationNo: '202282212',
    img: '/asset/img/dp.jpeg',
    description:
      'Skills : Programming language : javascript, python, react. Project contribution : deploy a machine learning model and find accuracy still working on',
  },
  {
    name: 'Shushil Chandra Das',
    designation: 'Business Analyst',
    registrationNo: '2022822XXX',
    img: '/asset/img/dp.jpeg',
    description: '',
  },
  {
    name: 'Rasendra Das',
    designation: 'Business Analyst',
    registrationNo: '2022822XXX',
    img: '/asset/img/dp.jpeg',
    description: '',
  },
];

const AboutUs = () => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
          Our Team
        </h2>
        {/* <p className='mt-1 text-gray-600 dark:text-gray-400'>Creative people</p> */}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {MEMBERS.map((member) => (
          <div
            key={member.name}
            className='flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700'
          >
            <div className='flex items-center gap-x-4'>
              <img
                className='rounded-full w-20 h-20'
                src={member.img}
                alt='Image Description'
              />
              <div className='grow'>
                <h3 className='font-medium text-gray-800 dark:text-gray-200'>
                  {member.name}
                </h3>
                <p className='text-xs uppercase text-gray-500'>
                  {member.designation}
                </p>
                <small className=' text-gray-500'>
                  {member.registrationNo}
                </small>
              </div>
            </div>

            <p className='mt-3 text-gray-500'>{member.description}</p>
            {/* links */}
            {/* <div className='mt-3 space-x-1'>
              <a
                className='inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]'
                href='#'
              >
                <svg
                  className='w-3.5 h-3.5'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                </svg>
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
