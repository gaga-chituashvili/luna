import { motion } from "framer-motion";
import { Button } from "../component/ui/Button";
import { useNavigate } from "@tanstack/react-router";
import { ROUTES } from "../routes/paths";

export const RegistrationComingSoon = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black via-[#1a120e] to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-semibold mb-4"
      >
        Registration <span className="text-[#B8735A]">Coming Soon</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl text-white/70 text-lg md:text-xl mb-10"
      >
        We're working on a seamless registration experience for Luna coffee
        lovers. Stay tuned — it will be available very soon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button onClick={() => navigate({ to: ROUTES.home })}>
          Back to Home
        </Button>
      </motion.div>
    </section>
  );
};
