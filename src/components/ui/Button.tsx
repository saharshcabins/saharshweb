import { cn } from '@/utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={cn('px-4 py-2 bg-blue-500 text-white rounded', className)}>
      {children}
    </button>
  );
}
