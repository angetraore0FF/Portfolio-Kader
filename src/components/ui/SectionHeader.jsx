import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ index, label, title, intro }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className="max-w-2xl space-y-4"
  >
    <p className="label text-accent">[ {index} / {label} ]</p>
    <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
    {intro && <p className="text-base leading-relaxed text-ink/70 md:text-lg">{intro}</p>}
  </motion.div>
)

export default SectionHeader
