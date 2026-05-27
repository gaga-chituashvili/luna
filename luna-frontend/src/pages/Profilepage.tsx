import { useAuth } from "@/api/api /hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { ROUTES } from "@/routes/paths";
import { useEffect } from "react";
import { User, Mail, AtSign, Calendar, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: ROUTES.login });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at 60% 20%, #2a1208 0%, #0d0704 60%, #000 100%)",
        }}
      >
        <svg className="animate-spin w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#c87941"
            strokeWidth="3"
            strokeOpacity="0.25"
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="#c87941"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (!user) return null;

  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const fields = [
    {
      icon: <User className="w-4 h-4" />,
      label: "Full Name",
      value: user.fullName,
    },
    {
      icon: <AtSign className="w-4 h-4" />,
      label: "Username",
      value: `@${user.username}`,
    },
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: user.email },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Date of Birth",
      value: user.birthDate
        ? new Date(user.birthDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "Not provided",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-20"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, #2a1208 0%, #0d0704 60%, #000 100%)",
      }}
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4"
            style={{ backgroundColor: "#7a3e1e" }}
          >
            {initials}
          </div>
          <h1
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {user.fullName}
          </h1>
          <p className="text-sm mt-1" style={{ color: "#7a6055" }}>
            @{user.username}
          </p>
        </div>

        <div
          className="rounded-2xl p-8 space-y-5"
          style={{
            backgroundColor: "#0f0805",
            border: "1px solid #2e1a0e",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          }}
        >
          {fields.map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#1a0e08", color: "#c87941" }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "#5a4035" }}>
                  {label}
                </p>
                <p className="text-sm font-medium" style={{ color: "#f0e6de" }}>
                  {value}
                </p>
              </div>
            </div>
          ))}

          <div style={{ borderTop: "1px solid #2e1a0e" }} className="pt-4">
            <button
              onClick={logout}
              className="w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                backgroundColor: "#1a0e08",
                color: "#f87171",
                border: "1px solid #3a1010",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2a1010")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1a0e08")
              }
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
