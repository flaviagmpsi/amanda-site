import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    num: '01',
    title: 'Avaliação Neuropsicológica Infantil',
    desc: 'Investigação do desenvolvimento cognitivo, atencional, de linguagem e comportamental em crianças. Um olhar cuidadoso que respeita o tempo e a singularidade de cada criança.',
  },
  {
    num: '02',
    title: 'Avaliação de Adolescentes',
    desc: 'Avaliação das funções executivas, memória, atenção e aprendizagem durante a fase de transição. Compreender o funcionamento cognitivo para orientar escolhas e apoiar o desenvolvimento.',
  },
  {
    num: '03',
    title: 'Avaliação de Adultos',
    desc: 'Mapeamento do funcionamento cognitivo incluindo atenção, memória, funções executivas e raciocínio. Indicada para TDAH, queixas cognitivas e acompanhamento clínico.',
  },
  {
    num: '04',
    title: 'Devolutiva e Orientação',
    desc: 'Após a avaliação, uma devolutiva detalhada e acolhedora com orientações para família, escola e profissionais. Cada resultado traduzido com clareza e sensibilidade.',
  },
  {
    num: '05',
    title: 'Reabilitação Neuropsicológica',
    desc: 'Programas de estimulação cognitiva baseados nos resultados da avaliação, para potencializar funções preservadas e desenvolver estratégias compensatórias.',
  },
]

export default function Services() {
  const featured = services[0]
  const rest = services.slice(1)

  return (
    <section id="servicos" className="py-28 md:py-36 px-6 md:px-16 lg:px-20 bg-surface-base">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.15 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="text-center max-w-[560px] mx-auto mb-18"
        >
          <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-salmon">
            Serviços
          </span>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-medium text-bean tracking-[-0.02em] mt-5 mb-4">
            Cada avaliação é um
            <br />
            <em className="italic font-normal text-cornell">mapa</em> dos caminhos da vida
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-6 h-[1px] bg-cornell/25" />
            <span className="w-[5px] h-[5px] rounded-full bg-citron/40" />
            <span className="w-6 h-[1px] bg-cornell/25" />
          </div>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          variants={fadeUp}
          className="mb-7 mt-16"
        >
          <div className="bg-surface-warm/70 border border-bean/6 rounded-2xl p-8 md:p-10 transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default hover:bg-surface-blush hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(44,22,19,0.06)] group lg:flex lg:items-center lg:gap-10">
            <div className="font-display text-[3.5rem] lg:text-[5rem] font-light leading-none mb-4 lg:mb-0 transition-colors duration-400 text-cornell/12 group-hover:text-cornell lg:min-w-[120px] lg:text-center shrink-0">
              {featured.num}
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] lg:text-[1.7rem] font-semibold text-bean mb-3 tracking-[-0.01em]">
                {featured.title}
              </h3>
              <p className="font-body text-[0.92rem] text-text-secondary font-light leading-[1.8] max-w-[60ch]">
                {featured.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Remaining cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {rest.map((s, i) => (
            <div
              key={s.num}
              className={`bg-surface-warm/70 border border-bean/6 rounded-2xl p-8 transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default hover:bg-surface-blush hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(44,22,19,0.06)] group ${
                i % 2 !== 0 ? 'md:mt-8' : ''
              }`}
            >
              <div className="font-display text-[2.2rem] font-light leading-none mb-5 transition-colors duration-400 text-cornell/15 group-hover:text-cornell">
                {s.num}
              </div>
              <h3 className="font-display text-[1.3rem] font-semibold text-bean mb-3 tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="font-body text-[0.88rem] text-text-secondary font-light leading-[1.75] max-w-[45ch]">
                {s.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
