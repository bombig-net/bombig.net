import Placeholder from '@/components/sections/Placeholder';
import Image from 'next/image';

export default function Home() {
  return (<>
    <div className="relative h-screen">
      <Image className="w-full h-full object-cover" src="https://picsum.photos/id/122/1920/1080" alt="hero image" width={1920} height={1080} />
    </div>
    <Placeholder />
    <Placeholder />
    <Placeholder />
  </>);
}
