import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NoticePatientPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emalya-blue mb-6">
              ÉMALYA – NOTICE PATIENT
            </h1>
            <h2 className="text-xl md:text-2xl text-center mb-4">
              Conseils d&apos;entretien après votre soin de facettes en composite
            </h2>
            <p className="text-center text-lg mb-8">
              Merci pour votre confiance.
            </p>
            <p className="mb-8">
              Vous venez de bénéficier d&apos;un soin esthétique innovant avec la méthode ÉMALYA.
              Pour garantir la durabilité, la beauté et le confort de vos facettes en composite,
              voici nos recommandations simples à suivre dès maintenant.
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">1. Hygiène quotidienne</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Brossez-vous les dents au moins deux fois par jour, avec une brosse à poils souples.</li>
                <li>Utilisez un dentifrice non abrasif (évitez les dentifrices blanchissants ou à base de bicarbonate).</li>
                <li>Complétez le brossage par du fil dentaire ou des brossettes interdentaires.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">2. Alimentation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Évitez pendant les 48 premières heures les aliments très colorants (café, thé, vin rouge, curry, fruits rouges).</li>
                <li>Évitez de croquer dans des aliments très durs (glace, noyaux, ongles, stylos, etc.).</li>
                <li>Privilégiez une alimentation souple les premiers jours, le temps que la résine se stabilise pleinement.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">3. Bruxisme (grincement des dents)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Si vous avez tendance à grincer des dents la nuit, une gouttière nocturne vous a peut-être été prescrite. Portez-la régulièrement.</li>
                <li>Si ce n&apos;est pas encore le cas, parlez-en à votre praticien pour évaluer la nécessité d&apos;en porter une.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">4. Réparabilité et suivi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vos facettes sont réparables et polissables en cas de choc ou d&apos;usure.</li>
                <li>Si vous ressentez une gêne, une modification de surface, ou si vous remarquez un éclat : contactez-nous rapidement pour un ajustement.</li>
                <li>Un polissage professionnel annuel est recommandé pour conserver l&apos;éclat et lisser les microsurfaces.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">5. Rendez-vous de contrôle</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Un contrôle est recommandé dans 6 à 12 mois après la pose, puis selon les recommandations de votre praticien.</li>
                <li>Cela permet de s&apos;assurer que tout reste parfaitement en place et que votre sourire conserve son harmonie.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
