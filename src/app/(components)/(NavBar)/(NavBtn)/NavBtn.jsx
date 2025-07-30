'use client';
import React from 'react'

import Link from "next/link";

function NavBtn({title, routeLink}) {
  return (
    <Link href={routeLink}>{title}</Link>
  )
}

export default NavBtn
