import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const badges = [
  'PUC Minas',
  'Avaliação Neuropsicológica',
  'Associação Allos',
  'LEAPS — PUC Minas',
  'CTMM — UFMG',
]

export default function About() {
  return (
    <section
      id="sobre"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-20 bg-surface-warm"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-salmon">
            Sobre mim
          </span>
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-medium leading-[1.2] text-bean tracking-[-0.02em] mt-5">
            O corpo traduz o que
            <br />
            <em className="italic font-normal text-cornell">a boca cala.</em>
          </h2>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          variants={fadeUp}
          className="drop-cap font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left mb-10 max-w-[65ch] mx-auto"
        >
          Minha trajetória na psicologia começou com um encantamento genuíno: compreender como o cérebro traduz o que a boca cala. O pulsar do coração, o aperto no peito, o tremor das mãos — são curiosidades vivas da nossa biologia respondendo à nossa história emocional. Foi essa fascinação que me levou à avaliação neuropsicológica.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 py-8 mb-10"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full bg-surface-base/80 border border-bean/8 px-5 py-2 font-body text-[0.76rem] font-normal text-bean tracking-[0.02em]"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-cornell/40 shrink-0" />
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Second paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          variants={fadeUp}
          className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left mb-8 max-w-[65ch] mx-auto"
        >
          Me formei em Psicologia pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas), onde tive a oportunidade de ser monitora no Laboratório de Estudos em Avaliação Psicológica (LEAPS) e de desenvolver duas iniciações científicas com foco em avaliação neuropsicológica no Centro de Tecnologia em Medicina Molecular (CTMM) da UFMG.
        </motion.p>

        {/* Third paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeUp}
          className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left max-w-[65ch] mx-auto"
        >
          Hoje, atuo como Diretora do Núcleo de Avaliação Neuropsicológica na Associação Allos e realizo avaliações de crianças, adolescentes e adultos desde 2023. Meu compromisso é com uma psicologia que desacelera — que une o rigor do conhecimento sobre o cérebro à delicadeza de um abraço na alma.
        </motion.p>
      </div>
    </section>
  )
}
