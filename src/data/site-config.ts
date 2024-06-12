export type Link = {
  text: string
  href: string
}

export type SiteConfig = {
  title: string
  description: string
  socialLinks: Link[]
}

const siteConfig: SiteConfig = {
  title: "Pranav's Home",
  description: 'Software Engineer',
  socialLinks: [
    {
      text: 'Github',
      href: 'https://github.com'
    },
    {
      text: 'LinkedIn',
      href: 'https://linkedin.com'
    },
    {
      text: 'X',
      href: 'https://x.com'
    }
  ]
}

export default siteConfig
