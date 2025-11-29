export const siteConfig = {
  name: "Luzi Xu",
  title: "Postdoctoral Fellow of Cognitive Science",
  email: "luzixu@polyu.edu.hk",
  address: "QT414, The Hong Kong Polytechnic University",
  phone: "+86 166-7515-2254",
  social: {
    twitter: "https://x.com/LUZIXU1",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    scholar: "https://scholar.google.com/citations?user=oL--ys0AAAAJ&hl=zh-CN",
    bluesky: "https://bsky.app/profile/luzixu.bsky.social",
    researchgate: "https://www.researchgate.net/profile/Luzi-Xu",
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
  name: "Luzi Xu",
  title: "Postdoctoral Fellow",
  department: "Decision and Computational Neuroscience Group",
  institution: "The Hong Kong Polytechnic University",
  description: "focuses on the intersection of artificial intelligence and human cognition, specifically how neural mechanisms of attention and memory can inform deep learning architectures.",
  image: "/profile.png",
  aboutImg: "/figures/aboutme.png",
  bio: `Luzi Xu is a researcher specializing in visual memory, awareness, and decision-making. 

  She is currently a Postdoctoral Fellow in the Decision and Computational Neuroscience Group at The Hong Kong Polytechnic University, led by <a href="https://www.decision-neuro.com/" target="_blank">Prof. Bolton Chau</a>.

  In March 2025, she obtained her PhD from Utrecht University (the Netherlands) after three and a half years of research supervised by <a href="https://www.stefanvanderstigchel.nl/" target="_blank">Prof. Stefan Van der Stigchel</a>, <a href="https://www.cap-lab.net/" target="_blank">Dr. Surya Gayet</a>, and <a href="https://scholar.google.com/citations?user=PfD-HTgAAAAJ&hl=en" target="_blank">Dr. Chris Paffen</a>. Before that, she obtained a Master’s degree (2019-2021) in the suervision of  <a href="https://scholar.google.com/citations?user=eqEDgJ8AAAAJ&hl=en" target="_blank">Prof. Xiaowei Ding</a> and a bachelor’s degree (2014-2018) in Sun Yat-sen University (China).`,
  about: "My academic journey began in the humanities and social sciences, but a desire for theories grounded in empirical evidence led me to experimental psychology. I am now dedicated to studying the mind through carefully designed experiments, finding deep satisfaction in the creative process of devising methods to probe cognitive mechanisms."
}

export const news = [
  {
    id: 1,
    title: "New paper accepted in Cortex",
    date: "November 13, 2025",
    description:
      `The paper “Trade-offs between visual sampling and memory in stable and changing worlds” is accepted by Journal of Experimental Psychology: Human Perception and Performance!

      Many studies showed that people often tend to avoid memory use  when they have the opportunity to sample (i.e., inspect) visual information (only 1~2 features or items per sampling). Surprisingly, in our study, when visual information repeated across time, participants eventually recalled up to 6 complicated items (incl. their shapes, colors, locations) without any samplings. `,
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
    image: "/figures/news1.png",
    paperLink: "#",
    blogLink: "/blogs/1",
    buttonText: {
      paper: "Read Paper",
      blog: "Read Blog",
    },
  },
  {
    id: 2,
    title: "Keynote at CogSci 2025",
    date: "September 27, 2025",
    description:
      `The paper “Spatial statistical learning of task relevance, rather than stimulus prevalence, improves visual working memory recall” is accepted by Psychonomic Bulletin & Review!

      In this study,  we showed that statistical learning improves visual working memory through task relevance (how likely we are to use these stimuli) but not  stimulus prevalence (how likely we are to encounter stimuli). This study prompts a reconsideration of the idea that statistical learning operates through mere exposure, independent of top-down processes.`,
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
    image: "/figures/news2.png",
    paperLink: "#",
    blogLink: "/blogs/2",
  },
  {
    id: 3,
    title: "Grant Awarded from NSF",
    date: "March 14, 2025",
    description:
      `After three and a half years of doctoral studies, I successfully defended my dissertation and earned my PhD. I would like to express my gratitude to my supervisors: Surya Gayet, Chris Paffen, and Stefan Van der Stigchel. Without them, this incredible journey would not have been possible.

      At the degree conferral ceremony, my supervisor Surya Gayet delivered a speech that was both touching and humorous. I will carry with me his recognition—having compared me to "a beaver"—and his blessings, as I continue to build greater and better academic "dams."
`,
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
    image: "/figures/news3.png",
    paperLink: "#",
    blogLink: "/blogs/3",
    buttonText: {
      paper: "Read Dissertation",
      blog: "Go to the Event",
    },
  },
  {
    id: 4,
    title: "Workshop on Neuro-AI",
    date: "September 7, 2024",
    description: `
    The paper “Latent memory traces for prospective items in visual working memory” is accepted by Journal of Experimental Psychology: Human Perception and Performance!

    This study demonstrates that our memory system overcomes capacity limits by first processing a subset of items for immediate action while simultaneously forming latent traces for the others. These latent traces subsequently facilitate faster encoding of the remaining items into working memory when needed.`,
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
    image: "/figures/news4.png",
    paperLink: "#",
    blogLink: "/blogs/4",
  },
  {
    id: 5,
    title: "Welcome new PhD students",
    date: "June 1, 2025",
    description:
      "I gave a talk at the annual meeting of Vision Sciences Society (VSS). The talk is about our paper “Latent memory traces for prospective items in visual working memory”. It was a pleasure to present this work to many audiences!",
    content: `
      <p>We are delighted to welcome Sarah and Mike to the lab as our newest PhD students! Sarah joins us from University X and will be focusing on reinforcement learning models of decision making. Mike comes from Institute Y and will be investigating the role of sleep in memory consolidation.</p>
      <p>Both bring a wealth of experience and enthusiasm, and we are excited to see what they will achieve during their time here.</p>
    `,
    image: "/figures/news5.png",
    paperLink: "#",
    blogLink: "/blogs/5",
    buttonText: {
      paper: "Read Paper",
      blog: "Watch the Video",
    },
  },
  {
    id: 6,
    title: "Summer School Lecture",
    date: "May 15, 2025",
    description:
      `The paper “Statistical learning facilitates access to awareness” is formally accepted by Psychological Science!

      Converging evidence (N = 153 adults) from multiple paradigms (incl., reaction-time b-CFS, accuracy-based b-CFS, and visual masking experiments) robustly demonstrates that probable objects access consciousness faster than improbable objects. These findings indicate that statistical learning leads to differential priorities for competing for limited conscious resources, which may contribute to the differences shown in subsequent conscious processes`,
    content: `
      <p>Last week, I had the privilege of teaching at the Summer School in Computational Neuroscience. It was an intense but rewarding experience, engaging with some the brightest young minds in the field.</p>
      <p>My lectures covered:</p>
      <ul>
        <li>The history of computational vision models.</li>
        <li>Recent advances in deep learning for computer vision.</li>
        <li>Hands-on tutorials with PyTorch.</li>
      </ul>
      <p>The slides and code from my lectures are available on the course website.</p>
    `,
    image: "/figures/news6.png",
    paperLink: "#",
    blogLink: "/blogs/6",
  },
]

export const researchTopics = [
  {
    id: 1,
    title: "From the Eye to the Mind: How We \"Filter\" Information",
    description:
      "Our world is filled with an overwhelming amount of information, yet our sensory systems have limited capacity. My research focuses on how prior experience, task-relevance, social and emotional information lead people to selectively prioritize certain information in attention or awareness. ",
    image: "/figures/research1.png",
    papers: [
      "<b>Xu, L.*</b>, Paffen, C., Van der Stigchel, S., & Gayet, S. (2024). Statistical learning facilitates access to awareness. Psychological Science. 35(9), 1035-1047.",
      "<b>Xu, L.</b>, Yang, Z., Ji, H., Chen, W., Lin, Z., Huang, Y.*, & Ding, X.* (2023). Direct evidence for proactive suppression of salient-but-irrelevant emotional information inputs. Emotion, 23(7), 2039-2058.",
    ],
  },
  {
    id: 2,
    title: "Memory Use versus Perception in Natural Behaviour",
    description:
      "In everyday tasks, we often don’t need to remember all target items at once—instead, we can choose to re-sample information as needed (e.g., glancing back at a recipe repeatedly). Dfferent from traditional working memory research that focuses on maximum capacity, we study how willing people are to use memory compared to re-perceiving information visually.",
    image: "/figures/research2.png",
    papers: [
      "<b>Xu, L.*</b>, Sahakian, A., Gayet, S., Paffen, C. L. E., & Van der Stigchel, S. (2025). Latent memory traces for prospective items in visual working memory. Journal of Experimental Psychology: Human Perception and Performance. 51(2), 164-177.",
      "<b>Xu, L.</b>, Gayet, S., Sahakian, A., Gottlieb, J., Van der Stigchel, S., & Paffen, C. (in press). Trade-offs between visual sampling and memory in stable and changing worlds. Journal of Experimental Psychology: Human Perception and Performance.",
    ],
  },
  {
    id: 3,
    title: "The Mechanisms Underlying the Effects of Learning",
    description:
      "Although our visual world is ever-changing, it is also highly structured and stable. We are interested in how the learning of these repeated patterns lead to the changes in perception, memory, and decision-making and in what ways learning pose an effect on these cognitive functions.",
    image: "/figures/research3.png",
    papers: [
      "<b>Xu, L.</b>, Sahakian, A., Gayet, S., Paffen, C. L. E., & Van der Stigchel, S. (2025). Latent memory traces for prospective items in visual working memory. Journal of Experimental Psychology: Human Perception and Performance. 51(2), 164-177.",
      "<b>Xu, L.</b>, Sahakian, A., Van der Stigchel, S., Paffen, C., & Gayet, S. (in press). Spatial statistical learning of task relevance, rather than stimulus prevalence, improves visual working memory recall. Psychonomic Bulletin & Review.",
    ],
  },
]

export const publications = [
  {
    category: "Representative Publications",
    items: [
      {
        id: "r1",
        citation:
          "<b>Xu, L.*</b>, Paffen, C., Van der Stigchel, S., & Gayet, S. (2024). Statistical learning facilitates access to awareness. Psychological Science. 35(9), 1035-1047.",
        year: 2024,
        blogUrl: "/blogs/6",
      },
      {
        id: "r2",
        citation:
          "<b>Xu, L.</b>, Yang, Z., Ji, H., Chen, W., Lin, Z., Huang, Y.*, & Ding, X.* (2023). Direct evidence for proactive suppression of salient-but-irrelevant emotional information inputs. Emotion, 23(7), 2039-2058.",
        year: 2023,
      },
      {
        id: "r3",
        citation:
          "<b>Xu, L.*</b>, Sahakian, A., Gayet, S., Paffen, C. L. E., & Van der Stigchel, S. (2025). Latent memory traces for prospective items in visual working memory. Journal of Experimental Psychology: Human Perception and Performance. 51(2), 164-177.",
        year: 2025,
        blogUrl: "/blogs/4",
      },
      {
        id: "r4",
        citation:
          "<b>Xu, L.*</b>, Gayet, S., Sahakian, A., Gottlieb, J., Van der Stigchel, S., & Paffen, C. (in press). Trade-offs between visual sampling and memory in stable and changing worlds. Journal of Experimental Psychology: Human Perception and Performance.",
        year: 2025,
        blogUrl: "/blogs/1",
      },
      {
        id: "r5",
        citation:
          "<b>Xu, L.*</b>, Sahakian, A., Van der Stigchel, S., Paffen, C., & Gayet, S. (in press). Spatial statistical learning of task relevance, rather than stimulus prevalence, improves visual working memory recall. Psychonomic Bulletin & Review.",
        year: 2025,
        blogUrl: "/blogs/2",
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        id: "o1",
        citation:
          "Sun, Y., <b>Xu, L.</b>, Luo, X., Ren, Y., & Ding, X. (2022). Unconscious social relation threats: Invisible boss face biases attention. Attention, Perception, & Psychophysics, 84(1), 76-88.",
        year: 2022,
      },
      {
        id: "o2",
        citation:
          "Wang, D., Chota, S., Xu, L., Van der Stigchel, S., & Gayet, S. (2025). The priority state of items in visual working memory determines their influence on early visual processing. Consciousness and Cognition, 127, 103800.",
        year: 2025,
      },
      {
        id: "o3",
        citation:
          "Ding, X., Gan, J., <b>Xu, L.</b>, Zhou, X., Gao, D., & Sun, Y. (2024). Not to follow because of distrust: perceived trust modulates the gaze cueing effect. Psychological Research. 1-16.",
        year: 2024,
      },
      {
        id: "o4",
        citation:
          "Ding, X., Ji, H., Yu, W., <b>Xu, L.</b>, Lin, Y., & Sun, Y. (2024). Dissociation between temporal attention and Consciousness: Unconscious temporal cue induces temporal expectation effect. Consciousness and Cognition, 119, 103670.",
        year: 2024,
      },
      {
        id: "o5",
        citation:
          "Li, S., Wang, S., Ji, H., Tian, N., <b>Xu, L.</b>, Chen, W., & Ding, X. (2024). The dual nature of working memory deficits: methamphetamine abusers have more impaired social working memory capacity than canonical working memory capacity. Psychological Research, 1-12.",
        year: 2024,
      },
    ],
  },
]

export const events = [
  {
    id: 1,
    title: "Dutch interview on NPO Radio 1 \"De nacht van..\"",
    date: "September 9, 2024",
    // description: "Annual meeting of the cognitive science community.",
    content: `
      <p>Another interview following our recent paper published in Psychological Science. Dutch radio channel NPO Radio 1 invited Surya in the late night program "De nacht van.." for a chat about this research and its implication.</p>
      <img src="/figures/event1.png" alt="Dutch interview on NPO Radio 1 \"De nacht van..\"" />
      <p>Click here for the interview:<a href="https://www.nporadio1.nl/fragmenten/de-nacht-van/9cf83e2c-d680-4ec1-a4ae-c1b736ba3688/2024-09-09-wat-je-niet-verwacht-zie-je-niet" target="_blank"> Wat je niet verwacht, zie je niet | NPO Radio 1</a></p>
    `,
    image: "/figures/event1.png",
  },
  {
    id: 2,
    title: "Dutch interview on NOS Radio 1 Journaal (NPO 1).",
    date: "September 4, 2024",
    // description: "Annual lab retreat to discuss research progress and future directions.",
    content: `
      <p>Surya was interviewed on the main Dutch national radio station NPO 1 to talk about our recent publication in Psychological Science. The interview focused on our findings that we often miss what we don't expect to see, and what this reveals about the limits of conscious awareness.</p>
      <img src="/figures/event2.png" alt="Dutch interview on NOS Radio 1 Journaal (NPO 1)." />
      <p>Click here for the interview: <a href="https://www.nporadio1.nl/uitzendingen/nos-radio-1-journaal/9bd0d7d8-3077-4620-90be-d2572664d899/2024-09-04-nos-radio-1-journaal" target="_blank"> NOS Radio 1 Journaal - 04 september 2024 - NPO Radio 1 Gemist | NPO Radio 1</a></p>
    `,
    image: "/figures/event2.png",
  },
  {
    id: 3,
    title: "Utrecht University Press Release Spotlights Our Latest Publication",
    date: "September 3 2024",
    description: "Weekly department seminar featuring guest speakers.",
    content: `
      <p>Utrecht University issued an official press release to highlight and disseminate the findings of our team's recent study published in Psychological Science. The release underscores the institutional recognition of this work and its contribution to the field.</p>
      <p>Read the press release: <a href="https://www.uu.nl/nieuws/wat-je-niet-verwacht-zie-je-niet" target="_blank"> Wat je niet verwacht, zie je niet - Nieuws - Universiteit Utrecht</a></p>
    `,
    image: "/placeholder.svg?height=200&width=300&text=Seminar",
  },
]

export const blogs = [
  {
    id: 1,
    title: "Statistical Learning Influences Access to Consciousness",
    date: "November 13, 2025",
    description:
      `before attention even comes into play, when two pieces of information compete at the threshold of consciousness, does the brain secretly favor the more "common" one, allowing the more frequent stimulus to enter consciousness faster?`,
    content: `
      <p>Imagine you're looking for your friend in a crowded station. In the crowd, figures matching your friend's characteristics—like the hat he often wears—seem to suddenly "pop out," allowing you to spot him instantly. In contrast, when he appears with an unusual look—without wearing the hat—you might find it harder to recognize his presence amidst the bustling crowd.</p>

      <p>You might attribute this to "attention." My research aims to explore: before attention even comes into play, when two pieces of information compete at the threshold of consciousness, does the brain secretly favor the more "common" one, allowing the more frequent stimulus to enter consciousness faster?</p>
      <h3>Measuring Consciousness</h3>
      <p>To observe this process, we need a scenario that tests when information enters consciousness. In the lab, we create a subtle "tug-of-war"-but the competition happens between your two eyes.</p>
      <p>Here's how it works: You look through a stereoscope. One eye sees a simple target—for instance, a triangle that gradually becomes clearer. Meanwhile, your other eye sees rapidly flashing, colorful, chaotic patterns.</p>
      <img src="/figures/blog1-1.png" alt="Measuring Consciousness" />
      <p>Initially, your brain is completely "captured" by the dynamic, flashy patterns in that eye (we call this the "mask"). So, even though the quiet triangle is physically present in your other eye, you remain completely unaware of its existence—it's blocked from the gateway of consciousness by the mask.</p>
      <p>We measure how long it takes for the triangle to accumulate enough "strength" to break through the mask and allow you to "see" it. The shorter this time is, the stronger its competitive advantage is in the battle for consciousness.</p>
      <h3>High Frequency vs. Low Frequency</h3>
      <p>Now, here comes the crucial part. We pit two types of stimuli against each other: one with a high-probability location/feature, and the other with a low-probability location/feature.</p>
      <p>In our first experiment, we made the triangle appear more frequently in a specific location—for example, it appeared on the left side of the screen 75% of the time. In the second experiment, we manipulated not the triangle's location, but its appearance—making one orientation (upright or inverted triangle) appear much more frequently than the other. We compared how quickly the high-probability stimuli versus the low-probability stimuli broke through the mask.</p>
      <p>The results were surprising: Whether appearing in a high-probability location or possessing a high-probability feature, these "expected" triangles broke through the mask and were seen significantly faster. It's as if the bouncer of consciousness recognizes the regular visitor—catches a glimpse and waves them right through. Whereas the less frequent visitor gets stopped and questioned, taking more time.</p>
      <p>But then, a key question arose: Does a faster reaction time truly mean "seeing earlier"? Could it be that after seeing, the decision-making or judgment about the "familiar" stimulus is simply faster?</p>
      <p>To answer this question, we changed the rules of the game. We no longer measured speed. Instead, we gave everyone the same "inspection time." Once the time was up, all stimuli disappeared, and participants only needed to accurately report which side the triangle was on. This experiment stripped away all influences of decision speed. It purely measured: within the same time window, which stimulus could convey more information to your consciousness? The result was decisive: Given the same exposure time, participants were significantly more accurate at locating the high-probability triangle. This proves that the advantage truly occurs before the information breaks through the gateway of consciousness.</p>
    `,
    image: "/figures/blog1-1.png",
    blogLink: "/blogs/1",
  },
  {
    id: 2,
    title: "Memorizing ‘To-Do’ Items",
    date: "November 13, 2025",
    description:
      `When we focus on some items for immediate action, does our brain also secretly form memories for the other items we’ll need later?`,
    content: `
      <p>Remember that last time you went grocery shopping with a long list? You probably grabbed the first few items—milk, bread, apples—and held them in mind while you navigated the aisles. The rest—like pasta and tomatoes—were still on the list, waiting for their turn.</p>
      <p>We often think of our working memory as a temporary notepad for what we’re doing right now. But what about the things we will do? Does your brain simply ignore them until you’re ready, or does it start preparing in the background?</p>
      <p>My research set out to answer this question: When we focus on some items for immediate action, does our brain also secretly form memories for the other items we’ll need later?</p>
      <h3>The “Copying Task”: A Game of Mental Jenga</h3>
      <p>To peek into this process, we used a task that feels like a digital puzzle. Imagine you’re shown a grid of colorful shapes on the left—your “model.” Your job is to recreate it in an empty “workspace” by dragging shapes from a “resources” pool on the right.</p>
      <p>The trick? You can’t see everything at once. A small “window” follows your cursor, hiding the model whenever you look away to pick up or place a shape. This forces you to rely on your working memory.</p>
      <p>Here’s the crucial part: sometimes, while you’re busy placing a few shapes, we secretly shuffled the positions of the unplaced ones in the model. If you weren’t forming memories for them, you wouldn’t notice. But if you were, this shuffle should disrupt your mental preparation.</p>
      <h3>The “Stable” vs. “Shuffled” World</h3>
      <p>We compared two types of trials:</p>
      <ul>
        <li>In the Stable condition, unplaced items never moved. Your brain could trust that the “to-do” items stayed put.</li>
        <li>In the Shuffled condition, these future targets swapped places every time you looked back at the model.</li>
      </ul>
      <p>The results were clear. When the “to-do” items remained stable, people spent less time glancing back at the model to memorize them later. They didn’t look back more often, and they didn’t make more errors—they just encoded the information more efficiently when the time came.</p>
      <p>It was as if their brains had been quietly taking notes on the side, even while they were busy with the main task.</p>
      <p>This finding reveals a clever trick our minds use to cope with a busy world. This “latent memory” acts like a backstage crew, setting up the next scene while the main play is ongoing. Your brain wasn’t just focused on the present—it was already one step ahead, quietly memorizing future targets.</p>
    `,
    image: "/figures/blog2-1.png",
    blogLink: "/blogs/2",
  }
]

export const collaborators = [
  {
    name: "Bolton Chau",
    role: "Associate Professor",
    image: "/figures/co1.png",
    bio: "The Hong Kong Polytechnic University",
    link: "https://www.decision-neuro.com/"
  },
  {
    name: "Surya Gayet",
    role: "Assistant Professor",
    image: "/figures/co2.png",
    bio: "Utrecht University",
    link: "https://www.cap-lab.net/people"
  },
  {
    name: "Chris Paffen",
    role: "Associate Professor",
    image: "/figures/co3.png",
    bio: "Utrecht University",
    link: "https://www.uu.nl/staff/CLEPaffen"
  },
  {
    name: "Stefan Van der Stigchel",
    role: "Professor",
    image: "/figures/co4.png",
    bio: "Utrecht University",
    link: "https://www.stefanvanderstigchel.nl/"
  },
  {
    name: "Xiaowei Ding",
    role: "Professor",
    image: "/figures/co5.png",
    bio: "Sun Yat-sen University",
    link: "https://www.bing.com/ck/a?!&&p=225927b5f3a5761d21cf3eadc0081e3823871d841476a77ffb59335b48a3da22JmltdHM9MTc2NDExNTIwMA&ptn=3&ver=2&hsh=4&fclid=239d500c-fdd1-6937-2c7d-452cfc7b686d&psq=xiaowei+ding&u=a1aHR0cHM6Ly9wc3kuc3lzdS5lZHUuY24vdGVhY2hlci83MTk&ntb=1"
  },
  {
    name: "Andre Sahakian",
    role: "Postdoctoral Fellow",
    image: "/figures/co6.png",
    bio: "Utrecht University",
  },
  {
    name: "Huichao Ji",
    role: "PhD Student",
    image: "/figures/co7.png",
    bio: "Yale University",
  },
  {
    name: "Dan Wang",
    role: "PhD Student",
    image: "/figures/co8.png",
    bio: "Utrecht University",
  },
  {
    name: "Yanliang Sun",
    role: "Associate Professor",
    image: "/figures/co9.png",
    bio: "Shandong Normal University",
  },
  {
    name: "Yushang Huang",
    role: "Collaborator",
    // image: "/figures/co10.png",
    bio: "Anyang Normal University",
  },
]
