import { DashboardNav } from "@/components/dashboard-nav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-blue-700">
      
      <DashboardNav />

      {children}
    </section>
  )
}
