const PrivacyPolicyPage = () => {
  return (
    <div className='bg-[#FFE8C9] min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#773800] mb-4'>Privacy Policy</h1>
          <p className='text-lg text-gray-700'>Last Updated: March 14, 2025</p>
        </div>

        {/* Content */}
        <div className='bg-white rounded-2xl p-8 shadow-lg prose prose-lg max-w-none'>
          <h2 className='text-2xl font-bold text-[#773800] mb-4'>Introduction</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            We respect your privacy and are committed to protecting your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you use our website, mobile application, and services.
          </p>
          <p className='text-gray-700 leading-relaxed mb-6'>
            By accessing or using our platform, you agree to this Privacy Policy. Please read it
            carefully. If you do not agree with our policies, please do not use our platform.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Information We Collect</h2>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>Personal Information</h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            We may collect the following types of personal information:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              <strong>Account Information:</strong> Name, email address, phone number, password, and
              profile picture.
            </li>
            <li>
              <strong>Demographic Information:</strong> Gender, age, location, hair type, and
              styling preferences.
            </li>
            <li>
              <strong>Stylist Information:</strong> For stylists, we collect professional
              qualifications, experience, specialties, portfolio images, salon address, and business
              hours.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card details, billing address, and
              transaction history.
            </li>
            <li>
              <strong>Communication Data:</strong> Messages exchanged between clients and stylists
              through our platform.
            </li>
            <li>
              <strong>Appointment Information:</strong> Date, time, services requested, and special
              instructions.
            </li>
            <li>
              <strong>Reviews and Ratings:</strong> Feedback provided about stylists and services.
            </li>
          </ul>

          <h3 className='text-xl font-semibold text-[#773800] mb-3'>
            Automatically Collected Information
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            When you use our platform, we automatically collect certain information, including:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              <strong>Device Information:</strong> IP address, browser type, operating system, and
              device identifiers.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, features used, time spent, and search
              queries.
            </li>
            <li>
              <strong>Location Data:</strong> With your consent, we collect precise location data to
              help you find nearby stylists.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking
              technologies to enhance your experience.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>
            How We Use Your Information
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            We use your information for the following purposes:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>To create and maintain your account.</li>
            <li>
              To connect clients with appropriate stylists based on hair care needs and preferences.
            </li>
            <li>
              To process bookings, payments, and facilitate communication between clients and
              stylists.
            </li>
            <li>To provide personalized recommendations for stylists and services.</li>
            <li>To send appointment reminders, updates, and promotional offers.</li>
            <li>To improve our platform functionality and user experience.</li>
            <li>To monitor and analyze usage patterns and trends.</li>
            <li>To protect against fraud and unauthorized access.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>
            How We Share Your Information
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>We may share your information with:</p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              <strong>Stylists and Clients:</strong> When you book or accept an appointment,
              necessary information is shared between both parties.
            </li>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who help us operate our
              platform (payment processors, cloud storage providers, analytics services).
            </li>
            <li>
              <strong>Business Partners:</strong> Companies we collaborate with to offer integrated
              services or promotions.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law, court order, or governmental
              regulation.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
              all or part of our assets.
            </li>
          </ul>
          <p className='text-gray-700 leading-relaxed mb-6'>
            We do not sell your personal information to third parties for advertising purposes.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Your Privacy Rights</h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Depending on your location, you may have certain rights regarding your personal
            information:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            <li>
              <strong>Access:</strong> Request a copy of your personal information.
            </li>
            <li>
              <strong>Correction:</strong> Update or correct inaccurate information.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your data in certain circumstances.
            </li>
            <li>
              <strong>Restriction:</strong> Limit how we use your information.
            </li>
            <li>
              <strong>Portability:</strong> Receive your data in a structured, machine-readable
              format.
            </li>
            <li>
              <strong>Objection:</strong> Opt-out of certain data uses, including marketing
              communications.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Data Security</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the Internet or electronic storage is 100%
            secure, so we cannot guarantee absolute security.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Children Privacy</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            Our platform is not intended for individuals under the age of 18. We do not knowingly
            collect personal information from children. If we discover that we have collected
            information from a child, we will promptly delete it.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>
            Changes to This Privacy Policy
          </h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            We may update this Privacy Policy periodically to reflect changes in our practices or
            legal requirements. We will notify you of significant changes by posting a prominent
            notice on our platform or sending you an email. Your continued use of our platform after
            such modifications constitutes your acknowledgment of the modified Privacy Policy.
          </p>

          <h2 className='text-2xl font-bold text-[#773800] mb-4 mt-8'>Contact Us</h2>
          <p className='text-gray-700 leading-relaxed mb-6'>
            If you have questions, concerns, or requests regarding this Privacy Policy or our
            privacy practices, please contact us via the form on our Contact Us page. We will
            respond to your inquiry within a reasonable timeframe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
