import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const contactItems = [
  { label: 'WhatsApp', value: '+55 31 XXXXX-XXXX', href: 'https://wa.me/55319XXXXXXXX' },
  { label: 'E-mail', value: 'email@exemplo.com', href: 'mailto:email@exemplo.com' },
  { label: 'Consultório', value: 'Belo Horizonte/MG', href: null },
  { label: 'Atendimento', value: 'Presencial', href: null },
]

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-bean py-28 md:py-36 pb-36 md:pb-44 px-6 md:px-16 lg:px-20 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div
        className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(182,33,33,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(210,202,118,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-[1]">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-citron/40">
            Contato
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-medium text-surface-base/90 leading-[1.15] tracking-[-0.02em] mt-5 mb-5">
            O primeiro passo
            <br />
            é <em className="italic font-normal text-salmon">compreender.</em>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6 mb-7">
            <span className="w-6 h-[1px] bg-salmon/25" />
            <span className="w-[5px] h-[5px] rounded-full bg-citron/20" />
            <span className="w-6 h-[1px] bg-salmon/25" />
          </div>
          <p className="font-body text-[0.95rem] font-light text-[rgba(250,246,240,0.5)] leading-[1.85] max-w-[48ch] mx-auto">
            Se você sente que é hora de entender melhor o que acontece dentro de si, entre em contato. A primeira conversa é para que possamos compreender juntos o caminho a seguir.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          variants={fadeUp}
          className="bg-[rgba(250,246,240,0.05)] border border-[rgba(250,246,240,0.08)] rounded-2xl p-8 md:p-10 -mb-24 md:-mb-28"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {contactItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="font-display text-[1.1rem] text-salmon/70 mb-1">
                  ✦
                </span>
                <div className="font-body text-[0.68rem] font-normal uppercase tracking-[0.2em] text-[rgba(250,246,240,0.3)]">
                  {item.label}
                </div>
                <div className="font-display text-[1rem] font-normal text-surface-base/80">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-inherit no-underline border-b border-[rgba(250,246,240,0.15)] hover:border-salmon transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/55319XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 font-body text-[0.82rem] font-medium uppercase tracking-[0.12em] text-bean bg-surface-base py-4 px-12 rounded-full no-underline transition-all duration-350 hover:bg-white hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            Agendar Avaliação
          </a>
        </motion.div>
      </div>
    </section>
  )
}
