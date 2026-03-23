import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const faqs = [
  {
    q: 'O que é avaliação neuropsicológica?',
    a: 'É uma investigação detalhada das funções cognitivas — como atenção, memória, linguagem, funções executivas e raciocínio — por meio de testes padronizados, observação clínica e entrevistas. O objetivo é compreender como o cérebro funciona na prática do dia a dia, identificando potencialidades e dificuldades.',
  },
  {
    q: 'Para quem é indicada a avaliação?',
    a: 'Para crianças com dificuldades de aprendizagem, atenção ou comportamento; adolescentes com desafios acadêmicos ou emocionais; e adultos investigando queixas cognitivas, TDAH, sequelas de lesões cerebrais ou condições neurológicas. Também é indicada para acompanhamento de tratamentos e planejamento de reabilitação.',
  },
  {
    q: 'Como funciona o processo de avaliação?',
    a: 'O processo inclui uma entrevista inicial (anamnese) para compreender a história do paciente, sessões de aplicação de testes neuropsicológicos, análise e integração dos resultados, elaboração de um relatório detalhado e uma sessão de devolutiva com o paciente e/ou família.',
  },
  {
    q: 'Quanto tempo dura uma avaliação completa?',
    a: 'Geralmente são necessárias de 4 a 8 sessões, cada uma com duração aproximada de 1 hora. O processo completo leva entre 3 e 6 semanas, dependendo da complexidade do caso e da idade do paciente.',
  },
  {
    q: 'O que acontece depois da avaliação?',
    a: 'É entregue um relatório completo com os resultados, conclusões diagnósticas e recomendações. Na sessão de devolutiva, os resultados são explicados de forma clara e acolhedora ao paciente e à família, com orientações para a escola, outros profissionais ou programas de reabilitação cognitiva.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="duvidas" className="py-28 md:py-36 px-6 md:px-16 lg:px-20 bg-surface-base">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-salmon">
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-medium text-bean tracking-[-0.02em] mt-5 mb-4">
            Perguntas que você
            <br />
            pode estar se fazendo
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-6 h-[1px] bg-cornell/25" />
            <span className="w-[5px] h-[5px] rounded-full bg-citron/40" />
            <span className="w-6 h-[1px] bg-cornell/25" />
          </div>
        </motion.div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              variants={fadeUp}
              className="border-b border-bean/8"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 py-7 text-left bg-transparent border-none cursor-pointer group"
              >
                <span className="font-display text-[0.75rem] font-medium text-cornell/30 bg-cornell/[0.05] rounded-full w-8 h-8 flex items-center justify-center shrink-0 group-hover:text-cornell group-hover:bg-cornell/10 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[1.1rem] md:text-[1.15rem] font-medium text-bean pr-4 group-hover:text-cornell transition-colors duration-300 flex-1">
                  {faq.q}
                </span>
                <span
                  className={`font-display text-[1.5rem] font-light text-salmon shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-[0.9rem] font-light text-text-secondary leading-[1.85] pb-7 pl-12 max-w-[65ch]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
