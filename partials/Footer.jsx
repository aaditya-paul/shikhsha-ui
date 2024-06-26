import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import logo from "../images/logo.png"

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-flex text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
                           <Image src={logo} alt="logo" width={150} height={150}  /> 
              </Link>
            </div>
            <div className="text-lg font-bold text-slate-800">Education is the key to opportunity.</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">How it works</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Overview</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Fee structure</Link>
              </li>
                                  
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Resources</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Customer Stories</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Knowledge Base</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Products</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Corporate Partners</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Secure Identity</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Legal Help</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">First Capital</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Company</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Terms of Use</Link>
              </li>
            </ul>
          </div>          

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Telegram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.96 2.336a.421.421 0 0 0-.291-.308 1.543 1.543 0 0 0-.788.054S1.358 8.194.358 8.87c-.215.145-.288.23-.324.33-.173.485.366.694.366.694l4.517 1.428a.506.506 0 0 0 .229-.013c1.026-.63 10.332-6.335 10.873-6.527.083-.024.148 0 .131.061-.215.732-8.257 7.664-8.301 7.706a.16.16 0 0 0-.06.143l-.422 4.28s-.176 1.331 1.196 0a38.082 38.082 0 0 1 2.374-2.11c1.553 1.041 3.224 2.192 3.945 2.794.245.23.576.354.916.342.426-.05.774-.35.876-.754 0 0 3.192-12.471 3.298-14.142.011-.162.025-.268.027-.38.005-.13-.008-.26-.04-.387Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Github">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">© Shiksha.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
