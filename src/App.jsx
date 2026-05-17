import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Baby, 
  ShieldCheck, 
  Utensils, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ArrowRight,
  PlayCircle,
  Star,
  Milk
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Cargar script de Tally
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Masterclass:+Alimentación+Complementaria&dates=20260609T160000Z/20260609T173000Z&details=¡Llegó+el+día!+Conéctate+en+vivo+desde+el+enlace+de+acceso.&location=https://landing-masterclass-ac-doctora-vivi.netlify.app";

  return (
    <div className="min-h-screen bg-[#FEFBFA] font-sans text-gray-800">
      {}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');
        .font-serif { font-family: 'Fredoka', sans-serif; }
        .font-sans { font-family: 'Nunito', sans-serif; }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}} />

      {}
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
            className="flex items-center gap-2 bg-[#FF8FA3] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#ff7b92] transition-all shadow-lg shadow-[#FF8FA3]/20"
          >
            <Calendar className="w-4 h-4" /> Agregar a mi Calendario
          </a>
        </div>
      </header>

      {}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFE66D] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#4ECDC4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900">
                Pasa de la incertidumbre a la <span className="text-[#FF8FA3]">certeza total</span> al alimentar a tu bebé
              </h1>
              <span className="inline-block py-2 px-6 rounded-full bg-[#FFE66D]/40 text-yellow-900 font-bold text-lg md:text-xl mb-8 font-serif">
                🌟 Masterclass Gratuita en Vivo
              </span>
              <p className="font-sans text-lg md:text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                En esta clase gratuita, te enseñaré qué es la alimentación complementaria con sus diferentes métodos. Te mostraré todo lo que necesitarás para poder hacerlo de forma segura y sin preocupaciones.
              </p>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 font-bold font-sans text-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#4ECDC4]" /> Jueves, 24 de Octubre
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#4ECDC4]" /> 19:00 hrs
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full max-w-md" ref={formRef}>
              <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-2xl border-4 border-[#FFF0F3] relative overflow-hidden">
                <div className="absolute -top-1 -right-1 bg-[#4ECDC4] text-white font-bold py-1 px-4 rounded-bl-2xl shadow-md text-sm z-20">
                  ¡Cupos Limitados!
                </div>
                {/* Embed de Tally */}
                <iframe 
                  data-tally-src="https://tally.so/embed/EkZB0A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="350" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="Registro Masterclass"
                  className="z-10 relative"
                ></iframe>
                <p className="text-[10px] text-center text-gray-400 mt-2 flex items-center justify-center gap-1 italic">
                  <ShieldCheck className="w-3 h-3" /> Registro 100% seguro y privado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-[#FFF0F3] px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            ¿Sientes que hay demasiada información y <span className="text-[#FF8FA3]">no sabes por dónde empezar?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left font-sans">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-[#FF8FA3]">
              <p className="text-gray-600 font-medium flex gap-3">
                <span className="text-[#FF8FA3] font-bold text-2xl leading-none">✗</span>
                “Dale de comer tú en la boca para que no se ensucie”
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-[#FF8FA3]">
              <p className="text-gray-600 font-medium flex gap-3">
                <span className="text-[#FF8FA3] font-bold text-2xl leading-none">✗</span>
                ¿Te da terror el atragantamiento y nadie te ha explicado el "porqué" de las arcadas?
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-[#FF8FA3]">
              <p className="text-gray-600 font-medium flex gap-3">
                <span className="text-[#FF8FA3] font-bold text-2xl leading-none">✗</span>
                ¿No tienes claro cómo se integran sus tomas de leche (materna o fórmula) con la comida real?
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#4ECDC4]/20 flex items-center">
              <p className="text-gray-800 font-bold flex gap-3 items-center">
                <CheckCircle2 className="w-8 h-8 text-[#4ECDC4] flex-shrink-0" />
                Si algo de esto resuena contigo, esta clase es para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-bold tracking-wider uppercase text-sm mb-2 block">Lo que descubriremos juntos</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              El mapa paso a paso para una <br className="hidden md:block"/> Alimentación Complementaria Segura
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#FF8FA3]/20 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-6 h-6 text-[#FF8FA3]" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">Hitos y Biología</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Descubre por qué la edad no lo es todo. Aprenderás sobre la asfixia postural, el control cefálico y el "sellado intestinal".
              </p>
            </div>

            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-2xl flex items-center justify-center mb-6">
                <Utensils className="w-6 h-6 text-[#4ECDC4]" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">Métodos (BLW vs Papillas)</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Analizaremos pros y contras del método Tradicional, el BLW y el método BLISS para que tomes una decisión informada.
              </p>
            </div>

            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#FFE66D]/30 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">La Regla 90-90-90</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Te enseñaré qué buscar en una silla de comer segura y por qué el reposapiés es innegociable para evitar riesgos.
              </p>
            </div>

            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#FF8FA3]/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#FF8FA3]" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">Materiales Seguros</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Aprende a elegir utensilios libres de tóxicos (BPA, PVC) y por qué decirle adiós a los vasitos con boquilla.
              </p>
            </div>

            <div className="bg-[#FEFBFA] p-8 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-2xl flex items-center justify-center mb-6">
                <Milk className="w-6 h-6 text-[#4ECDC4]" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">Sincronía con la Leche</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Cómo integrar las tomas de leche materna o fórmula con los sólidos para asegurar que tu bebé reciba todos los nutrientes sin estrés ni rechazos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-[#FEFBFA] px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-pink-50 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5">
              <div className="aspect-[4/5] bg-[#FFF0F3] rounded-[2rem] overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://i.ibb.co/84MwjgtX/FOTO-SKOOL-DRA-VIVI-74-M08350-B.png" 
                  alt="Dra. Vivi Franco" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                👋🏼 ¡Hola! Soy la <span className="text-[#FF8FA3]">Dra. Vivi Franco</span>
              </h2>
              <div className="font-sans text-lg text-gray-600 font-medium space-y-6 leading-relaxed">
                <p>
                  Soy médico experta en neurodesarrollo, lactancia y nutrición infantil; y también soy mamá de dos.
                </p>
                <p>
                  Yo también estuve donde estás ahora: Perdida antes de empezar la alimentación complementaria. Estaba frustrada porque tenía información contradictoria de todas partes: internet, familiares, amigas y hasta colegas.
                </p>
                <p>
                  Había mucha teoría sobre cómo alimentar a un bebé, pero nadie me podía explicar el porqué de esas decisiones. Fue entonces cuando tomé la decisión de estudiar y formarme de la mejor manera para poder hacer lo mejor por mis bebés.
                </p>
                <p>
                  Y, al darme cuenta de que muchas otras mamás estaban en la misma situación, decidí crear este espacio para que puedan tener la tranquilidad de que pueden darles lo mejor a sus bebés, entendiendo el porqué detrás de cada paso.
                </p>
                <p className="text-gray-800 font-bold">
                  ¡Con mi contenido y acompañamiento, lograremos darle la alimentación adecuada para el mejor desarrollo de tu bebé! 🥰
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-[#FF8FA3] px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Este es el inicio de una relación saludable de tu bebé con su comida
          </h2>
          <button 
            onClick={scrollToForm}
            className="bg-white text-[#FF8FA3] font-sans font-bold text-xl px-12 py-5 rounded-[2rem] shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 w-full md:w-auto inline-flex items-center justify-center gap-3 mt-4"
          >
            Quiero mi acceso gratuito <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {}
      <footer className="bg-[#FEFBFA] py-10 border-t border-gray-100 text-center font-sans text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Heart className="w-4 h-4 text-[#FF8FA3] fill-current" />
             <span className="font-serif font-bold text-gray-700">Dra. Vivi Franco</span>
          </div>
          <p>© {new Date().getFullYear()} Dra. Vivi Franco. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-400 max-w-lg mx-auto">
            Esta clase tiene fines educativos y no reemplaza la consulta pediátrica individualizada. Tus datos están protegidos según nuestra política de privacidad.
          </p>
        </div>
      </footer>
    </div>
  );
}
