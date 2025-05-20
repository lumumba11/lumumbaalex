interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'A Social Network',
    description: `What if you could connect with your friends and family? Share your thoughts,
    photos, videos and more. Facebook has many features to help you stay connected
    with the people you care about.`,
    imgSrc: '/static/images/x.jpg',
    href: 'https://www.x.com/_manadrila/',
  },
  {
    title: 'A Video Sharing Platform',
    description: `What if you could upload and share your videos with the world? YouTube has
    many features to help you discover, watch and share videos.`,
    imgSrc: '/static/images/github.png',
    href: 'https://www.github.com/Lumumba11/',
  },
]

export default projectsData
