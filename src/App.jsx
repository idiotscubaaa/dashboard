import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import { AppHeader } from '@/components/layout/AppHeader';
import { AppFooter } from '@/components/layout/AppFooter';
import { WelcomeHeader } from '@/components/WelcomeHeader';
import { LinkSection } from '@/components/LinkSection';
import { SystemStatusSection } from '@/components/SystemStatusSection';
import { CtaSection } from '@/components/CtaSection';
import { CompactLinkSection } from '@/components/CompactLinkSection';

import { websiteLinks, aiTools, downloads, contactInfo, helpGuides, sitesToMonitor } from '@/data/links';
import { Globe, Bot, HelpCircle, Download } from 'lucide-react';

function App() {
  const { toast } = useToast();

  const handlePlaceholderClick = (feature) => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: `${feature} isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      duration: 4000,
    });
  };

  const supportAndGuidesLinks = [
    ...contactInfo.map(item => ({ ...item, color: "from-blue-500 to-blue-600", action: () => window.open(item.action, '_blank')})),
    ...helpGuides.map(item => ({ ...item, color: "from-green-500 to-green-600", action: () => handlePlaceholderClick(item.action) }))
  ];

  const downloadLinks = downloads.map(item => ({...item, color: "from-rose-500 to-rose-600", action: () => handlePlaceholderClick(item.action)}));

  return (
    <>
      <Helmet>
        <title>Network Portal - Welcome</title>
        <meta name="description" content="Internal network portal for quick access to company resources, AI tools, and support information." />
      </Helmet>
      
      <div className="min-h-screen">
        <AppHeader />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WelcomeHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LinkSection 
                  title="Official Websites"
                  icon={Globe}
                  iconColor="text-blue-600"
                  links={websiteLinks}
                  isExternal
                  animationDelay={0.2}
                />
                <LinkSection 
                  title="Support & Guides"
                  icon={HelpCircle}
                  iconColor="text-green-600"
                  links={supportAndGuidesLinks}
                  animationDelay={0.4}
                />
              </div>
               <CompactLinkSection 
                  title="AI Tools"
                  icon={Bot}
                  iconColor="text-purple-600"
                  links={aiTools}
                  isExternal
                  animationDelay={0.3}
                />
              <LinkSection 
                title="Downloads"
                icon={Download}
                iconColor="text-rose-600"
                links={downloadLinks}
                animationDelay={0.5}
                fullWidth
              />
            </div>
            
            <div className="lg:col-span-1">
              <SystemStatusSection sites={sitesToMonitor} animationDelay={0.6}/>
            </div>
          </div>
          
          <CtaSection animationDelay={0.7} />

        </main>

        <AppFooter handlePlaceholderClick={handlePlaceholderClick}/>
        <Toaster />
      </div>
    </>
  );
}

export default App;