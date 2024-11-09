'use client'

import Image from "next/image";
import logo from '../assets/nysc-seeklogo.svg'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const handleSignin = () => {
    router.push('/overview')
  }
  return (
    <main className="font-poppins bg-primary-green h-screen flex justify-center items-center">
      <div className="bg-gray-50 py-6 xl:py-10 px-6 flex flex-col items-center gap-5 rounded-md xl:w-[500px] md:w-[500px] w-[350px]">
          <div className="flex flex-col items-center gap-3">
            <Image src={logo} alt="logo" className="w-24" />
            <h1 className="text-2xl font-semibold text-center">CDS Attendance System</h1>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h2 className="xl:text-xl md:text-xl font-semibold">Login to your account</h2>
            <p className="text-sm text-gray-600 text-center">Please enter your email and password to continue</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <fieldset className="flex flex-col gap-1">
              <label>Email Address:</label>
              <input type="text" placeholder="user@nysc.com.ng" className="w-full bg-gray-100 p-3" />
            </fieldset>
            <fieldset className="flex flex-col gap-1">
              <label>Password:</label>
              <input type="password" placeholder="*************" className="w-full bg-gray-100 p-3" />
            </fieldset>
            <fieldset className="flex gap-3 items-center">
              <input type="checkbox" className="w-4 h-4 accent-primary-green" />
              <label className="text-sm">Remember Password</label>
            </fieldset>
          </div>
          <div>
            <button onClick={handleSignin} className="bg-primary-green text-white py-2 px-20 rounded-md text-lg">Sign In</button>
          </div>
      </div>
    </main>
  );
}