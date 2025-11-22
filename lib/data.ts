export const siteConfig = {
  name: "Dr. Alex Scholar",
  title: "Associate Professor of Cognitive Science",
  email: "alex.scholar@university.edu",
  address: "Department of Cognitive Science, University Hall, Room 404",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    scholar: "https://scholar.google.com",
    bluesky: "https://bsky.app",
    researchgate: "https://www.researchgate.net",
    cv: "/cv.pdf",
  },
  newsButtonTexts: {
    paper: "Read Paper",
    blog: "Read Blog",
  },
}

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Events", href: "/events" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export const profile = {
  name: "Dr. Alex Scholar",
  title: "Associate Professor",
  department: "Department of Cognitive Science",
  institution: "University of Research",
  description: "focuses on the intersection of artificial intelligence and human cognition, specifically how neural mechanisms of attention and memory can inform deep learning architectures.",
  image: "/placeholder.svg?height=400&width=300&text=Portrait",
  bio: `I am an Associate Professor in the Department of Cognitive Science at the University of Research. My research focuses on the intersection of artificial intelligence and human cognition, specifically how neural mechanisms of attention and memory can inform deep learning architectures.

  I received my Ph.D. in Computational Neuroscience from Tech Institute in 2015. Prior to joining the faculty at University of Research, I was a postdoctoral fellow at the Institute for Advanced Studies. My work has been published in top-tier journals including Nature Neuroscience, Cortex, and NeurIPS.`,
}

export const news = [
  {
    id: 1,
    title: "New paper accepted in Cortex",
    date: "October 15, 2025",
    description:
      "Our latest work on size constancy in natural scenes has been accepted for publication in Cortex. We show that the neural time course of size constancy is rapid and automatic.",
    content: `
      <p>We are excited to share that our paper on size constancy has been accepted in Cortex. This study represents a significant step forward in understanding how the human brain maintains a stable perception of object size despite changes in retinal image size.</p>
      <h3>Key Findings</h3>
      <ul>
        <li>Neural markers of size constancy emerge as early as 150ms after stimulus onset.</li>
        <li>This process appears to be automatic and task-independent.</li>
        <li>We found a strong correlation between neural activity in the visual cortex and behavioral reports of size.</li>
      </ul>
      <p>These findings challenge the traditional view that size constancy is a purely high-level cognitive process, suggesting instead that it is deeply embedded in the early visual system.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=News+1",
    paperLink: "#",
    blogLink: "/blogs/1",
  },
  {
    id: 2,
    title: "Keynote at CogSci 2025",
    date: "September 1, 2025",
    description:
      "I will be giving a keynote address at the Annual Meeting of the Cognitive Science Society. I will be discussing the future of AI-driven cognitive modeling.",
    content: `
      <p>It is an honor to announce that I will be delivering a keynote address at CogSci 2025. The talk, titled "The Future of AI-Driven Cognitive Modeling," will explore how modern machine learning techniques can be used to build more accurate and robust models of human cognition.</p>
      <p>I will be covering topics such as:</p>
      <ul>
        <li>The convergence of deep learning and cognitive science.</li>
        <li>Using neural networks to generate hypotheses about brain function.</li>
        <li>The ethical implications of AI systems that mimic human thought.</li>
      </ul>
      <p>I look forward to seeing many of you there and engaging in what I'm sure will be a lively discussion.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=News+2",
    paperLink: "#",
    blogLink: "/blogs/2",
  },
  {
    id: 3,
    title: "Grant Awarded from NSF",
    date: "August 20, 2025",
    description:
      "We are thrilled to announce that our lab has received a 3-year grant from the NSF to study the neural basis of visual attention.",
    content: `
      <p>Our lab has been awarded a major grant from the National Science Foundation (NSF) to support our research on visual attention. This 3-year project will investigate the neural circuits that allow us to focus on relevant information while filtering out distractions.</p>
      <p>The funding will allow us to:</p>
      <ul>
        <li>Recruit new PhD students and postdoctoral researchers.</li>
        <li>Acquire state-of-the-art eye-tracking and EEG equipment.</li>
        <li>Collaborate with international partners on large-scale data analysis.</li>
      </ul>
      <p>We are incredibly temporal grateful for this support and excited to embark on this new chapter of research.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=News+3",
    paperLink: "#",
    blogLink: "/blogs/3",
  },
  {
    id: 4,
    title: "Workshop on Neuro-AI",
    date: "July 10, 2025",
    description: "Organizing a workshop on the convergence of Neuroscience and AI at the upcoming CVPR conference.",
    content: `
      <p>We are organizing a workshop on "Neuro-AI: Bridging the Gap" at CVPR 2025. The goal of this workshop is to bring together researchers from both neuroscience and artificial intelligence to discuss shared challenges and opportunities.</p>
      <h3>Call for Papers</h3>
      <p>We invite submissions on topics including:</p>
      <ul>
        <li>Biologically plausible learning algorithms.</li>
        <li>Neural coding in biological and artificial systems.</li>
        <li>Brain-machine interfaces.</li>
      </ul>
      <p>Please visit the workshop website for more details on submission deadlines and guidelines.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=News+4",
    paperLink: "#",
    blogLink: "/blogs/4",
  },
  {
    id: 5,
    title: "Welcome new PhD students",
    date: "June 1, 2025",
    description:
      "Welcoming two new PhD students, Sarah and Mike, to the lab. They will be working on reinforcement learning and memory consolidation.",
    content: `
      <p>We are delighted to welcome Sarah and Mike to the lab as our newest PhD students! Sarah joins us from University X and will be focusing on reinforcement learning models of decision making. Mike comes from Institute Y and will be investigating the role of sleep in memory consolidation.</p>
      <p>Both bring a wealth of experience and enthusiasm, and we are excited to see what they will achieve during their time here.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=News+5",
    paperLink: "#",
    blogLink: "/blogs/5",
  },
  {
    id: 6,
    title: "Summer School Lecture",
    date: "May 15, 2025",
    description:
      "I delivered a series of lectures on computational modeling of vision at the Summer School in Computational Neuroscience.",
    content: `
      <p>Last week, I had the privilege of teaching at the Summer School in Computational Neuroscience. It was an intense but rewarding experience, engaging with some of the brightest young minds in the field.</p>
      <p>My lectures covered:</p>
      <ul>
        <li>The history of computational vision models.</li>
        <li>Recent advances in deep learning for computer vision.</li>
        <li>Hands-on tutorials with PyTorch.</li>
      </ul>
      <p>The slides and code from my lectures are available on the course website.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=News+6",
    paperLink: "#",
    blogLink: "/blogs/6",
  },
]

export const researchTopics = [
  {
    id: 1,
    title: "Neural Mechanisms of Attention",
    description:
      "Investigating how the brain selects relevant information from the environment. We use fMRI and EEG to study the spatiotemporal dynamics of attentional control.",
    image: "/placeholder.svg?height=300&width=400&text=Attention",
    papers: ["Attention in Natural Scenes (2024)", "Neural Gain Control (2023)"],
  },
  {
    id: 2,
    title: "Memory Consolidation",
    description:
      "Understanding how short-term memories are transformed into long-term storage. We are particularly interested in the role of sleep in this process.",
    image: "/placeholder.svg?height=300&width=400&text=Memory",
    papers: ["Sleep and Memory (2025)", "Hippocampal Replay (2024)"],
  },
  {
    id: 3,
    title: "Computational Vision",
    description:
      "Building biologically-inspired computer vision models. We aim to improve object recognition in cluttered scenes by mimicking the primate visual system.",
    image: "/placeholder.svg?height=300&width=400&text=Vision",
    papers: ["Biologically Plausible CNNs (2024)", "Robust Object Recognition (2023)"],
  },
]

export const publications = [
  {
    category: "Representatives",
    items: [
      {
        id: "r1",
        citation:
          "Yeh, L.-C., Gayet, S., Kaiser, D., & Peelen, M. V. (2025). The neural time course of size constancy in natural scenes, Cortex, 188, 1-12.",
        year: 2025,
        blogUrl: "/blogs/1",
        eventUrl: "/events/1",
      },
      {
        id: "r2",
        citation:
          "Scholar, A., & Colleague, B. (2024). Attention mechanisms in deep neural networks and human vision. Nature Neuroscience, 27, 45-58.",
        year: 2024,
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        id: "o1",
        citation:
          "Student, A., Scholar, A. (2023). Fast neural dynamics of object recognition. Journal of Vision, 23(5), 12.",
        year: 2023,
      },
      {
        id: "o2",
        citation:
          "Scholar, A. (2022). A review of computational models of attention. Annual Review of Psychology, 73, 101-128.",
        year: 2022,
      },
      {
        id: "o3",
        citation:
          "Partner, C., Scholar, A. (2021). Functional connectivity during rest predicts memory performance. NeuroImage, 225, 117485.",
        year: 2021,
      },
    ],
  },
]

export const events = [
  {
    id: 1,
    title: "International Conference on Cognitive Science",
    date: "Nov 10-12, 2025",
    description: "Annual meeting of the cognitive science community.",
    content: `
      <p>The International Conference on Cognitive Science (ICCS) brings together researchers from around the world to share their latest findings in cognitive psychology, neuroscience, linguistics, and artificial intelligence.</p>
      <h3>Highlights</h3>
      <ul>
        <li>Keynote speeches by leading experts.</li>
        <li>Symposia on cutting-edge topics.</li>
        <li>Poster sessions for students and early-career researchers.</li>
      </ul>
      <p>We encourage you to register early to secure your spot!</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=ICCS",
  },
  {
    id: 2,
    title: "Lab Retreat 2025",
    date: "Oct 05, 2025",
    description: "Annual lab retreat to discuss research progress and future directions.",
    content: `
      <p>Our annual lab retreat is a time for us to step away from the daily grind and focus on the big picture. We will be heading to a cabin in the mountains for a weekend of brainstorming, team building, and hiking.</p>
      <h3>Goals</h3>
      <ul>
        <li>Review progress on current grants.</li>
        <li>Plan new grant proposals.</li>
        <li>Foster collaboration among lab members.</li>
      </ul>
    `,
    image: "/placeholder.svg?height=200&width=300&text=Retreat",
  },
  {
    id: 3,
    title: "Department Seminar",
    date: "Sep 15, 2025",
    description: "Weekly department seminar featuring guest speakers.",
    content: `
      <p>Join us for our weekly department seminar. This week's speaker is Dr. Famous Scientist from Top University, who will be presenting their work on "The Neural Basis of Consciousness."</p>
      <p>The seminar will be held in Room 101 at 4:00 PM, followed by a reception in the lobby.</p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=Seminar",
  },
  {
    id: 4,
    title: "Workshop on AI Ethics",
    date: "Aug 20, 2025",
    description: "A workshop discussing the ethical implications of AI in society.",
    content: `
      <p>As AI systems become more prevalent in our lives, it is crucial to consider their ethical implications. This workshop will bring together ethicists, computer scientists, and policymakers to discuss issues such as bias, fairness, and accountability.</p>
      <h3>Topics</h3>
      <ul>
        <li>Algorithmic bias in hiring and lending.</li>
        <li>The impact of automation on the workforce.</li>
        <li>Responsible AI development practices.</li>
      </ul>
    `,
    image: "/placeholder.svg?height=200&width=300&text=Ethics",
  },
]

export const collaborators = [
  {
    name: "Dr. Jane Doe",
    role: "Postdoctoral Fellow",
    image: "/placeholder.svg?height=100&width=100&text=JD",
    bio: "Expert in fMRI and computational modeling.",
  },
  {
    name: "John Smith",
    role: "PhD Student",
    image: "/placeholder.svg?height=100&width=100&text=JS",
    bio: "Researching visual attention and memory.",
  },
  {
    name: "Prof. Robert Johnson",
    role: "External Collaborator",
    image: "/placeholder.svg?height=100&width=100&text=RJ",
    bio: "Professor at Tech Institute, expert in deep learning.",
  },
]
