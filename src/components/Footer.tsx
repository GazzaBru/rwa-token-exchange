import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container py-12 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Inaara Capital</h3>
            <p className='text-gray-400'>The future of real estate investment in South Africa.</p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><Link to='/about' className='text-gray-400 hover:text-white'>About Us</Link></li>
              <li><Link to='/services' className='text-gray-400 hover:text-white'>Services</Link></li>
              <li><Link to='/blog' className='text-gray-400 hover:text-white'>Blog</Link></li>
              <li><Link to='/contact' className='text-gray-400 hover:text-white'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='text-gray-400 hover:text-white'>Privacy Policy</a></li>
              <li><a href='#' className='text-gray-400 hover:text-white'>Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Connect</h4>
            <p className='text-gray-400'>123 Main Street, Cape Town, 8001</p>
            <p className='text-gray-400'>info@inaaracapital.co.za</p>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-6 text-center text-gray-500'>
          <p>&copy; {new Date().getFullYear()} Inaara Capital. All Rights Reserved. Licensed by FSCA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
