import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import  logo  from '../../assets/logo-h.png'

const data = {
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  services: {
    onibusForro: "/onibus-do-forro",
    passeios: "/passeios",
    fretamento: "/fretamento",
    transfer: "/transfer",
  },

  about: {
    history: "/historia",
    team: "/equipe",
    mission: "/missao-visao-valores",
    careers: "/trabalhe-conosco",
  },

  help: {
    faqs: "/duvidas-frequentes",
    support: "/suporte",
    whatsapp: "/contato-whatsapp",
  },

  contact: {
    email: "contato@novaturismo.com.br",
    phone: "(83) 99999-9999",
    address: "Campina Grande – PB, Brasil",
  },

  company: {
    name: "Nova Turismo",
    description:
      "Especialistas em turismo receptivo, passeios culturais e experiências únicas em Campina Grande. Transformamos sua viagem em memórias inesquecíveis.",
    logo: "/logo-nova.png", // coloque o seu logo aqui
  },
};

// Redes sociais disponíveis
const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.social.facebook },
  { icon: Instagram, label: "Instagram", href: data.social.instagram },
];

// Links "Sobre"
const aboutLinks = [
  { text: "Nossa História", to: data.about.history },
  { text: "Equipe", to: data.about.team },
  { text: "Missão, Visão e Valores", to: data.about.mission },
  { text: "Trabalhe Conosco", to: data.about.careers },
];

// Links "Serviços"
const serviceLinks = [
  { text: "Ônibus do Forró", to: data.services.onibusForro },
  { text: "Passeios e Experiências", to: data.services.passeios },
  { text: "Fretamento de Veículos", to: data.services.fretamento },
  { text: "Transfers e Transporte", to: data.services.transfer },
];

// Links úteis
const helpfulLinks = [
  { text: "Perguntas Frequentes", to: data.help.faqs },
  { text: "Suporte", to: data.help.support },
  { text: "Contato via WhatsApp", to: data.help.whatsapp, hasIndicator: true },
];

// Contatos
const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* ==== Coluna da Empresa ==== */}
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <img
                src={logo}
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold">{data.company.name}</span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            {/* Redes sociais */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/70 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== Outras Seções ==== */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            
            {/* Sobre */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Sobre Nós</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, to }) => (
                  <li key={text}>
                    <Link
                      className="text-secondary-foreground/70 transition hover:text-primary"
                      to={to}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Serviços</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, to }) => (
                  <li key={text}>
                    <Link
                      className="text-secondary-foreground/70 transition hover:text-primary"
                      to={to}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Úteis */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Links Úteis</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, to, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      to={to}
                      className={
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-secondary-foreground/70 transition hover:text-primary"
                      }
                    >
                      <span className="text-secondary-foreground/70 transition group-hover:text-primary">
                        {text}
                      </span>

                      {/* bolinha piscando do WhatsApp */}
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contato</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                      <Icon className="text-primary size-5 shrink-0" />

                      {isAddress ? (
                        <address className="text-secondary-foreground/70 not-italic">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ==== Rodapé final ==== */}
        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">Todos os direitos reservados.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
