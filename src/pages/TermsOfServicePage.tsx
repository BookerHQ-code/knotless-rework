const TermsOfServicePage = () => {
  return (
    <div className='bg-[#FFE8C9] min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#773800] mb-4'>Terms of Service</h1>
          <p className='text-lg text-gray-700'>Last Updated: March 14, 2025</p>
        </div>

        {/* Content */}
        <div className='bg-white rounded-2xl p-8 shadow-lg prose prose-lg max-w-none'>
          <h2 className='text-2xl font-bold text-[#773800] mb-4'>Introduction</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            Welcome to Knotless (Platform, we, our, or us). These Terms of Service (Terms) govern
            your access to and use of our website, mobile application, and services that connect
            clients with hair stylists specializing in black hair care.
          </p>
          <p className='text-gray-700 leading-relaxed mb-6'>
            By accessing or using our Platform, you agree to be bound by these Terms. If you
            disagree with any part of the Terms, you may not access the Platform.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Definitions</h2>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              <strong>User, you, or your</strong> refers to individuals who access or use the
              Platform, including clients seeking styling services and stylists offering their
              services.
            </li>
            <li>
              <strong>Client</strong> refers to a User who books or seeks to book hair styling
              services through the Platform.
            </li>
            <li>
              <strong>Stylist</strong> refers to a User who offers hair styling services through the
              Platform.
            </li>
            <li>
              <strong>Content</strong> refers to text, images, photos, audio, video, and all other
              forms of data or communication posted on or transmitted through the Platform.
            </li>
            <li>
              <strong>Service</strong> refers to the Platform and all related services provided by
              Knotless.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Account Registration</h2>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>User Accounts</h3>
          <p className='text-gray-700 leading-relaxed mb-6'>
            To access certain features of the Platform, you must register for an account. When you
            register, you agree to provide accurate, current, and complete information and to update
            this information to maintain its accuracy. You are responsible for safeguarding your
            password and for all activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account.
          </p>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>Stylist Accounts</h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            If you register as a Stylist, you must:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              Provide accurate information about your qualifications, experience, and services
            </li>
            <li>Upload authentic portfolio images that represent your own work</li>
            <li>Set reasonable prices and appointment availability</li>
            <li>Maintain necessary licenses and permits required by local regulations</li>
            <li>
              Comply with all applicable laws and regulations related to providing hair care
              services
            </li>
          </ul>
          <p className='text-gray-700 leading-relaxed mb-6'>
            We reserve the right to verify your credentials and reject or remove any Stylist account
            that violates these Terms.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Platform Use</h2>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>Permitted Use</h3>
          <p className='text-gray-700 leading-relaxed mb-4'>You may use the Platform to:</p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>Create and manage an account</li>
            <li>Search for stylists or clients</li>
            <li>Book, reschedule, or cancel appointments</li>
            <li>Communicate with other Users regarding services</li>
            <li>Process payments</li>
            <li>Leave reviews and ratings</li>
            <li>Access educational content related to hair care</li>
          </ul>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>Prohibited Use</h3>
          <p className='text-gray-700 leading-relaxed mb-4'>You agree not to:</p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>Use the Platform for any illegal purpose</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Submit false or misleading information</li>
            <li>Impersonate any person or entity</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Use our Platform to send spam or unsolicited messages</li>
            <li>Interfere with the proper functioning of the Platform</li>
            <li>Attempt to gain unauthorized access to the Platform or its systems</li>
            <li>Use data mining, robots, or similar data gathering methods</li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Services and Payments</h2>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              Service prices and availability are determined by individual Stylists and clearly
              displayed before booking
            </li>
            <li>
              We may mediate disputes between Clients and Stylists but are not obligated to do so
            </li>
            <li>We reserve the right to issue refunds or credits at our discretion</li>
            <li>Payment processing is handled through secure third-party providers</li>
            <li>All fees and charges will be clearly disclosed before any transaction</li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>
            Content and Intellectual Property
          </h2>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>User Content</h3>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>You retain all rights to the Content you post on the Platform</li>
            <li>
              By posting Content, you grant us a non-exclusive, worldwide, royalty-free license to
              use, reproduce, adapt, publish, translate, and distribute it on the Platform
            </li>
            <li>You represent that you have all necessary rights to the Content you post</li>
            <li>
              We may remove any Content that violates these Terms or is otherwise objectionable
            </li>
          </ul>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>Platform Content</h3>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              All Content provided by Knotless, including logos, trademarks, designs, text,
              graphics, and interfaces, is our property or the property of our licensors
            </li>
            <li>
              Our Content is protected by copyright, trademark, and other intellectual property laws
            </li>
            <li>
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display, or use our Content without explicit permission
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Reviews and Ratings</h2>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>Reviews must be honest, relevant, and based on personal experience</li>
            <li>
              You may not provide false reviews, use reviews for blackmail, or engage in review
              manipulation
            </li>
            <li>We reserve the right to remove reviews that violate these Terms</li>
            <li>
              Stylists may not offer incentives in exchange for positive reviews or removal of
              negative reviews
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Limitation of Liability</h2>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>The Platform is provided as is and as available without warranties of any kind</li>
            <li>
              We do not guarantee that the Platform will always be safe, secure, or error-free
            </li>
            <li>
              We are not liable for any indirect, incidental, special, consequential, or punitive
              damages
            </li>
            <li>
              Our total liability for any claims arising under these Terms shall not exceed the
              amount you paid to us in the past six months
            </li>
            <li>
              You agree to defend, indemnify, and hold us harmless from claims, damages, and
              expenses arising from your use of the Platform
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Governing Law</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            These Terms shall be governed by the laws of Canada, without regard to its conflict of
            law provisions. Any disputes arising under these Terms shall be resolved in the courts
            of Ontario.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Changes to Terms</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            We may modify these Terms at any time. Changes will be effective when posted on the
            Platform with a new Last Updated date. Your continued use of the Platform after changes
            constitutes acceptance of the modified Terms.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Contact Information</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            If you have any questions about these Terms, please contact us via the form on our
            Contact Us page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
