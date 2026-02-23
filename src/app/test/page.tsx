import Header from '../../components/Header';
import ErrorPage from '../../components/ErrorPage';
import Footer from '../../components/Footer';

export default function TestPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full px-4 pb-12">
        <div className="max-w-4xl mx-auto mt-8 mb-4">
          <h1 className="text-3xl font-black uppercase text-[#FFFF00] border-b-2 border-[#FFFF00] inline-block pb-1">Error Test Environment</h1>
          <p className="mt-2 text-[#33FF00]/70">Test page specifically designed to trigger rendering errors using missing packages.</p>
        </div>
        <ErrorPage />
      </main>
      <Footer />
    </>
  );
}