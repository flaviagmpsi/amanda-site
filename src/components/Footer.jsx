import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="bg-[#1E0F0C] pt-6 md:pt-7 pb-5 px-6 md:px-16 lg:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-display text-[1rem] font-normal text-[rgba(250,246,240,0.3)]">
          Amanda — CRP 04/84772
        </span>
        <span className="font-body text-[0.72rem] text-[rgba(250,246,240,0.15)] tracking-[0.05em]">
          © 2026 · Todos os direitos reservados
        </span>
      </div>
    </motion.footer>
  )
}
