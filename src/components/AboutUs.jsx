import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="py-16" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Gradient highlight line */}
        
           <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About <span className="text-yellow-400" >Us</span>
          </h2>
        
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-yellow-400 mb-7 p-1"  />
          <div className="bg-gradient-to-r from-gray-100 via-grey to-gray-50 border-l-7 border-indigo-500 shadow-lg rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              If it doesn’t connect or convert, we don’t do it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We know there is no one-size-fits-all formula. That is why we
              believe in work done with a purpose and backed by data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <span className="font-semibold text-gray-900">Spark Tech</span> is
              a digital marketing agency in Chennai helping brands rise above
              the noise with strategies that are clear, creative, and
              conversion-ready.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We play with ideas that spark action and results that speak for
              themselves.
            </p>
             <Link to="/about">
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-7"
              >
                Know More About us
              </motion.button>
             </Link>

          </div>
        </motion.div>
           
      </div>
    </section>
  );
}
