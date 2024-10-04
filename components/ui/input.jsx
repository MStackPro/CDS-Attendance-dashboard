import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-8 w-fit rounded-md transition-colors duration-500 dark:bg-lightGray border border-input bg-lightGray px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
