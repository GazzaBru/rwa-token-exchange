import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log({ name, email, message });
    toast.success('Message sent successfully! We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='container mx-auto py-20 px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold tracking-tight'>Get In Touch</h1>
        <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
          We’d love to hear from you. Whether you have a question about our services, partnerships, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-16'>
        <div className='bg-gray-50 p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold mb-6'>Send us a Message</h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
              <Input
                id='name'
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
              <Input
                id='email'
                type='email'
                placeholder='your.email@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
              <Textarea
                id='message'
                placeholder='How can we help you?'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
              />
            </div>
            <Button type='submit' className='w-full bg-blue-600 hover:bg-blue-700'>
              Send Message
            </Button>
          </form>
        </div>

        <div className='space-y-8'>
           <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
           <div className='flex items-start space-x-4'>
                <div className='bg-blue-100 p-3 rounded-full'>
                    <Mail className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Email</h3>
                    <a href='mailto:gazza@xylemfintech.co.za' className='text-gray-600 hover:text-blue-600'>gazza@xylemfintech.co.za</a>
                </div>
           </div>
           <div className='flex items-start space-x-4'>
                <div className='bg-blue-100 p-3 rounded-full'>
                    <Phone className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Phone</h3>
                    <p className='text-gray-600'>+27 21 123 4567</p>
                </div>
           </div>
           <div className='flex items-start space-x-4'>
                <div className='bg-blue-100 p-3 rounded-full'>
                    <MapPin className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Office</h3>
                    <p className='text-gray-600'>Noordhoek, Cape Town, 7979, South Africa</p>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
