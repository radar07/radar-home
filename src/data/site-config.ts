export type Link = {
  text: string
  href: string
}

export type Hero = {
  title: string
  profile: string
}

export type SiteConfig = {
  title: string
  description: string
  headerNavLinks: Link[]
  socialLinks: Link[]
  hero: Hero
}

const siteConfig: SiteConfig = {
  title: 'Welcome to my corner of the Internet',
  description: 'Software Engineer',
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blog',
      href: '/posts'
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
  ],
  hero: {
    title: 'Pranav RK',
    profile:
      '<p>An enthusiastic and experienced software engineer with a deep love for computers, Linux, and open-source software. Proven expertise in designing, developing, and leading software solutions, microservices architecture, and continuous involvement from start to end.</p>'
  }
}

export default siteConfig
