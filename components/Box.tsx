import { twMerge } from "tailwind-merge";

interface IBox {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<IBox> = ({ children, className }) => {
  return <div className={twMerge(`
  bg-neutral-900
    rounded-lg
    h-fit
    w-full  
  `,
  className
  )}>
    {children}
  </div>;
};

export default Box;
