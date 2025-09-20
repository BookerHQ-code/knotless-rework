import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <div className='bg-[#FFE8C9] min-h-screen flex items-center justify-center'>
        <div className='max-w-md mx-auto px-4'>
          <div className='bg-white rounded-2xl p-8 shadow-lg text-center'>
            <div className='text-6xl mb-4'>✅</div>
            <h2 className='text-2xl font-bold text-[#773800] mb-4'>Thank You!</h2>
            <p className='text-gray-600 mb-6'>
              We have received your message and will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className='bg-gradient-to-r from-[#E9887E] to-[#F4B637] text-white font-semibold py-2 px-6 rounded-xl hover:from-[#d77a6e] hover:to-[#e0a52e] transition-all duration-200'
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-[#FFE8C9] min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#773800] mb-4'>Contact Us</h1>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
            We are always looking for ways to improve the Knotless experience for you. Please let us
            know what we could do better in the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className='max-w-2xl mx-auto'>
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                  Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E9887E] focus:border-transparent transition-all duration-200'
                  placeholder='Your full name'
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E9887E] focus:border-transparent transition-all duration-200'
                  placeholder='your.email@example.com'
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                  Subject *
                </label>
                <select
                  id='subject'
                  name='subject'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E9887E] focus:border-transparent transition-all duration-200'
                >
                  <option value=''>Select a subject</option>
                  <option value='general'>General Inquiry</option>
                  <option value='support'>Technical Support</option>
                  <option value='stylist'>Stylist Application</option>
                  <option value='partnership'>Partnership Opportunity</option>
                  <option value='feedback'>Feedback</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E9887E] focus:border-transparent transition-all duration-200 resize-none'
                  placeholder='Tell us how we can help you...'
                />
              </div>

              {/* Submit Button */}
              <div className='pt-4'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#E9887E] to-[#F4B637] text-white hover:from-[#d77a6e] hover:to-[#e0a52e] hover:-translate-y-1 shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className='flex items-center justify-center'>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className='mt-12 text-center'>
            <h3 className='text-xl font-semibold text-[#773800] mb-4'>Other Ways to Reach Us</h3>
            <div className='space-y-2 text-gray-700'>
              <p>📧 hello@knotless.co</p>
              <p>📱 Follow us on social media for updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
