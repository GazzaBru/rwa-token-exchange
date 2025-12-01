import { Briefcase, Milestone, Target } from 'lucide-react';

const timelineData = [
  { year: '2025', event: 'Company Inception', description: 'Xylem Fintech was founded with the mission to democratise real estate investment in Africa.' },
  { year: '2026', event: 'FSCA License Acquired', description: 'Became one of South Africa’s first fully licensed digital exchanges for real-world assets.' },
  { year: 'Q1 2026', event: 'Platform Launch', description: 'Successfully launched our tokenisation platform and onboarded the first set of properties.' },
  { year: 'Q3 2027', event: 'First R20M Tokenised', description: 'Reached a major milestone with over R20 million in real estate assets tokenised on the platform.' },
];

const About = () => {
  return (
    <div className='container mx-auto py-20 px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold tracking-tight'>About Xylem Fintech</h1>
        <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
          We are a team of business, finance and technology experts passionate about building the future of investment in Africa.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-16 items-center mb-20'>
        <div>
          <h2 className='text-3xl font-bold mb-4 flex items-center'><Target className='mr-3 h-8 w-8 text-blue-600' /> Our Mission</h2>
          <p className='text-gray-700 text-lg mb-4'>
            To make premium real estate and other alternative investments accessible to everyone, enhancing liquidity and creating wealth for all participants in the ecosystem.
          </p>
          <h2 className='text-3xl font-bold mb-4 flex items-center'><Briefcase className='mr-3 h-8 w-8 text-blue-600' /> Our Vision</h2>
          <p className='text-gray-700 text-lg'>
            To be Africa's leading digital exchange for tokenised real-world assets, fostering a transparent, efficient, and inclusive investment landscape powered by blockchain technology.
          </p>
        </div>
        <div className='relative h-96'>
           <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/about-vision-oe9o2rt-1764601053898.webp' alt='Our Vision' className='absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl' />
        </div>
      </div>

      <div>
        <h2 className='text-3xl font-bold text-center mb-12 flex items-center justify-center'><Milestone className='mr-3 h-8 w-8 text-blue-600' /> Our Journey</h2>
        <div className='relative'>
          <div className='absolute left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2'></div>
          {timelineData.map((item, index) => (
            <div key={index} className='relative mb-8 flex justify-center items-center w-full'>
              <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`p-6 bg-white rounded-lg shadow-lg border-l-4 ${index % 2 === 0 ? 'border-blue-600' : 'border-teal-500'}`}>
                    <p className='text-lg font-bold text-gray-800'>{item.year}</p>
                    <h3 className='text-xl font-semibold mt-1 mb-2'>{item.event}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                </div>
              </div>
              <div className='absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
