import PredictionForm from 'modules/prediction/form';
import ProjectInfo from 'modules/prediction/projectInfo';

export default function Home() {
  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='grid md:grid-cols-2 items-center gap-12'>
          <ProjectInfo />

          <div className='relative'>
            <div className='flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700'>
              <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                Fill in the customer details
              </h2>

              <PredictionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
