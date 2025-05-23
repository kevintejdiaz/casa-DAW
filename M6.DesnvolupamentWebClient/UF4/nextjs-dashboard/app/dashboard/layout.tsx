import SideNav from '@/app/ui/dashboard/sidenav'
import { inter } from '@/app/ui/fonts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={[
        inter.className,
        'antialiased',
        'flex', 'h-screen', 'flex-col',
        'md:flex-row', 'md:overflow-hidden',
      ].join(' ')}
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <main
        className={[
          'flex-grow', 
          'p-6', 
          'md:overflow-y-auto', 
          'md:p-12'
        ].join(' ')}
      >
        {children}
      </main>
    </div>
  )
}
