import DashNav from '@/components/dashboard/dashNav'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

export default async function dashboard() {
    const session:CustomSession|null = await getServerSession(authOptions)
  return (
    <DashNav name={session?.user?.name!} image={session?.user?.image! ?? undefined}/>
  )
}
