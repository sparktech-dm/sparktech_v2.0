import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-20 w-full h-full" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full px-6 lg:px-20 text-center relative"
      >
        {/* Gradient highlight line */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-amber-300 mb-10"
        >
          About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border-l-8 border-indigo-500 shadow-2xl rounded-3xl p-10 w-full"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 mb-6 font-medium"
          >
            If it doesn’t connect or convert, we don’t do it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed mb-6"
          >
            We know there is no one-size-fits-all formula. That is why we
            believe in work done with a purpose and backed by data.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 leading-relaxed mb-6"
          >
            <span className="font-semibold text-gray-900">Spark Tech</span> is a
            digital marketing agency in Chennai helping brands rise above the
            noise with strategies that are clear, creative, and
            conversion-ready.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 leading-relaxed"
          >
            We play with ideas that spark action and results that speak for
            themselves.
          </motion.p>

          <motion.a
            href="/about"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mt-10"
          >
            Know More About us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
