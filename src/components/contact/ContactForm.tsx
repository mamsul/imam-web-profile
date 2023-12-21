'use client';

import toast from 'react-hot-toast';
import { handleSendEmail } from '../../../action/serverAction';
import SubmitBtn from './SubmitBtn';

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        const { error } = await handleSendEmail(formData);

        if (error) {
          toast.error(error);
        } else {
          toast.success('The form successfully sent to Imam');
        }
      }}
      className="flex w-full justify-center">
      <div className="mt-4 flex w-full flex-col gap-5 rounded-lg bg-[#EEE7DA]/40 p-2 backdrop-blur-sm sm:mt-8 sm:p-5 md:w-[39rem]">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm sm:text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            maxLength={500}
            className="defaultInputStyle h-12"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm sm:text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            maxLength={500}
            className="defaultInputStyle h-auto py-3"
            required></textarea>
        </div>
        <div className="w-max sm:w-[6rem]">
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
