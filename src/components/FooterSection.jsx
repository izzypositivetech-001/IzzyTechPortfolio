import { ArrowUp } from 'lucide-react'
import React from 'react'

export const FooterSection = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
{" "}
<p className='text-sm text-muted-foreground'>
    &copy; {new Date().getFullYear()} IzzyTech. All rights reserved.
</p>
<a href="#hero">
    <ArrowUp 
    size={40}
    className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary cursor-pointer transition-colors duration-300' />
</a>
    <div>
      
    </div>
    </footer>
  )
}

