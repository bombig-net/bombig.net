import Hero from '@/app/(home)/sections/Hero';
import Portfolio from '@/app/(home)/sections/Portfolio';
import Challenge from '@/app/(home)/sections/Challenge';
import Reward from '@/app/(home)/sections/Reward';
import Testimonials from '@/app/(home)/sections/Testimonials';
import Benefits from '@/app/(home)/sections/Benefits';
import Solutions from '@/app/(home)/sections/Solutions';

export default function Home() {
  return (<>
    <Hero />
    <Portfolio />
    <Challenge />
    <Reward />
    <Testimonials />
    <Benefits />
    <Solutions />
    <div className="min-h-screen"></div>
  </>);
}
