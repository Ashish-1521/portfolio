import {
    RiReactjsLine, RiJavaFill, RiJavascriptFill, RiAngularjsFill, RiHtml5Fill,
    RiBootstrapFill,
    RiPhpFill,
} from "react-icons/ri";

import { SiPython, SiR, SiMysql, SiMongodb, SiNodedotjs, SiDocker, SiKubernetes, SiGit, SiUnity, SiUnrealengine } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                    <p className="text-center font-bold">React</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-6xl text-yellow-400" />
                    <p className="text-center font-bold">Python</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavaFill className="text-6xl text-yellow-400" />
                    <p className="text-center font-bold">Java</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiR className="text-6xl text-blue-400" />
                    <p className="text-center font-bold">R</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-6xl text-blue-500" />
                    <p className="text-center font-bold">SQL</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="block mx-auto text-6xl text-yellow-400" />
                    <p className="text-center font-bold">JavaScript</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiAngularjsFill className="text-6xl text-red-600" />
                    <p className="text-center font-bold">Angular</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Fill className="text-6xl text-orange-500" />
                    <p className="text-center font-bold">HTML</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiBootstrapFill className="block mx-auto text-6xl text-purple-500" />
                    <p className="text-center font-bold">Bootstrap</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiPhpFill className="text-6xl text-blue-400" />
                    <p className="text-center font-bold">PHP</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-6xl text-green-400" />
                    <p className="text-center font-bold">MongoDB</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNodedotjs className="text-6xl text-green-600" />
                    <p className="text-center font-bold">Node.js</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDocker className="text-6xl text-blue-600" />
                    <p className="text-center font-bold">Docker</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiKubernetes className="block mx-auto text-6xl text-blue-400" />
                    <p className="text-center font-bold">Kubernetes</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGit className="text-6xl text-orange-600" />
                    <p className="text-center font-bold">Git</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiUnity className="text-6xl text-gray-400" />
                    <p className="text-center font-bold">Unity</p>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)} className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiUnrealengine className="text-6xl text-blue-700" />
                    <p className="text-center font-bold">Unreal</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
