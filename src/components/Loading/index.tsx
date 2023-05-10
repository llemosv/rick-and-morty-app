import { motion } from 'framer-motion'
import { CircleNotch } from '@phosphor-icons/react';
import { useLoad } from '../../hooks/useLoad';

export function Loading() {
    const { show } = useLoad();

    return (
        <>
            {
                show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: .7 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center flex-col fixed z-[9999] w-screen h-screen bg-gray-900 left-0 top-0 right-0 bottom-0"
                    >
                        <CircleNotch size={65} weight="bold" className="animate-spin text-rickLight-600 dark:text-mortyLight-500" />
                    </motion.div>
                )
            }
        </>
    )

}