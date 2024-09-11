import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <WrenchScrewdriverIcon className="h-14 w-14 rotate-[15deg]" />
      <p className="text-[44px]">BoxBox</p>
    </div>
  );
}
