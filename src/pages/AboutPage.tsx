const AboutPage = () => {
  return (
    <div className='bg-[#FFE8C9] min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#773800] mb-6'>About Us</h1>
          <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
            Two Sudanese-Canadian sisters creating solutions for the Black hair care community
          </p>
        </div>

        {/* Main Content */}
        <div className='space-y-12'>
          {/* Introduction */}
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <div className='prose prose-lg max-w-none text-gray-700'>
              <p className='text-lg leading-relaxed mb-6'>
                Ever feel like finding Black hair styling services can be a whole journey in itself?
                From spending hours searching social media, to chasing down strangers with box
                braids, we have done just about everything to find the right hairstylist – one who
                truly understands and caters to Black hair.
              </p>
              <p className='text-lg leading-relaxed'>
                We are Lina and Manar, two Sudanese-Canadian sisters who were sick of the struggle
                to find Black hairstylists, so we decided to create a solution.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className='bg-gradient-to-br from-[#E9887E] to-[#F4B637] rounded-2xl p-8 text-white shadow-lg'>
            <h2 className='text-3xl font-bold mb-6'>Our Story</h2>
            <div className='text-lg leading-relaxed space-y-4'>
              <p>
                You know that feeling when you are desperately searching for a Black hairstylist,
                and it feels like you are on an impossible treasure hunt? Scrolling through endless
                Instagram pages, asking friends of friends, and sometimes even approaching strangers
                with gorgeous braids on the street (yes, we have been there!). The struggle is real,
                and it is exhausting.
              </p>
              <p>
                Plus, who has time for long travel and inconvenient appointments? And if you need
                privacy for religious reasons, a calm space for neurodivergent folks, accommodations
                for disabilities, or gender-affirming care, the search can get even trickier.
              </p>
              <p>
                That is where Knotless comes in to save the day! Our platform is built to crush
                these obstacles. With our easy-peasy database of top-rated stylists who specialize
                in textured hair, you can find the perfect match in no time. We have gathered a
                diverse lineup of stylists, ensuring you get the high-quality care you deserve,
                minus the stress and hassle.
              </p>
              <p>
                Whether you need a stylist with experience in working with clients with special
                needs, someone who can create a sensory-friendly environment, or a professional
                offering gender-affirming care, Knotless has you covered. Our mission? To make Black
                hair care fun, accessible, and empowering, creating a vibrant community where
                everyone feels celebrated and confident in their beauty.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <h2 className='text-3xl font-bold text-[#773800] mb-6'>Our Mission</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Our mission is to detangle the complexities of Black hair care by providing a
              seamless, all-in-one platform that connects users with the best stylists and hair care
              specialists. We celebrate and empower Black beauty, meeting the needs of a diverse
              community with a platform designed just for them.
            </p>
          </div>

          {/* Vision */}
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <h2 className='text-3xl font-bold text-[#773800] mb-6'>Our Vision</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              To become the leading platform for Black hair care, inspiring confidence and
              empowerment through accessible, high-quality styling and hair care services. We
              envision a world where everyone can easily find and connect with the perfect stylist
              for their unique needs.
            </p>
          </div>

          {/* Values */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-bold text-[#773800] text-center'>Our Values</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Accessibility */}
              <div className='bg-[#FFE8C9] border-2 border-[#E9887E] rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-[#773800] mb-4'>Accessibility</h3>
                <p className='text-gray-700 leading-relaxed'>
                  We believe everyone, regardless of gender, sexuality, or disability, deserves
                  easy, safe, and affirming access to top-notch haircare and styling services.
                  Knotless database allows users to search for stylists who meet their access needs,
                  from mobility to sensory experience. Whether privacy for religious reasons or a
                  calm environment for a child on the spectrum, we have got you covered.
                </p>
              </div>

              {/* Empowerment */}
              <div className='bg-[#FFE8C9] border-2 border-[#F4B637] rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-[#773800] mb-4'>Empowerment</h3>
                <p className='text-gray-700 leading-relaxed'>
                  We aim to empower our users and stylists by celebrating and supporting the diverse
                  world of Black beauty and aesthetics. Our platform helps service providers develop
                  their professional skills and networks to better serve our communities.
                </p>
              </div>
            </div>
          </div>

          {/* Land Acknowledgement */}
          <div className='bg-[#773800] text-white rounded-2xl p-8 shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Land Acknowledgement</h2>
            <p className='text-lg leading-relaxed'>
              Knotless operates in Tkaronto, the gathering place, where the trees stand tall in the
              water, on the lands of the Mississaugas of the Credit, the Anishinaabe, the Chippewa,
              the Haudenosaunee, and the Wendat peoples, who have lived on this land since time
              immemorial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
