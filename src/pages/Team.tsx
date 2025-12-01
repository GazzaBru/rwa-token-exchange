const teamMembers = [
  {
    name: 'Gary William Reilly',
    role: 'Chief Executive Officer',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/team-placeholder-male-1-vnmylhx-1764601068019.webp',
    bio: 'A seasoned business expert with over 30 years of experience in fintech, hospitality, and energy sectors, Gary is passionate about leveraging technology to create inclusive financial products.'
  },
  {
    name: 'Matt Cech',
    role: 'Chief Technology Officer',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/team-placeholder-female-1-zbknsgd-1764601074599.webp',
    bio: 'Matt is a blockchain visionary and software architect who has led development teams at several successful tech startups. He is the driving force behind our secure and scalable platform.'
  },
  {
    name: 'Chris van der Merwe',
    role: 'Head of Real Estate',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/team-placeholder-male-2-5hy2g9y-1764601081733.webp',
    bio: 'With a deep understanding of the South African property market, Chris is responsible for sourcing, vetting, and managing the high-quality assets available on our platform.'
  },
];

const Team = () => {
  return (
    <div className='container mx-auto py-20 px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold tracking-tight'>Our Leadership Team</h1>
        <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
          Meet the experienced professionals guiding Xylem Fintech to the forefront of digital asset innovation.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {teamMembers.map((member) => (
          <div key={member.name} className='text-center p-4'>
            <div className='relative w-48 h-48 mx-auto mb-4'>
              <img
                src={member.imageUrl}
                alt={member.name}
                className='rounded-full w-full h-full object-cover shadow-lg'
              />
            </div>
            <h3 className='text-xl font-bold'>{member.name}</h3>
            <p className='text-blue-600 font-semibold mb-2'>{member.role}</p>
            <p className='text-gray-600 text-sm'>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
