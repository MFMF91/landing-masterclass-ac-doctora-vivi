import React, { useState, useEffect } from 'react';
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
  Star
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para la sombra del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFBFA] font-sans text-gray-800">
      {/* Importar fuentes de Google */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');
        .font-serif { font-family: 'Fredoka', sans-serif; }
        .font-sans { font-family: 'Nunito', sans-serif; }
      `}} />

      {/* Barra superior / Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#FF8FA3] fill-current" />
            <span className="font-serif font-semibold text-xl text-gray-800 tracking-tight">Dra. Vivi Franco</span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-[#FFF0F3] text-[#FF8FA3] font-bold px-6 py-2.5 rounded-full hover:bg-[#ffe4e9] transition-colors">
            Reservar mi lugar <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFE66D] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#4ECDC4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#FFE66D]/30 text-yellow-800 font-bold text-sm mb-6 uppercase tracking-wider">
                🌟 Masterclass Gratuita en Vivo
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Pasa de la incertidumbre a la <span className="text-[#FF8FA3]">certeza total</span> al alimentar a tu bebé
              </h1>
              <p className="font-sans text-lg md:text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aprende los hitos del neurodesarrollo, la biología de su intestino y los métodos seguros (BLW, Papillas, Mixto) para que tu bebito disfrute la comida sin riesgos ni estrés.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto bg-[#FF8FA3] text-white font-sans font-bold text-lg px-10 py-5 rounded-[2rem] shadow-xl shadow-[#FF8FA3]/40 hover:scale-105 hover:bg-[#ff7b92] transition-all duration-300 flex items-center justify-center gap-3">
                  ¡Sí, quiero mi lugar gratis! <PlayCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 font-medium font-sans">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#4ECDC4]" /> Jueves, 24 de Octubre
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#4ECDC4]" /> 19:00 hrs (Hora Local)
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full max-w-md">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border-4 border-[#FFF0F3] relative">
                <div className="absolute -top-5 -right-5 bg-[#4ECDC4] text-white font-bold py-2 px-4 rounded-full transform rotate-3 shadow-md">
                  ¡Cupos Limitados!
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-6 text-center">Reserva tu acceso aquí 👇</h3>
                <form className="space-y-4 font-sans">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tu nombre (como mamá/papá)</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-[#FEFBFA] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8FA3] transition-all" placeholder="Ej. Camila" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tu mejor correo</label>
                    <input type="email" className="w-full px-5 py-4 rounded-2xl bg-[#FEFBFA] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8FA3] transition-all" placeholder="camila@email.com" />
                  </div>
                  <button type="button" className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-[#4ECDC4]/30 transition-all transform hover:-translate-y-1 mt-2">
                    Asegurar mi lugar
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Tus datos están 100% seguros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Empatía / Dolor */}
      <section className="py-24 bg-[#FFF0F3] px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            ¿Sientes que hay demasiada información y <span className="text-[#FF8FA3]">no sabes por dónde empezar?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left font-sans">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-gray-600 font-medium flex gap-3">
                <span className="text-[#FF8FA3] font-bold text-2xl">✗</span>
                ¿Te han dicho "ponle la comida en la boca, no dejes que se ensucie" pero sientes que hay una mejor forma?
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-gray-600 font-medium flex gap-3">
                <span className="text-[#FF8FA3] font-bold text-2xl">✗</span>
                ¿Te da terror el atragantamiento y nadie te ha explicado el "porqué" de las arcadas?
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-gray-600 font-medium flex gap-3">
                <span className="text-[#FF8FA3] font-bold text-2xl">✗</span>
                ¿No tienes claro cómo se integra su consumo de leche (materna o fórmula) con la comida real?
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#4ECDC4]/20">
              <p className="text-gray-800 font-bold flex gap-3 items-center">
                <CheckCircle2 className="w-8 h-8 text-[#4ECDC4] flex-shrink-0" />
                Si algo de esto resuena contigo, esta clase está diseñada exactamente para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Qué Aprenderás (El Valor) */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-bold tracking-wider uppercase text-sm mb-2 block">Lo que descubriremos juntos</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              El mapa paso a paso para una <br className="hidden md:block"/> Alimentación Complementaria Segura
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FEFBFA] p-10 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#FF8FA3]/20 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-[#FF8FA3]" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">¿Está realmente listo? La Biología</h3>
              <p className="font-sans text-gray-600 font-medium leading-relaxed">
                Descubre por qué la edad no lo es todo. Aprenderás sobre la asfixia postural, el control cefálico, el "sellado intestinal" y el reflejo de extrusión. Protegeremos sus vías respiratorias desde el día 1.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FEFBFA] p-10 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#4ECDC4]/20 rounded-2xl flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-[#4ECDC4]" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">El Método Ideal (BLW, Papillas, Mixto)</h3>
              <p className="font-sans text-gray-600 font-medium leading-relaxed">
                No hay un método único, hay un método para ti. Analizaremos los pros y contras del método Tradicional, el BLW y el método BLISS para que tomes una decisión informada, sin presiones.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FEFBFA] p-10 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#FFE66D]/30 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">La Regla 90-90-90 y el Entorno</h3>
              <p className="font-sans text-gray-600 font-medium leading-relaxed">
                Podemos tener el mejor brócoli orgánico, pero si el ambiente falla, el bebé no come. Te enseñaré qué buscar en una silla de comer segura y por qué el reposapiés es innegociable para evitar atragantamientos.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FEFBFA] p-10 rounded-[2rem] border border-[#FFF0F3] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#FF8FA3]/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#FF8FA3]" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">Utensilios Libres de Tóxicos</h3>
              <p className="font-sans text-gray-600 font-medium leading-relaxed">
                Aprende a elegir materiales libres de disruptores endocrinos (BPA, PVC). Descubre por qué debes decirle adiós definitivo a los vasitos con boquilla y cómo introducir el agua correctamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Autoridad / Sobre Mí */}
      <section className="py-24 bg-[#FEFBFA] px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-pink-50 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              {/* Placeholder para foto de la Dra. Vivi */}
              <div className="aspect-square bg-[#FFF0F3] rounded-[2rem] overflow-hidden relative border-4 border-white shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#FF8FA3] opacity-60">
                   <Heart className="w-16 h-16 mb-2" />
                   <span className="font-serif font-bold text-center px-4">Tu hermosa foto aquí<br/>(Dra. Vivi Franco)</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                ¡Hola! Soy la <span className="text-[#FF8FA3]">Dra. Vivi Franco</span>
              </h2>
              <div className="font-sans text-lg text-gray-600 font-medium space-y-4 leading-relaxed">
                <p>
                  Soy médico experta en neurodesarrollo y nutrición infantil, pero el título más importante que tengo es: <strong className="text-gray-800">mamá de dos pequeñitos.</strong>
                </p>
                <p>
                  Y quiero decirte algo: <strong>yo también estuve ahí.</strong> Cuando empecé con la alimentación de mi primer bebé, me sentía frustrada. Recibía consejos desde el amor ("dale solo papillas", "límpiale con cada bocado"), pero la ciencia médica me decía otra cosa. 
                </p>
                <p>
                  Nadie me explicaba el "porqué". Sentía que había mil cosas que aprender y no encontraba un solo lugar donde me dieran el paso a paso seguro, adaptado a mi bebé.
                </p>
                <p>
                  Por eso diseñé este espacio. Para darte la certeza científica y el abrazo de mamá que necesitas para disfrutar esta etapa increíble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Final / CTA Bottom */}
      <section className="py-24 bg-[#FF8FA3] px-6 text-center relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
           </svg>
        </div>
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            El tiempo vuela y tu bebito crece rápido.
          </h2>
          <p className="font-sans text-xl text-white/90 font-medium mb-10">
            Regálale un inicio seguro en su relación con la comida. Reserva tu lugar en la masterclass gratuita antes de que se agoten los cupos.
          </p>
          <button className="bg-white text-[#FF8FA3] font-sans font-bold text-xl px-12 py-5 rounded-[2rem] shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 w-full md:w-auto inline-flex items-center justify-center gap-3">
            Quiero mi acceso gratuito <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-6 text-white/80 font-sans text-sm flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> La clase será en vivo. ¡Anota la fecha en tu calendario!
          </p>
        </div>
      </section>

      {/* Footer Mínimo */}
      <footer className="bg-[#FEFBFA] py-8 border-t border-gray-100 text-center font-sans text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Dra. Vivi Franco. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-400">Esta clase tiene fines educativos y no reemplaza la consulta pediátrica individualizada.</p>
        </div>
      </footer>
    </div>
  );
}
