import { type VariantProps, cva } from "class-variance-authority";
import {
  RiForbid2Line,
  RiInformationLine,
  RiLightbulbLine,
} from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";

const IconMap = {
  default: <RiLightbulbLine />,
  error: <RiForbid2Line />,
  info: <RiInformationLine />,
  warning: <IoWarningOutline />,
  success: <FaCheck />,
};

const TitleMap = {
  default: "Tip",
  error: "Error",
  info: "Info",
  warning: "Warning",
  success: "Success",
};

const calloutVariants = cva(
  "mt-6 flex flex-col overflow-x-auto rounded-md border p-2 text-base",
  {
    variants: {
      variant: {
        default:
          "border-violet-700 bg-violet-400/40 text-violet-800 dark:border-violet-500/40 dark:bg-violet-900/40 dark:text-violet-300",
        info: "border-blue-700 bg-blue-400/40 text-blue-800 dark:border-blue-500/40 dark:bg-blue-900/40 dark:text-blue-300",
        error:
          "border-rose-700 bg-rose-400/40 text-rose-800 dark:border-rose-500/40 dark:bg-rose-900/40 dark:text-rose-300",
        warning:
          "border-yellow-700 bg-yellow-400/40 text-yellow-800 dark:border-yellow-500/40 dark:bg-yellow-900/40 dark:text-yellow-300",
        success:
          "border-green-700 bg-green-400/40 text-green-800 dark:border-emerald-500/40 dark:bg-emerald-900/40 dark:text-emerald-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CalloutProps extends VariantProps<typeof calloutVariants> {
  children: React.ReactNode;
}

export function Callout({ children, variant = "default" }: CalloutProps) {
  return (
    <div className={cn("mb-4",calloutVariants({ variant }))}>
      <div className="flex items-center">
        <div className="select-none mr-2 text-[18px]">{IconMap[variant!]}</div>
        <div className="font-semibold uppercase text-sm">
          {TitleMap[variant!]}
        </div>
      </div>
      <div className="w-full min-w-0 leading-7 [&>p]:m-0 [&_strong]:!text-inherit text-base pl-[24px]">
        {children}
      </div>
    </div>
  );
}
