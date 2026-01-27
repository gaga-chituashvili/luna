import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-full px-6 py-3 bg-[#6b3f2b] text-white hover:bg-[#5a3324]",
        destructive:
          "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "rounded-full px-6 py-3 border-[#6b3f2b] text-[#6b3f2b] hover:bg-[#6b3f2b] hover:text-white",
        secondary:
          "bg-zinc-200 text-black hover:bg-zinc-300",
        ghost:
          "hover:bg-zinc-100",
        link:
          "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
