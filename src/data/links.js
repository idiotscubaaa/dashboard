import {
  Building2,
  Users,
  Briefcase,
  FileText,
  Palette,
  FileSignature,
  MessageCircle,
  Bot,
  Zap,
  Mail,
  Phone,
  Printer,
  Shield,
  Wifi,
  BrainCircuit,
  Code,
  PenTool,
  Film
} from 'lucide-react';

export const websiteLinks = [
  {
    title: "Company Website",
    description: "Visit our main corporate site",
    icon: Building2,
    url: "https://example.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Employee Portal",
    description: "Access HR and employee resources",
    icon: Users,
    url: "https://portal.example.com",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Company ERP",
    description: "Access our new ERP system",
    icon: Briefcase,
    url: "https://erp.example.com",
    color: "from-orange-500 to-orange-600"
  }
];

export const sitesToMonitor = [
  { name: "The Esquire Hotels", url: "https://theesquirehotels.com/" },
  { name: "Northcape.pk", url: "https://northcape.pk" },
  { name: "Northcape Market", url: "https://northcapemarket.com" },
  { name: "BM Events QA", url: "https://bmevents.qa" },
  { name: "BM Events AE", url: "https://bmevents.ae" },
  { name: "Hello Salam", url: "https://hellosalam.pk" },
  { name: "Neemo Pani", url: "https://neemopani.com" },
];

export const downloads = [
  {
      title: "Onboarding Guide",
      description: "New hire documentation (PDF)",
      icon: FileText,
      action: "Onboarding Guide Download"
  },
  {
      title: "Brand Assets",
      description: "Logos and style guides (.zip)",
      icon: Palette,
      action: "Brand Assets Download"
  },
  {
      title: "Expense Report Form",
      description: "Standard expense template (.xlsx)",
      icon: FileSignature,
      action: "Expense Report Form Download"
  }
];

export const aiTools = [
  {
    title: "ChatGPT",
    icon: MessageCircle,
    url: "https://chat.openai.com",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Notion AI",
    icon: Bot,
    url: "https://notion.so",
    color: "from-slate-500 to-slate-600"
  },
  {
    title: "Midjourney",
    icon: Palette,
    url: "https://midjourney.com",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Claude AI",
    icon: Zap,
    url: "https://claude.ai",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Gemini",
    icon: BrainCircuit,
    url: "https://gemini.google.com",
    color: "from-sky-400 to-sky-500"
  },
  {
    title: "GitHub Copilot",
    icon: Code,
    url: "https://github.com/features/copilot",
    color: "from-gray-700 to-gray-800"
  },
  {
    title: "Adobe Firefly",
    icon: PenTool,
    url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
    color: "from-red-500 to-red-600"
  },
  {
    title: "RunwayML",
    icon: Film,
    url: "https://runwayml.com/",
    color: "from-fuchsia-500 to-fuchsia-600"
  }
];

export const contactInfo = [
  {
    title: "IT Support",
    description: "support@company.com",
    icon: Mail,
    action: 'mailto:support@company.com'
  },
  {
    title: "Help Desk",
    description: "+1 (555) 123-4567",
    icon: Phone,
    action: 'tel:+15551234567'
  }
];

export const helpGuides = [
  {
    title: "Printer Setup",
    description: "Connect to network printers",
    icon: Printer,
    action: "Printer Setup Guide"
  },
  {
    title: "VPN Access",
    description: "Remote connection guide",
    icon: Shield,
    action: "VPN Access Guide"
  },
  {
    title: "WiFi Connection",
    description: "Network connection help",
    icon: Wifi,
    action: "WiFi Connection Guide"
  }
];