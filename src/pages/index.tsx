import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const pensionCostInMillions = 13432.4;
  const millisecondsInJanuary = 31 * 24 * 60 * 60 * 1000;
  const costPerMillisecond =
    (pensionCostInMillions * 1e6) / millisecondsInJanuary;
  const costForElapsedTime = elapsedTime * costPerMillisecond;

  const formattedCost = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(costForElapsedTime);

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-black text-white ${inter.variable}`}
    >
      <div className="text-center">
        <motion.p
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {formattedCost}
        </motion.p>
        <motion.p
          className="text-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Gasto en pensiones desde que has entrado
        </motion.p>
      </div>
    </div>
  );
}
