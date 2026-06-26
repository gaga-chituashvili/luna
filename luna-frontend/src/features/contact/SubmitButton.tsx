import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <Button
      variant="default"
      type="submit"
      disabled={isSubmitting}
      className="
        w-full md:w-auto
        px-10 md:px-12
        py-3
        rounded-full
        bg-[#7a4e3a]
        text-white
        flex items-center justify-center
        hover:bg-[#8b5a45]
        active:scale-95
        transition-all
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:bg-[#7a4e3a]
      "
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}
