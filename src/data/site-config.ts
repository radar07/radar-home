export type Link = {
  text: string
  href: string
}

export type SiteConfig = {
  title: string
  description: string
  headerNavLinks: Link[]
  socialLinks: Link[]
}

const siteConfig: SiteConfig = {
  title: 'Pranav RK',
  description: 'Software Engineer',
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: 'Projects',
      href: '/projects'
    }
  ],
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
