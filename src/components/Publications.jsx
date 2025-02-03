import { PUBLICATIONS } from "../constants";
import { motion } from "framer-motion";


// import React from 'react'

const Publications = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Publications
            </motion.h2>
            <div>
                {PUBLICATIONS.map((publication, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img width={150} height={150} src={publication.image} alt="" className="mb-6 rounded" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <h2 className="mb-2 font-semibold">PAPER ID</h2>
                            <h3 className="mb-4 text-neutral-400">{publication.paperId}</h3>
                            <h2 className="mb-2 font-semibold">Date</h2>
                            <h3 className="mb-2 text-neutral-500">{publication.date}</h3>
                            <a href={publication.publicationLink} className="mb-2 border-b font-semibold">Publication Link</a>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{publication.title}</h6>
                            <p className="mb-4 text-neutral-400">{publication.description}</p>
                            {publication.technologies.map((technique, index) => (
                                <span key={index} className="bg-gray-200 mr-2 px-2 py-1 rounded-sm text-xs font-semibold text-gray-700">
                                    {technique}
                                </span>
                            ))}
                            <h6 className="mt-4 mb-2 text-neutral-200">Features : </h6>
                            {publication.features.map((feature, index) => (
                                <span key={index} className="inline-block justify-start mb-2 bg-neutral-900 text-purple-400 font-medium rounded-full px-3 py-1 text-sm">
                                    {feature}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Publications;
