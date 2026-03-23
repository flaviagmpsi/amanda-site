import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center bg-surface-base">
      {/* Background decorative elements */}
      <div
        className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, var(--color-cornell) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, var(--color-citron) 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-20 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Text content */}
          <div className="relative z-[2] w-full lg:w-[55%] text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-[0.7rem] font-normal uppercase tracking-[0.22em] text-salmon mb-8"
            >
              Psicóloga · Avaliação Neuropsicológica · CRP 04/84772
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-[clamp(2.6rem,5vw,4.2rem)] font-medium leading-[1.0] text-bean mb-7 tracking-[-0.03em]"
            >
              Honrar o ontem
              <br />
              para{' '}
              <em className="italic font-normal text-cornell">florir</em>
              <br />
              o agora.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
            >
              <span className="w-8 h-[2px] bg-cornell/40 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-citron/50" />
              <span className="w-8 h-[2px] bg-moss/30 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-[1rem] font-light text-text-secondary max-w-[46ch] leading-[1.85] mb-5 mx-auto lg:mx-0"
            >
              O passado não é um lugar de morada, mas um baú de tesouros. Entendo a neuropsicologia como o mapa dos caminhos que a vida percorreu dentro de nós — com rigor científico e delicadeza.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-body text-[0.9rem] font-light text-text-muted max-w-[46ch] leading-[1.8] mb-10 mx-auto lg:mx-0"
            >
              Avaliação neuropsicológica de crianças, adolescentes e adultos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="#contato"
                className="font-body text-[0.8rem] font-medium uppercase tracking-[0.12em] text-white bg-cornell border-none py-4 px-10 rounded-full cursor-pointer transition-all duration-400 no-underline inline-block hover:bg-bean hover:-translate-y-[1px] hover:shadow-[0_10px_35px_rgba(182,33,33,0.2)]"
              >
                Agendar Avaliação
              </a>
            </motion.div>
          </div>

          {/* Photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] mx-auto lg:mx-0 z-[1]"
          >
            {/* Decorative frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-citron/30 rounded-[2rem] pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-full h-full border border-salmon/20 rounded-[2rem] pointer-events-none" />

            <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}foto-amanda.jpeg`}
                alt="Amanda — Psicóloga, Avaliação Neuropsicológica"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-bean/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <span className="font-body text-[0.65rem] font-medium uppercase tracking-[0.18em] text-salmon/80">Neuropsicóloga</span>
              <span className="font-body text-[0.65rem] text-citron/50 mx-2">·</span>
              <span className="font-display text-[0.85rem] font-normal text-surface-base/80">CRP 04/84772</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
