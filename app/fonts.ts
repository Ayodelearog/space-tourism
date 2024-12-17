import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'

export const bellefair = Bellefair({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bellefair',
})

export const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow-condensed',
})

export const barlow = Barlow({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
})