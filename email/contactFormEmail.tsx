import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormProps = {
  message: string;
  sender: string;
};

const ContactFormEmail = ({ message, sender }: ContactFormProps) => {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from personal website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-8">
          <Container>
            <Section className="rounded-lg border border-gray-600 bg-white px-10 py-5">
              <Heading className="leading-tight">
                You have a following message from the contact form{' '}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
