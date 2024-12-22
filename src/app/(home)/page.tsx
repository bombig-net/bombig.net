import Placeholder from '@/components/sections/Placeholder';
import Hero from '@/app/(home)/sections/Hero';
import Portfolio from '@/app/(home)/sections/Portfolio';
import { Complexity } from '@/app/(home)/sections/Complexity';

export default function Home() {
  return (<>
    <Hero />
    <Portfolio />
    <Complexity />
    <Placeholder />
  </>);
}
