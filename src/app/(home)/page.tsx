import Hero from '@/app/(home)/sections/Hero';
import Portfolio from '@/app/(home)/sections/Portfolio';
import Challenge from '@/app/(home)/sections/Challenge';
import Reward from '@/app/(home)/sections/Reward';
import Testimonials from '@/app/(home)/sections/Testimonials';

export default function Home() {
  return (<>
    <Hero />
    <Portfolio />
    <Challenge />
    <Reward />
    <Testimonials />
    <div className="min-h-screen"></div>
  </>);
}
