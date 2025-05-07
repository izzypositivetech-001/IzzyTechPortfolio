import { Briefcase, Code, User, Download } from 'lucide-react';
import React from 'react';

export const AboutSection = () => {
  const handleDownloadResume = () => {
    try {
      // Path to your resume in the public folder
      const resumeUrl = `${process.env.PUBLIC_URL || ''}/resume.docx`;
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Gbadebo_Adewale_Resume.docx'; // The filename for the downloaded file
      link.target = '_blank'; // Open in new tab for safety
      link.rel = 'noopener noreferrer';
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(resumeUrl);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again later.');
    }
  };

  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3>Passionate software developer & Tech Creator</h3>
            <p className='text-muted-foreground'>
              I am a passionate software developer with a keen interest in creating innovative solutions that enhance user experiences. My journey in tech has been fueled by a desire to learn and grow, and I thrive on challenges that push me to think outside the box.
            </p>
            <p className='text-muted-foreground'>
              When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects that challenge my skills and creativity.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Get in Touch
              </a>
              <button
                onClick={handleDownloadResume}
                className='flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 justify-center'
              >
                <Download className='h-4 w-4' />
                Download Resume
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='text-lg font-semibold'>Software Development</h4>
                  <p className='text-sm text-muted-foreground'>Building responsive and user-friendly web applications.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='text-lg font-semibold'>User Experience</h4>
                  <p className='text-sm text-muted-foreground'>Creating intuitive and engaging user experiences.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='text-lg font-semibold'>Project Management</h4>
                  <p className='text-sm text-muted-foreground'>Managing projects from conception to completion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};