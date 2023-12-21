'use server';

import { getErrorMessage, validateStringValue } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '../email/contactFormEmail';
// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend();

export const handleSendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const email = formData.get('email');

  if (!validateStringValue(message, 500)) {
    return {
      error: 'Message is invalid',
    };
  }

  if (!validateStringValue(email, 5000)) {
    return {
      error: 'Email is invalid',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'imamsulthoni.amd@gmail.com',
      subject: 'Message from Contact Form',
      reply_to: email as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        sender: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
