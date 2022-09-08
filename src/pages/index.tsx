import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Renaissance Art Labs</title>
      </Head>

      {/* Hero section */}

      <div className="container bg-black bg-left lg:bg-center min-w-[100%] bg-cover bg-no-repeat">
        <div className="overlay flex flex-col min-w-[100%] text-center pt-14">
          <div className="flex flex-col justify-center items-center my-9">
            <img 
              height={800}
              width={800}
              src="/assets/renaissanceartlabs.png"></img>
          </div>
            <h2 className="text-white text-center my-4 font-dm text-xl tracking-widest">
              Building Web3 Infrastructure
            </h2>
        </div>
        <video className='videoTag lg:bg-center' autoPlay loop muted>
              <source src={'/assets/bg.mp4'} type='video/mp4' />
        </video>
      </div>
    </>
  );
}

export default Home;