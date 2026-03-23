import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const steps = [
  {
    period: '2023 — presente',
    role: 'Diretora do Núcleo de Avaliação Neuropsicológica',
    place: 'Associação Allos',
    desc: 'Coordeno processos avaliativos, supervisiono profissionais em formação e contribuo para tornar a avaliação neuropsicológica mais acessível e humanizada. É onde prática clínica, formação e responsabilidade social caminham juntas.',
    accent: 'cornell',
  },
  {
    period: '2023 — presente',
    role: 'Avaliação Neuropsicológica Clínica',
    place: 'Prática Clínica',
    desc: 'Atuo com avaliação neuropsicológica de crianças, adolescentes e adultos, unindo rigor científico à escuta sensível de cada história. Cada avaliação é uma investigação — e cada pessoa, um universo.',
    accent: 'salmon',
  },
  {
    period: 'Graduação',
    role: 'Monitoria em Avaliação Psicológica',
    place: 'LEAPS — PUC Minas',
    desc: 'No Laboratório de Estudos em Avaliação Psicológica, aprofundei conhecimentos em instrumentos e técnicas de avaliação. Foi ali que a base científica da minha prática começou a se consolidar.',
    accent: 'moss',
  },
  {
    period: 'Graduação',
    role: 'Duas Iniciações Científicas',
    place: 'CTMM — UFMG',
    desc: 'Desenvolvi duas pesquisas com foco em avaliação neuropsicológica no Centro de Tecnologia em Medicina Molecular. A pesquisa me ensinou que o rigor metodológico é indissociável do cuidado com o outro.',
    accent: 'citron',
  },
  {
    period: 'Formação',
    role: 'Psicóloga',
    place: 'PUC Minas — CRP 04/84772',
    desc: 'Formada em Psicologia pela Pontifícia Universidade Católica de Minas Gerais, onde construí uma base sólida que hoje sustenta cada avaliação, cada devolutiva, cada encontro.',
    accent: 'cornell',
  },
]

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="py-28 md:py-36 px-6 md:px-16 lg:px-20 bg-surface-warm">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-salmon">
            Trajetória
          </span>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-medium text-bean tracking-[-0.02em] mt-5 mb-5">
            Os caminhos que a vida
            <br />
            <em className="italic font-normal text-cornell">percorreu</em> em mim
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-6 h-[1px] bg-cornell/25" />
            <span className="w-[5px] h-[5px] rounded-full bg-citron/40" />
            <span className="w-6 h-[1px] bg-cornell/25" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-[1px] bg-bean/8" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                variants={fadeUp}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-[1] shrink-0 mt-1.5">
                  <div className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full border-2 ${
                    step.accent === 'cornell' ? 'border-cornell bg-cornell/20' :
                    step.accent === 'salmon' ? 'border-salmon bg-salmon/20' :
                    step.accent === 'moss' ? 'border-moss bg-moss/20' :
                    'border-citron bg-citron/20'
                  }`} style={{ marginLeft: '13px' }} />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <span className={`font-body text-[0.68rem] font-medium uppercase tracking-[0.15em] ${
                      step.accent === 'cornell' ? 'text-cornell/70' :
                      step.accent === 'salmon' ? 'text-salmon' :
                      step.accent === 'moss' ? 'text-moss' :
                      'text-citron/80'
                    }`}>
                      {step.period}
                    </span>
                    <span className="text-text-muted/40 text-[0.6rem]">●</span>
                    <span className="font-body text-[0.72rem] font-normal text-text-muted tracking-[0.02em]">
                      {step.place}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.2rem] md:text-[1.3rem] font-semibold text-bean mb-3 tracking-[-0.01em]">
                    {step.role}
                  </h3>
                  <p className="font-body text-[0.88rem] font-light text-text-secondary leading-[1.85] max-w-[55ch]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
