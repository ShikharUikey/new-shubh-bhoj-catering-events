import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Cost Estimator Bhopal",
  description: "Calculate your premium wedding and corporate catering budget instantly. Shubh Bhoj offers transparent, customizable catering packages in Bhopal.",
};

export default function EstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
