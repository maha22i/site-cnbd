import { unstable_setRequestLocale } from "next-intl/server";
import SAVMaintenanceClient from '@/components/pages/SAVMaintenanceClient';

export default function SAVMaintenancePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  return <SAVMaintenanceClient />;
}