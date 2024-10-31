
import Link from "next/link"
import { HoverCardDemo } from "./developedbyhovercard"

export default function Footer() {
  return (
    <footer className="flex h-16 w-full shrink-0 items-center border-t-2  bg-gray-100 dark:bg-transparent">
      <div className="container flex items-center justify-center gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <HoverCardDemo/>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}
          >
            My Dashboard
          </Link>
          <Link
            href="aboutus"
            className="text-sm font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            prefetch={false}
          >
            About Us
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Link
            href="#"
            className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-300 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-800 dark:hover:text-gray-50"
            prefetch={false}
          >
            <span className="sr-only">Twitter</span>
            {/*<TwitterIcon className="w-4 h-4" />*/}
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-300 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-800 dark:hover:text-gray-50"
            prefetch={false}
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="https://cdn-icons-mp4.flaticon.com/512/6172/6172533.mp4"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}






function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}