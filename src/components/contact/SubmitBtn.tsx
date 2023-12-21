import { Send } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from '../Button';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="highlight"
      disabled={pending}
      className="group inline-flex w-max items-center rounded-lg text-sm transition-all duration-300 hover:scale-110 hover:shadow-xl focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-60 sm:text-base">
      {pending ? 'Please wait...' : 'Send Form'}{' '}
      <Send className="ms-4 h-4 w-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </Button>
  );
};

export default SubmitBtn;
