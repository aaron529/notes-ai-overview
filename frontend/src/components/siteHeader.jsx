import MainNav from './mainNav';
import MobileNav from './mobileNav';

export default function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}