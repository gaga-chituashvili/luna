type SuccessStateProps = {
  firstName: string;
};

export function SuccessState({ firstName }: SuccessStateProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, #2a1208 0%, #0d0704 60%, #000 100%)",
      }}
    >
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#7a3e1e" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2
          className="text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Registration complete!
        </h2>
        <p style={{ color: "#a08070" }} className="mb-8">
          Welcome aboard, {firstName}!
        </p>

        <a
          href="/login"
          className="px-8 py-3 rounded-full text-sm font-semibold text-white inline-block transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#7a3e1e" }}
        >
          Sign in
        </a>
      </div>
    </div>
  );
}
