'use client';

import { useActiveSectionHook } from '@/lib/hooks';
import SectionHeading from '../SectionHeading';
import ContactForm from '../contact/ContactForm';

const Contact = () => {
  const { ref } = useActiveSectionHook({
    activeNav: 'Contact',
    threshold: 0.9,
  });

  return (
    <div
      ref={ref}
      id="contact"
      className="mt-20 flex w-full scroll-mt-20 flex-col items-center sm:mt-28 sm:scroll-mt-28 ">
      <SectionHeading>Get in Touch with me</SectionHeading>
      <p className="max-w-lg text-center text-sm sm:text-base md:text-lg">
        If you want to give feedback or want to discuss, feel free to send me a
        message. The data from this form will go to my email.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
