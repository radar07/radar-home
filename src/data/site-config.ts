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
  x: string
}

export type SiteConfig = {
  title: string
  description: string
  source: string
  headerNavLinks: Link[]
  hero: Hero
}

const siteConfig: SiteConfig = {
  title: 'Welcome to my corner of the Internet',
  description: 'Software Engineer',
  source: 'https://github.com/radar07/radar-home.git',
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
      text: 'Portfolio',
      href: '/projects'
    }
  ],
  hero: {
    title: 'Pranav RK',
    profile:
      "<p>A Software Engineer professional 💻 with a passion for coding and creativity.</p><br/>\
       <p>I've got the skills to wrangle <b>Ruby on Rails</b> and <b>Go</b> 🚀 with ease.  I also dabble in frameworks like <b>Svelte</b> and <b>Astro</b>. Right now, I'm having fun exploring the world of front-end development.</p><br/>\
      <p>In the cloud realm ☁️, I'm well-versed with <b>AWS</b> and tools like <b>Terraform (IaC)</b>, and <b>Docker</b> 🐋 are my trusty companions.</p><br/>\
      <p>When I'm not coding, you can find me saving the world in video games 🔫 or finding peace in a good book 📖.</p><br/>\
      <p><i>Me in a nutshell:</i> 👨‍💻 + 📚 + 🎮</p>",
    github: 'https://github.com/radar07',
    linkedin: 'https://www.linkedin.com/in/pranav-rk-979126173',
    mail: 'mailto:pranavrk.me@gmail.com',
    x: 'https://x.com/pranavrk24'
  }
}

export default siteConfig
