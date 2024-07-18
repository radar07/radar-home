export type Link = {
  text: string
  href: string
}

export type Hero = {
  title: string
  profile: string
  github: string
  linkedin: string
  mail: string
}

export type SiteConfig = {
  title: string
  description: string
  headerNavLinks: Link[]
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
  hero: {
    title: 'Pranav RK',
    profile:
      '<p>An enthusiastic and experienced software engineer with a deep love for computers, Linux, and open-source software. Proven expertise in designing, developing, and leading software solutions, microservices architecture, and continuous involvement from start to end.</p>',
    github: 'https://github.com/radar07',
    linkedin: 'https://www.linkedin.com/in/pranav-rk-979126173',
    mail: 'mailto:pranavrk.me@gmail.com',
  }
}

export default siteConfig
