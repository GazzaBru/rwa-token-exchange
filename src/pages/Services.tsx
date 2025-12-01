import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className='container mx-auto py-20 px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold tracking-tight'>Our Services</h1>
        <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
          We provide a comprehensive solution for both investors and property owners, unlocking the full potential of real estate through tokenisation.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-16 items-center mb-20'>
        <div>
          <h2 className='text-3xl font-bold mb-4'>Fractional Ownership & Investment</h2>
          <p className='text-gray-700 text-lg mb-4'>
            Our platform enables you to buy and sell digital tokens that represent fractional ownership in high-value properties. This allows you to build a diversified real estate portfolio without the need for large amounts of capital or complex legal processes.
          </p>
          <ul className='space-y-3'>
            <li className='flex items-center text-lg'><CheckCircle className='h-6 w-6 text-green-500 mr-3' />Low entry point (from R2,000)</li>
            <li className='flex items-center text-lg'><CheckCircle className='h-6 w-6 text-green-500 mr-3' />Earn monthly rental income</li>
            <li className='flex items-center text-lg'><CheckCircle className='h-6 w-6 text-green-500 mr-3' />Trade tokens 24/7 on our exchange</li>
            <li className='flex items-center text-lg'><CheckCircle className='h-6 w-6 text-green-500 mr-3' />Access to premium properties</li>
          </ul>
        </div>
        <div className='relative h-96'>
          <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/service-fractional-joa8th7-1764601061316.webp' alt='Fractional Ownership' className='absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl' />
        </div>
      </div>

      <div>
        <h2 className='text-3xl font-bold text-center mb-8'>Investment Benefit Comparison</h2>
        <div className='border rounded-lg overflow-hidden shadow-lg'>
            <Table>
                <TableHeader>
                    <TableRow className='bg-gray-50'>
                        <TableHead className='font-bold text-lg'>Feature</TableHead>
                        <TableHead className='font-bold text-lg text-center'>Traditional Real Estate</TableHead>
                        <TableHead className='font-bold text-lg text-center bg-blue-50 text-blue-800'>Inaara Capital Tokenisation</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Minimum Capital</TableCell>
                        <TableCell className='text-center'>High (R500,000+)</TableCell>
                        <TableCell className='text-center font-semibold text-green-600'>Low (from R2,000)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Liquidity</TableCell>
                        <TableCell className='text-center'>Very Low (Months to sell)</TableCell>
                        <TableCell className='text-center font-semibold text-green-600'>High (24/7 Trading)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Transaction Time</TableCell>
                        <TableCell className='text-center'>Weeks to Months</TableCell>
                        <TableCell className='text-center font-semibold text-green-600'>Instant</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Diversification</TableCell>
                        <TableCell className='text-center'>Difficult & Expensive</TableCell>
                        <TableCell className='text-center font-semibold text-green-600'>Easy & Affordable</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Rental Income</TableCell>
                        <TableCell className='text-center'>Bulk, less frequent</TableCell>
                        <TableCell className='text-center font-semibold text-green-600'>Monthly Distributions</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
      </div>
    </div>
  );
};

export default Services;
