

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
import { FormEvent, useState } from 'react';

export default function Contact(): JSX.Element {

  const [name, setName] = useState('');
const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    // You can send the form data to your server or perform other actions here
    // Example: sendFormToServer({ name, email, message });
  };

  return (
    <main className='layout min-h-screen'>
      <SEO
        title='Contact us'
        description='Yeahstech Innovations | Get to know and work with us.' />
      <section className='grid gap-2'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition()}
        >
          About
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
  {/* Existing content here */}
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="block text-xl font-bold md:text-2xl">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-xl font-bold md:text-2xl">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-xl font-bold md:text-2xl">
        Message
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 border rounded"
        required
      />
    </div>
    <button
      type="submit"
      className="bg-accent-main text-white font-bold px-4 py-2 rounded"
    >
      Submit
    </button>
  </form>
</motion.article>

      </section>
    
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