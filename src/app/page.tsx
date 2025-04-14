import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          A passionate, well-rounded Analyst committed to delivering high-quality solutions through meticulous analysis, strategic thinking, and collaborative problem-solving. With experience supporting enterprise applications and data-driven initiatives, I bring a unique blend of technical insight and business acumen to any team. Whether it&apos;s enhancing mobile app quality or leading system transformation, I thrive on turning complex challenges into meaningful results.
        </p>
      </section>
    </main>
  );
}
