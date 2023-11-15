import { FC } from "react";

interface ErrorProps {
  errors: string[];
  clear: () => void;
}

const Errors: FC<ErrorProps> = ({ errors, clear }) => {
  return (
    <div
      className="relative rounded border border-accent bg-accent px-4 py-3 text-accent-foreground"
      role="alert"
    >
      <strong className="font-bold">Oops!</strong>
      <span className="block sm:ml-2 sm:inline">
        {errors.map((error) => error)}
      </span>
      <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
        <svg
          onClick={clear}
          className="h-6 w-6 fill-current text-primary"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export default Errors;
