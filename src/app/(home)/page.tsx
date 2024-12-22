import Hero from '@/app/(home)/sections/Hero';
import Portfolio from '@/app/(home)/sections/Portfolio';
import Challenge from '@/app/(home)/sections/Challenge';
import Reward from '@/app/(home)/sections/Reward';

export default function Home() {
  return (<>
    <Hero />
    <Portfolio />
    <Challenge />
    <Reward />
    <div className="min-h-screen"></div>
  </>);
}
