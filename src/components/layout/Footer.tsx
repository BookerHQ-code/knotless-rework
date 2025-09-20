import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <div className='text-2xl font-bold bg-gradient-to-r from-[#E9887E] via-[#F4B637] to-[#773800] bg-clip-text text-transparent mb-4'>
              Knotless
            </div>
            <p className='text-gray-600 max-w-md'>
              At Knotless, Black hair, in all its textures and styles, is at the center of our
              platform. We help you connect with local, skilled professionals who can meet your
              unique haircare and styling needs.
            </p>
            <div className='mt-6'>
              <p className='text-sm text-gray-500'>
                Knotless operates in Tkaronto, the gathering place, where the trees stand tall in
                the water, on the lands of the Mississaugas of the Credit, the Anishinaabe, the
                Chippewa, the Haudenosaunee, and the Wendat peoples, who have lived on this land
                since time immemorial.
              </p>
            </div>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to='/' className='text-gray-600 hover:text-[#773800]'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-gray-600 hover:text-[#773800]'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-gray-600 hover:text-[#773800]'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4'>
              Legal
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to='/privacy' className='text-gray-600 hover:text-[#773800]'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/terms' className='text-gray-600 hover:text-[#773800]'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-200'>
          <p className='text-center text-gray-500 text-sm'>
            © 2025 Knotless. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
