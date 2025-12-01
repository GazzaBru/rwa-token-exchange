import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <section
        className='relative h-[600px] bg-cover bg-center text-white flex items-center justify-center'
        style={{ backgroundImage: `url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/hero-background-w90g27p-1764601045864.webp)` }}
      >
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 text-center px-4 max-w-3xl'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>Unlock Real Estate. Unleash Liquidity.</h1>
          <p className='mt-4 text-lg md:text-xl text-gray-200'>
            Inaara Capital is South Africa's first licensed digital exchange for tokenised real-world assets, making premium property investment accessible to all from just R2,000.
          </p>
          <div className='mt-8 flex justify-center gap-4'>
            <Button asChild size='lg' className='bg-blue-600 hover:bg-blue-700'>
              <Link to='/services'>Explore Services</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='text-white border-white hover:bg-white/10'>
              <Link to='/about'>Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className='py-20 px-4 text-center bg-gray-50'>
        <h2 className='text-3xl font-bold mb-4'>The Problem We Solve</h2>
        <p className='max-w-4xl mx-auto text-lg text-gray-600'>
          Traditional real estate investment is plagued by high capital requirements, long transaction times, and a lack of liquidity. This locks out millions of potential investors and ties up capital for property owners.
        </p>
      </section>

      <section className='py-20 px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Our Innovative Solution</h2>
        <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Fractional Ownership</h3>
            <p className='text-gray-600'>Invest in premium properties with as little as R2,000, removing the high barrier to entry.</p>
          </div>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>24/7 Trading & Liquidity</h3>
            <p className='text-gray-600'>Buy and sell property tokens anytime on our secure digital exchange, bringing unprecedented liquidity to real estate.</p>
          </div>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Monthly Rental Distributions</h3>
            <p className='text-gray-600'>Earn your share of rental income, distributed monthly directly to your wallet.</p>
          </div>
        </div>
      </section>

      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-8'>Client Testimonials</h2>
            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <p className='text-gray-600 mb-4'>'Inaara Capital has completely changed my perspective on property investment. The process was seamless and I now own a piece of a prime Cape Town property!'</p>
                    <p className='font-semibold'>- Thabo M.</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <p className='text-gray-600 mb-4'>'As a property developer, tokenising one of our assets with Inaara unlocked crucial liquidity for our next project. A game-changer for the industry.'</p>
                    <p className='font-semibold'>- Sarah L.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
