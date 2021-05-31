// import Head from 'next/head'

import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout title='Sportzone - Home'>
      <h1>This is Home</h1>
      <section className='w-full h-96 bg-gray-700'>
        <div className='flex'>
          <div>
            <img src='/images/1.jpg' alt='first image' />
          </div>
          <div>
            <img src='/images/2.jpg' alt='second image' />
          </div>
          <div>
            <img src='/images/3.png' alt='third image' />
          </div>
        </div>
      </section>
      <div className='round teams'></div>
      <section></section>
    </Layout>
  );
};

export default Home;
