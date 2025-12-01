const caseStudies = [
    {
        title: "Luxury Apartment Tokenisation in Sandton",
        beforeImageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/case-study-before-3weoioq-1764601089416.webp",
        afterImageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/case-study-after-cyksct6-1764601097299.webp",
        description: "A developer sought to unlock capital from a recently completed luxury apartment block. By tokenising 30% of the building's value, they raised R15 million in just 48 hours, allowing them to start their next project ahead of schedule while retaining majority ownership.",
        stats: [
            { label: "Capital Raised", value: "R15 Million" },
            { label: "Funding Time", value: "48 Hours" },
            { label: "New Investors", value: "210" },
        ]
    },
    {
        title: "Commercial Property Liquidity in Cape Town",
        beforeImageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/service-fractional-joa8th7-1764601061316.webp",
        afterImageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/about-vision-oe9o2rt-1764601053898.webp",
        description: "An investment firm held a valuable commercial property but faced challenges with liquidity. Tokenisation allowed them to sell a portion of their equity to a wider pool of investors, creating a liquid market for their shares without a full property sale.",
        stats: [
            { label: "Equity Tokenised", value: "25%" },
            { label: "Transaction Fees Saved", value: "~R500,000" },
            { label: "Trading Volume (First 30 Days)", value: "R2 Million" },
        ]
    }
];

const CaseStudies = () => {
  return (
    <div className='bg-gray-50'>
        <div className='container mx-auto py-20 px-4'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl font-bold tracking-tight'>Success Stories</h1>
                <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
                    See how we've helped property owners and investors achieve their financial goals through real-world asset tokenisation.
                </p>
            </div>

            <div className='space-y-20'>
                {caseStudies.map((study, index) => (
                    <div key={index} className='bg-white p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-8 items-center'>
                        <div className='space-y-4'>
                            <h2 className='text-3xl font-bold text-gray-800'>{study.title}</h2>
                            <p className='text-gray-600'>{study.description}</p>
                            <div className='flex flex-wrap gap-4 pt-4'>
                                {study.stats.map(stat => (
                                    <div key={stat.label} className='bg-blue-50 text-blue-800 p-4 rounded-lg text-center'>
                                        <p className='text-2xl font-bold'>{stat.value}</p>
                                        <p className='text-sm font-medium'>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <h4 className='font-bold text-center mb-2'>Before</h4>
                                <img src={study.beforeImageUrl} alt='Before' className='rounded-lg shadow-md w-full h-64 object-cover' />
                            </div>
                             <div>
                                <h4 className='font-bold text-center mb-2'>After</h4>
                                <img src={study.afterImageUrl} alt='After' className='rounded-lg shadow-md w-full h-64 object-cover' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default CaseStudies;