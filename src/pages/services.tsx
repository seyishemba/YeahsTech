import { motion } from 'framer-motion';
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';
import { setTransition } from '@lib/transition';
import { SEO } from '@components/common/seo';
import { Accent } from '@components/ui/accent';
import { Tooltip } from '@components/ui/tooltip';
import { CustomLink } from '@components/link/custom-link';
import type { IconType } from 'react-icons';

export default function About(): JSX.Element {
  return (
    <main className='layout min-h-screen'>
      <SEO 
        title='Our Services'
        description='Yeahstech Innovations | Get to know and work with us.' />
      <section className='grid gap-2'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition()}
        >
          Our Services @
        </motion.h2>
        <motion.h1
          className='text-2xl font-bold md:text-4xl'
          {...setTransition({ delayIn: 0.1 })}
        >
          <Accent>YeahsTech Innovations</Accent>
        </motion.h1>
      </section>
      <section className='mt-4'>
        <motion.article
          className='prose dark:prose-invert'
          {...setTransition({ delayIn: 0.2 })}
        >
             <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
Consulting
        </motion.h2>
          <p>
            
Tech consulting is the practice of providing expert advice and guidance on technology-related matters. Consultants assist clients in selecting, implementing, and managing technology solutions to meet their goals. 
            </p>
            <p>
This often involves strategic planning, problem-solving, and ensuring cost-effective and secure technology operations.
              
</p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
Training
        </motion.h2>
<p>
  
Tech training involves acquiring skills and knowledge related to technology. This can include learning programming, software tools, hardware, cybersecurity, and more. It can be obtained through formal education, online courses, or self-study to enable individuals to work in the tech industry and stay updated with technological advancements.
  </p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
AI
</motion.h2>
<p>
  
AI is a branch of computer science dedicated to creating systems that can perform tasks requiring human-like intelligence, such as learning and problem-solving. This technology employs techniques like machine learning and neural networks to power applications like self-driving cars, recommendation systems, and chatbots, transforming industries and automation processes. AI is a dynamic field with the potential to significantly impact various aspects of our lives.
  
  </p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
Products 
</motion.h2>
<p>
Tech products encompass a broad array of electronic devices, software, and services, serving diverse technological needs. This category includes items such as smartphones, laptops, software applications, and gaming consoles. The tech industry is dynamic, consistently delivering innovations for communication, entertainment, and productivity.
</p>

<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
B2B
</motion.h2>
<p>
  
B2B stands for "Business-to-Business," representing interactions between businesses rather than individual consumers. B2B tech solutions are crafted to meet the specific needs of organizations, improving efficiency and facilitating services for other businesses. This category encompasses technologies tailored for the corporate world, fostering smoother operations and collaborations.

</p>
<motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >      
Blog
</motion.h2>
<p>
A blog is a website or platform where individuals or organizations regularly post articles or entries, usually in reverse chronological order, with the most recent content at the top. Blogs serve as a means to share information, personal experiences, news, or expertise on various topics. They can be created and managed using different blogging platforms or content management systems.

</p>

          {/* <p>
            I began my journey by completing the front-end course on{' '}
            <CustomLink href='https://freecodecamp.org'>
              FreeCodeCamp
            </CustomLink>{' '}
            and then moved on to
          </p> */}

        </motion.article>
      </section>
      {/* <section className='mt-12 grid gap-4'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
          Favorite Tech Stack
        </motion.h2>
        <motion.ul
          className='translate flex gap-4 [&>li:first-child>div]:-translate-x-4
                     [&>li:nth-child(2)>div]:-translate-x-16 [&>li:nth-child(3)>div]:-translate-x-28'
          {...setTransition({ delayIn: 0.4 })}
        >
          {favoriteTechStack.map(({ tip, name, href, Icon }) => (
            <Tooltip
              tooltipClassName='group-hover:!-translate-y-36 w-72 px-3 py-4 !-translate-y-28
                                text-center !whitespace-normal 2xl:!-translate-x-1/2
                                peer-focus-visible:!-translate-y-36'
              tag='li'
              key={name}
              tip={
                <>
                  <CustomLink href={href} tabIndex={-1}>
                    {name}
                  </CustomLink>
                  {', '}
                  {tip}
                </>
              }
            >
              <button className='smooth-tab peer'>
                <Icon className='text-4xl transition-colors hover:text-accent-main' />
              </button>
            </Tooltip>
          ))}
        </motion.ul>
      </section> */}
    </main>
  );
}

type FavoriteTechStack = {
  tip: string;
  name: string;
  href: string;
  Icon: IconType;
};

const favoriteTechStack: FavoriteTechStack[] = [
  {
    tip: 'a React framework that makes it easy to build static and server-side rendered applications.',
    name: 'Next.js',
    href: 'https://nextjs.org',
    Icon: SiNextdotjs
  },
  {
    tip: 'a strongly typed language that builds on JavaScript, giving you better tooling at any scale.',
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    Icon: SiTypescript
  },
  {
    tip: 'an app development platform that helps you build and grow apps and games users love.',
    name: 'Firebase',
    href: 'https://firebase.google.com',
    Icon: SiFirebase
  },
  {
    tip: 'a utility-first CSS framework that helps you build custom designs without ever leaving your JSX.',
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    Icon: SiTailwindcss
  }
];
