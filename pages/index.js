import Head from 'next/head';
import Header from '@/components/Header';

import { useRouter } from 'next/router';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  }

  return (
    <div>
      <Head>
        <title>Island Rv Detailing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='text-[#FFCC] flex flex-col items-center pt-36'>
          <div className='text-3xl sm:text-4xl font-semibold md:text-5xl
           lg:text-6xl'>
            <Typewriter
              words={['Island Rv Detailing', 'Take a look at our services!',
                'Read about us!', "Send us an email!"]}
              loop={4}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
              onLoopDone={handleDone}
            />
            <Cursor cursorColor='#4DA394' />
          </div>

          <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl py-8
           text-center'>
            <motion.div
              initial={{
                x: 0,
                opacity: 0,
                scale: 0.25
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 3.5,
                duration: 1
              }}>
              <p>We detail</p>
            </motion.div>

            <motion.div
              initial={{
                x: 0,
                opacity: 0,
                scale: 0.25
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 3.5,
                duration: 1,
              }}>
              <p>You explore</p>
            </motion.div>
          </div>

          <motion.div
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 3.5,
              duration: 1,
            }}>
            <button onClick={() => router.push("/contact")}
              className='bg-[#D54751] py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-[#FFCC] font-bold text-lg'>Contact Us</button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
