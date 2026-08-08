import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const registrationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const loadTally = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof window.Tally !== 'undefined') {
      loadTally();
    } else if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = scriptUrl;
      s.onload = loadTally;
      s.onerror = loadTally;
      document.body.appendChild(s);
    }
  }, []);

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Masterclass:+Alimentaci%C3%B3n+Complementaria&dates=20260823T220000Z/20260823T233000Z&details=%C2%A1Lleg%C3%B3+el+d%C3%ADa%21+Con%C3%A9ctate+en+vivo+desde+el+enlace+de+acceso.&location=https://landing-masterclass-ac-doctora-vivi.netlify.app";

  return (
    <div className="min-h-screen bg-[#FEFBFA] font-sans text-gray-800">
      {/* Custom Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');
        .font-serif { font-family: 'Fredoka', sans-serif; }
        .font-sans { font-family: 'Nunito', sans-serif; }
      `}} />

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#FF8FA3] fill-current" />
            <span className="font-serif font-semibold text-xl text-gray-800 tracking-tight">Dra. Vivi Franco</span>
          </div>
          <a 
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FF8FA3] text-white hover:bg-[#e07b8f] font-extrabold px-5 py-2.5 rounded-full transition-all text-sm md:text-base shadow-sm"
          >
            <Calendar className="w-4 h-4" /> Agregar a mi Calendario
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
        {/* Decorative background blur blobs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFE66D] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#4ECDC4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
                Pasa de la incertidumbre a la <span className="text-[#FF8FA3]">certeza total</span> al alimentar a tu bebé
              </h1>

              {/* Masterclass Badge */}
              <div className="mb-6">
                <span className="bg-[#FFE66D]/40 text-yellow-900 font-serif font-normal text-xl md:text-2xl px-4 py-1.5 inline-block rounded-sm">
                  Clase Gratuita en Vivo
                </span>
              </div>

              <p className="font-sans text-base md:text-lg text-gray-600 mb-6 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                En esta clase gratuita, te enseñaré qué es la alimentación complementaria con sus diferentes métodos. Te mostraré todo lo que necesitarás para poder hacerlo de forma segura y sin preocupaciones.
              </p>
              
              {/* Event details summary */}
              <div className="mt-6 flex flex-col items-center lg:items-start gap-4">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700 font-bold font-sans text-base md:text-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#4ECDC4]" /> Domingo, 23 de Agosto
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#4ECDC4]" /> 17:00 hrs (COL / ECU / PER / PAN)
                  </div>
                </div>

                {/* International schedules breakdown (Desktop only) */}
                <div className="hidden lg:block bg-[#FFF0F3] p-4 rounded-2xl border border-[#FF8FA3]/30 text-xs md:text-sm text-gray-600 font-sans w-full max-w-xl">
                  <p className="font-bold text-gray-800 mb-2 flex items-center gap-1">
                    🌐 Horarios internacionales:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium">
                    <div>🇲🇽/🇬🇹/🇨🇷 16:00 hrs (MEX / GTM / CRI)</div>
                    <div>🇨🇴/🇪🇨/🇵🇪/🇵🇦 17:00 hrs (COL / ECU / PER / PAN)</div>
                    <div>🇻🇪/🇨🇱/🇩🇴 18:00 hrs (VEN / CHL / DOM)</div>
                    <div>🇦🇷/🇺🇾 19:00 hrs (ARG / URY)</div>
                    <div>🇺🇸 18:00 ET / 17:00 CT / 15:00 PT (USA)</div>
                  </div>
                  <div className="mt-3 text-xs text-gray-700 border-t border-[#FF8FA3]/20 pt-2.5 font-semibold leading-relaxed flex items-center gap-1">
                    🇪🇸/🇪🇺 Para España y el resto de Europa: la clase se transmitirá el Lunes 24 de Agosto a las 5PM
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Card with Tally */}
            <div className="lg:w-2/5 w-full max-w-md relative" ref={registrationRef}>
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border-4 border-[#FF8FA3] relative">
                <div className="absolute -top-5 -right-3 bg-[#FF8FA3] text-white font-serif font-bold text-sm py-1.5 px-4 rounded-full transform rotate-3 shadow-[0_0_18px_rgba(255,143,163,0.85)]">
                  ¡Cupos Limitados!
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 text-center text-gray-900">
                  Reserva tu acceso gratis 👇
                </h3>

                {/* Tally Embed */}
                <iframe 
                  data-tally-src="https://tally.so/embed/EkZB0A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="282" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="Registro Masterclass"
                ></iframe>

                <p className="text-xs text-center text-gray-400 mt-2 flex items-center justify-center gap-1 font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#4ECDC4]" /> Tus datos están 100% protegidos.
                </p>
              </div>
            </div>
          </div>

          {/* International schedules breakdown (Mobile only - placed after registration card) */}
          <div className="block lg:hidden mt-8 w-full max-w-xl mx-auto bg-[#FFF0F3] p-4 rounded-2xl border border-[#FF8FA3]/30 text-xs md:text-sm text-gray-600 font-sans">
            <p className="font-bold text-gray-800 mb-2 flex items-center gap-1">
              🌐 Horarios internacionales:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium">
              <div>🇲🇽/🇬🇹/🇨🇷 16:00 hrs (MEX / GTM / CRI)</div>
              <div>🇨🇴/🇪🇨/🇵🇪/🇵🇦 17:00 hrs (COL / ECU / PER / PAN)</div>
              <div>🇻🇪/🇨🇱/🇩🇴 18:00 hrs (VEN / CHL / DOM)</div>
              <div>🇦🇷/🇺🇾 19:00 hrs (ARG / URY)</div>
              <div>🇺🇸 18:00 ET / 17:00 CT / 15:00 PT (USA)</div>
            </div>
            <div className="mt-3 text-xs text-gray-700 border-t border-[#FF8FA3]/20 pt-2.5 font-semibold leading-relaxed flex items-center gap-1">
              🇪🇸/🇪🇺 Para España y el resto de Europa: la clase se transmitirá el Lunes 24 de Agosto a las 5PM
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#FFF0F3] px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-10 text-gray-900 leading-snug">
            ¿Sientes que hay demasiada información y <span className="text-[#FF8FA3]">no sabes por dónde empezar?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left font-sans">
            <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-400">
              <p className="text-gray-700 font-medium flex gap-3 text-sm md:text-base">
                <span className="text-red-500 font-black text-xl leading-none">❌</span>
                Te han dicho "Dale de comer tú en la boca para que no se ensucie".
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-400">
              <p className="text-gray-700 font-medium flex gap-3 text-sm md:text-base">
                <span className="text-red-500 font-black text-xl leading-none">❌</span>
                ¿Te da terror el atragantamiento y nadie te ha explicado el "porqué" de las arcadas?
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-400">
              <p className="text-gray-700 font-medium flex gap-3 text-sm md:text-base">
                <span className="text-red-500 font-black text-xl leading-none">❌</span>
                ¿No tienes claro cómo se integran sus tomas de leche (materna o fórmula) con la comida real?
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-400">
              <p className="text-gray-700 font-medium flex gap-3 text-sm md:text-base">
                <span className="text-red-500 font-black text-xl leading-none">❌</span>
                Estás cansada de escuchar consejos contradictorios de internet, de tu mamá o de tu suegra que solo te generan culpa e inseguridad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-400 md:col-span-2">
              <p className="text-gray-700 font-medium flex gap-3 text-sm md:text-base">
                <span className="text-red-500 font-black text-xl leading-none">❌</span>
                ¿Estás abrumada por la cantidad de sillas de comer y utensilios en el mercado y no sabes cuál es realmente seguro para su postura y salud?
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-[#4ECDC4] md:col-span-2">
              <p className="text-gray-800 font-bold flex gap-3 items-center text-sm md:text-base">
                <span className="text-2xl">✨</span>
                Si algo de esto resuena contigo, esta clase está diseñada exactamente para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-bold tracking-wider uppercase text-sm mb-2 block font-sans">
              Lo que descubriremos juntos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              El mapa paso a paso para una <br className="hidden md:block"/> Alimentación Complementaria Segura
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🛑</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">Cómo Prevenir el Atragantamiento</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Pautas clave para diferenciar una arcada fisiológica de un atragantamiento real, dominar cortes seguros y actuar con absoluta calma.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">Seguridad Alimentaria en Bebés</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Reglas fundamentales de conservación, preparación microbiológica adecuada de insumos e higiene para proteger su delicado sistema digestivo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">Hitos y Biología</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Descubre por qué la edad no lo es todo. Aprenderás sobre la asfixia postural, el control cefálico y el "sellado intestinal".
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🍲</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">Métodos (BLW vs Papillas)</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Analizaremos pros y contras del método Tradicional, el BLW y el método BLISS para que tomes una decisión informada.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">La Regla 90-90-90</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Te enseñaré qué buscar en una silla de comer segura y por qué el reposapiés es innegociable para evitar riesgos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">Materiales Seguros</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Aprende a elegir utensilios libres de tóxicos (BPA, PVC) y por qué decirle adiós a los vasitos con boquilla.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4">🍼</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">Sincronía con la Leche</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium">
                Cómo integrar las tomas de leche materna o fórmula con los sólidos para asegurar que reciba todos los nutrientes sin estrés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Speaker */}
      <section className="py-20 bg-[#EAF9F8] px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
            👋🏼 ¡Hola! Soy la Dra. Vivi Franco
          </h2>
          
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-[#4ECDC4]/20 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-[#FF8FA3] shadow-lg max-w-sm">
                <img 
                  src="https://i.ibb.co/N26QsCgp/Foto-Doctora-Vivi-Franco.jpg" 
                  alt="Dra. Vivi Franco" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="font-sans text-sm md:text-base text-gray-700 font-medium space-y-4 leading-snug">
                <p className="bg-[#FFF0F3] p-4 rounded-2xl border-l-4 border-[#FF8FA3] text-gray-800">
                  “Soy médico experta en neurodesarrollo, lactancia y nutrición infantil; y también soy mamá de dos.”
                </p>
                <p>
                  Yo también estuve donde estás ahora: perdida antes de empezar la alimentación complementaria. Estaba frustrada porque tenía información contradictoria de todas partes: internet, familiares, amigas y hasta colegas.
                </p>
                <p>
                  Había mucha teoría sobre cómo alimentar a un bebé, pero nadie me podía explicar el porqué de esas decisiones.
                </p>
                <p>
                  Fue entonces cuando tomé la decisión de estudiar y formarme de la mejor manera para poder hacer lo mejor por mes bebés. Y, al darme cuenta de que muchas otras mamás estaban en la misma situación, decidí crear este espacio para que puedan tener la tranquilidad de que pueden darles lo mejor a sus bebés, entendiendo el porqué detrás de cada paso.
                </p>
                <p className="font-bold text-[#FF8FA3] text-base pt-2">
                  ¡Con el contenido de este curso y mi acompañamiento en vivo, lograremos darle la alimentación adecuada para el mejor desarrollo de tu bebé! 🥰
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bottom */}
      <section className="py-20 bg-[#FF8FA3] px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Este es el inicio de una relación saludable de tu bebé con su comida
          </h2>
          <p className="font-sans text-lg text-white/90 font-medium mb-10 max-w-xl mx-auto">
            Asegura tu cupo en esta masterclass gratuita y aprende a dar este paso con absoluta tranquilidad y respaldo científico.
          </p>
          <button 
            onClick={scrollToRegistration}
            className="bg-white text-[#FF8FA3] font-sans font-bold text-lg md:text-xl px-10 py-4 rounded-[2rem] shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 w-full md:w-auto inline-flex items-center justify-center gap-3"
          >
            Quiero mi acceso gratuito <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FEFBFA] py-8 border-t border-gray-100 text-center font-sans text-gray-500 text-xs md:text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Dra. Vivi Franco. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-400">Esta clase tiene fines educativos y no reemplaza la consulta médica u odontológica individualizada.</p>
        </div>
      </footer>
    </div>
  );
}
