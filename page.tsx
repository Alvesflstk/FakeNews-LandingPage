"use client"

import { ArrowRight, Shield,  XCircle } from "lucide-react"
import {
  AlertTriangle,
  Share2,
  CheckCircle,
  BookOpen,
  HelpCircle,
  Globe,
  Users,
  Search,
  Eye,
  ShieldCheck,
  Brain,
  Flag,
} from "lucide-react";

import Link from "next/link"
import { useEffect } from "react"

export default function LandingPage() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (href?.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
             O Impacto dos <span className="text-orange-500">Fake News</span>
            </div>
            <div className="space-x-6">
              <Link href="#sobre" className="hover:text-orange-500 transition-colors">
                Sobre
              </Link>
              <Link href="#recursos" className="hover:text-orange-500 transition-colors">
                Recursos
              </Link>
              <Link href="#exemplos" className="hover:text-orange-500 transition-colors">
                Exemplos
              </Link>
              <Link href="#ferramentas" className="hover:text-orange-500 transition-colors">
                Ferramentas
              </Link>
              <Link href="#estatisticas" className="hover:text-orange-500 transition-colors">
                Estatísticas
              </Link>
              <Link href="#dicas" className="hover:text-orange-500 transition-colors">
                Dicas
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">Combata a Desinformação no Mundo Digital</h1>
              <p className="text-xl text-gray-300">
                Aprenda a identificar e combater fake news com ferramentas e conhecimentos essenciais para navegar no
                mundo da informação. Esteja preparado para reconhecer boatos, verificar fatos com fontes confiáveis e 
                evitar a propagação de desinformação. Juntos, podemos construir uma internet mais segura, baseada 
                em credibilidade e confiança.
              </p>

            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse" />
                  <div className="absolute inset-4 bg-cyan-500/20 rounded-full animate-pulse delay-150" />
                  <Shield className="w-full h-full text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Como Identificar Fake News</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ferramentas e dicas essenciais para verificar a autenticidade das informações
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">O Impacto das Fake News na Sociedade</h2>
              <div className="space-y-4">
                {impacts.map((impact, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg">
                    {impact.type === "negative" ? (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                    <p className="text-gray-300">{impact.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="exemplos" className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Exemplos Práticos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {exemplos.map((exemplo, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-orange-500">{exemplo.titulo}</h3>
                <p className="text-gray-300 mb-4">{exemplo.descricao}</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 italic">"{exemplo.exemplo}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ferramentas" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ferramentas de Verificação</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ferramentas.map((ferramenta, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{ferramenta.nome}</h3>
                <p className="text-gray-400 mb-4">{ferramenta.descricao}</p>
                <Link
                  href={ferramenta.link}
                  target="_blank"
                  className="text-orange-500 hover:text-orange-400 flex items-center gap-2"
                >
                  Acessar Ferramenta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estatisticas" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Estatísticas sobre Fake News</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.valor}</div>
                <p className="text-gray-300">{stat.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dicas" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Dicas Práticas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dicas.map((dica, index) => (
              <div key={index} className="flex gap-4 items-start bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{dica.titulo}</h3>
                  <p className="text-gray-400">{dica.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>© 2024 FakeNewsAlert. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: AlertTriangle,
    title: "Verifique a Fonte",
    description: "Sempre confirme a credibilidade do site e do autor da notícia antes de compartilhar.",
  },
  {
    icon: Share2,
    title: "Analise o Compartilhamento",
    description: "Observe o padrão de compartilhamento e verifique se outras fontes confiáveis reportaram o mesmo.",
  },
  {
    icon: CheckCircle,
    title: "Consulte Fact-Checking",
    description: "Utilize serviços de verificação de fatos para confirmar a veracidade das informações.",
  },
  {
    icon: BookOpen,
    title: "Leia Além do Título",
    description: "Muitas fake news usam títulos sensacionalistas para enganar. Leia o conteúdo completo antes de tirar conclusões.",
  },
  {
    icon: HelpCircle,
    title: "Desconfie de Notícias Alarmantes",
    description: "Mensagens que apelam para emoções fortes, como medo ou raiva, costumam ser falsas.",
  },
  {
    icon: Globe,
    title: "Verifique a Data",
    description: "Notícias antigas fora de contexto podem gerar confusão. Confira se a publicação é recente.",
  },
  {
    icon: Users,
    title: "Analise os Comentários",
    description: "Os comentários podem ajudar a identificar se outros leitores notaram erros ou inconsistências.",
  },
  {
    icon: Search,
    title: "Pesquise Outras Fontes",
    description: "Procure a mesma notícia em diferentes fontes confiáveis antes de acreditar ou compartilhar.",
  },
  {
    icon: Eye,
    title: "Identifique Manipulações Visuais",
    description: "Fotos e vídeos podem ser editados. Faça uma pesquisa reversa de imagens para verificar sua origem.",
  },
  {
    icon: ShieldCheck,
    title: "Use Navegadores Seguros",
    description: "Alguns navegadores oferecem proteção contra sites perigosos ou fraudulentos.",
  },
  {
    icon: Brain,
    title: "Desenvolva o Pensamento Crítico",
    description: "Sempre analise o contexto, a linguagem e os possíveis interesses por trás da notícia.",
  },
  {
    icon: Flag,
    title: "Denuncie Conteúdos Falsos",
    description: "Se identificar fake news, denuncie nas redes sociais para ajudar a combater a desinformação.",
  }
];


const impacts = [
  {
    type: "negative",
    text: "Manipulação da opinião pública e processos democráticos",
  },
  {
    type: "negative",
    text: "Prejuízos à saúde pública com desinformação sobre tratamentos médicos",
  },
  {
    type: "positive",
    text: "Aumento da consciência sobre a importância da verificação de fontes",
  },
  {
    type: "positive",
    text: "Desenvolvimento de ferramentas e tecnologias para combate à desinformação",
  },
  {
    type: "positive",
    text: "Maior engajamento de plataformas digitais no combate às fake news",
  }
];

const exemplos = [
  {
    titulo: "Correntes de WhatsApp",
    descricao: "Exemplo comum de fake news que circula em aplicativos de mensagem",
    exemplo: "Vacinas causam autismo - Esta é uma fake news já desmentida por diversos estudos científicos.",
  },
  {
    titulo: "Imagens Manipuladas",
    descricao: "Fotos alteradas digitalmente para criar falsas narrativas",
    exemplo: "Imagens de eventos naturais manipuladas para parecerem mais dramáticas ou catastróficas.",
  },
  {
    titulo: "Vídeos Fora de Contexto",
    descricao: "Vídeos antigos ou de outros países usados em contextos enganosos",
    exemplo: "Vídeos de protestos em outros países usados como se fossem de manifestações locais.",
  },
  {
    titulo: "Perfis Falsos em Redes Sociais",
    descricao: "Contas falsas que espalham boatos ou simulam ser figuras públicas",
    exemplo: "Contas no Twitter se passando por políticos, divulgando falsas declarações.",
  },
  {
    titulo: "Capturas de Tela Falsas",
    descricao: "Prints de conversas ou postagens fabricadas para enganar",
    exemplo: "Prints falsificados de celebridades fazendo declarações polêmicas.",
  },
  {
    titulo: "Pesquisas e Estatísticas Falsas",
    descricao: "Dados inventados ou manipulados para enganar",
    exemplo: "‘90% das pessoas acreditam em X’, sem qualquer estudo que comprove.",
  }
];


const ferramentas = [
  {
    nome: "Agência Lupa",
    descricao: "Primeira agência de fact-checking do Brasil",
    link: "https://lupa.uol.com.br/",
  },
  {
    nome: "Aos Fatos",
    descricao: "Jornalismo para checar o debate público",
    link: "https://www.aosfatos.org/",
  },
  {
    nome: "Fato ou Fake",
    descricao: "Serviço de verificação de fatos do G1",
    link: "https://g1.globo.com/fato-ou-fake/",
  },
  {
    nome: "Comprova",
    descricao: "Coalizão de veículos de imprensa para checar boatos",
    link: "https://projetocomprova.com.br/",
  },
  {
    nome: "Politifact",
    descricao: "Plataforma de fact-checking americana",
    link: "https://www.politifact.com/",
  },
  {
    nome: "Snopes",
    descricao: "Site especializado em desmentir boatos e lendas urbanas",
    link: "https://www.snopes.com/",
  },
  {
    nome: "Full Fact",
    descricao: "Organização independente de verificação de fatos do Reino Unido",
    link: "https://fullfact.org/",
  },
  {
    nome: "FactCheck.org",
    descricao: "Projeto do Annenberg Public Policy Center focado em política",
    link: "https://www.factcheck.org/",
  },
  {
    nome: "Open Secrets",
    descricao: "Checagem de financiamento político nos Estados Unidos",
    link: "https://www.opensecrets.org/",
  },
  {
    nome: "Poynter Institute",
    descricao: "Organização focada em ética no jornalismo e fact-checking",
    link: "https://www.poynter.org/",
  },
  {
    nome: "AFP Checamos",
    descricao: "Serviço de fact-checking da Agence France-Presse no Brasil",
    link: "https://checamos.afp.com/",
  },
  {
    nome: "Verificado",
    descricao: "Iniciativa de verificação de fatos no México",
    link: "https://verificado.mx/",
  }
];


const estatisticas = [
  {
    valor: "73%",
    descricao: "dos brasileiros se preocupam com fake news",
  },
  {
    valor: "8.8M",
    descricao: "mensagens verificadas em 2023",
  },
  {
    valor: "62%",
    descricao: "compartilham sem verificar a fonte",
  },
  {
    valor: "89%",
    descricao: "já receberam fake news",
  },
]

const dicas = [
  {
    titulo: "Verifique a Data",
    descricao: "Confira quando a notícia foi publicada. Conteúdos antigos podem estar desatualizados.",
  },
  {
    titulo: "Procure a Fonte Original",
    descricao: "Busque a fonte primária da informação e verifique se é confiável.",
  },
  {
    titulo: "Compare com Outros Veículos",
    descricao: "Procure a mesma notícia em diferentes sites de notícias confiáveis.",
  },
  {
    titulo: "Desconfie do Sensacionalismo",
    descricao: "Títulos muito chamativos ou alarmistas podem ser sinais de fake news.",
  },
  {
    titulo: "Leia Além do Título",
    descricao: "Títulos podem ser enganosos. Leia o conteúdo completo antes de compartilhar.",
  },
  {
    titulo: "Cheque Autores e Credenciais",
    descricao: "Verifique se o autor da notícia é especialista ou possui histórico confiável.",
  },
  {
    titulo: "Desconfie de Capturas de Tela",
    descricao: "Imagens editadas ou fora de contexto podem ser usadas para enganar.",
  },
  {
    titulo: "Pesquise no Google",
    descricao: "Procure trechos da notícia para ver se há desmentidos ou outras versões.",
  },
  {
    titulo: "Use Sites de Fact-Checking",
    descricao: "Consulte serviços como Agência Lupa, Aos Fatos e Fato ou Fake.",
  },
  {
    titulo: "Cuidado com Áudios e Vídeos",
    descricao: "Vídeos editados ou fora de contexto podem distorcer a realidade.",
  },
  {
    titulo: "Observe o Tom da Mensagem",
    descricao: "Mensagens que apelam para o medo ou a emoção podem ser tentativas de manipulação.",
  },
  {
    titulo: "Confirme com Especialistas",
    descricao: "Em temas técnicos ou científicos, consulte fontes especializadas.",
  },
  {
    titulo: "Analise a URL do Site",
    descricao: "Verifique se o site é legítimo. Domínios estranhos podem ser falsos.",
  },
 
]

