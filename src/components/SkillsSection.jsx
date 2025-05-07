import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Skills = [
    {name: 'HTML/CSS', level: 90, category: 'Frontend'},
    {name: 'JavaScript', level: 85, category: 'Frontend'},
    {name: 'React', level: 80, category: 'Frontend'},
    {name: 'TypeScript', level: 75, category: 'Frontend'},
    {name: 'Tailwind CSS', level: 80, category: 'Frontend'},
    {name: 'Next.js', level: 70, category: 'Frontend'},

    // Backend Skills
    {name: 'Node.js', level: 80, category: 'Backend'},
    {name: 'Express.js', level: 75, category: 'Backend'},
    {name: 'MongoDB', level: 70, category: 'Backend'},
    {name: 'PostgreSQL', level: 70, category: 'Backend'},
    {name: 'GraphQL', level: 65, category: 'Backend'},
    {name: 'REST APIs', level: 80, category: 'Backend'},

    // tools
    {name: 'Git', level: 85, category: 'Tools'},
    {name: 'Docker', level: 70, category: 'Tools'},
    {name: 'VS Code', level: 90, category: 'Tools'},
];

const categories = [
   'all',
   'Frontend',
    'Backend',
    'Tools'
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const filteredSkills = Skills.filter((skill) =>
        activeCategory === 'all' || skill.category === activeCategory
    );
  return (
    
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
    <div className='container mx-auto max-w-5xl' >
        <h2 className='text-3xl font-bold md:text-4xl mb-12 text-center'>
            My <span className='text-primary'> Skills</span>
        </h2>
        <div className='flex flex-wrap justify-center mb-12 gap-12'>
         {categories.map((category, key) => (
            <button 
            key={key} 
            className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary/70 text-foreground hover:bd-secondary')}
            onClick={() => setActiveCategory(category)}
            >{category}</button>
         ))}
       </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
         {filteredSkills.map((skill, key) => (
            <div 
            key={key}
            className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                <div className='text-left mb-4'>
                    <h3 className='font-semibold text-lg '>
                        {skill.name}
                    </h3>
                </div>
                <div className='w-full bg-secondary-50 rounded-full overflow-hidden'>
                   
                    <div className= 'bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'style={{width: `${skill.level}%`}} 
                    />
                </div>
                <div className='text-right mt-1'>
                    <span className='text-sm text-muted-foreground'>
                        {skill.level}%
                    </span>
                </div>
            </div>
            
         ))}
      </div>
    </div>

    </section>
  )
}
