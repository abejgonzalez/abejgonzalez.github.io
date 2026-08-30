import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Text,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub, IoSchool } from 'react-icons/io5'
// Add your own project thumbnails here
// import thumbProject1 from '../public/images/[your-project-image]'
import Image from 'next/image'

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

const publicationRowProps = {
  justify: 'space-between',
  align: 'flex-start',
  mb: 2,
  direction: { base: 'column', sm: 'row' },
  gap: { base: 0, sm: 2 },
  w: '100%'
}

const publicationTitleProps = {
  fontWeight: 'semibold',
  flex: '1',
  pr: { base: 0, sm: 4 },
  lineHeight: 'tall'
}

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
      />

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        For my most up-to-date information, including links to past projects, experiences, and accomplishments, please refer to my{' '}
        <Link href="/documents/gonzalez-abraham-cv.pdf" {...externalLinkProps}>
          curriculum vitae
        </Link>.
      </Box>

      <Box display={{ md: 'flex' }} alignItems="center">
        <Box flexGrow={1} justify="center">
          <Heading as="h2" variant="page-title">
            Abraham Gonzalez
          </Heading>
          <Text color={useColorModeValue('teal.500', 'teal.200')} fontWeight="semibold">
            Software Engineer @ Google
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/gonzalez_abraham_2.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.6}>
        <Flex justify="space-between" align="flex-start" mb={2} flexWrap="wrap">
            <Link href="https://github.com/abejgonzalez" {...externalLinkProps}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @abejgonzalez
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/abraham-j-gonzalez/" {...externalLinkProps}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="https://scholar.google.com/citations?user=dsAQJ4cAAAAJ&hl=en&authuser=1&oi=ao" {...externalLinkProps}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoSchool />}
              >
                Google Scholar
              </Button>
            </Link>
            <Link href="mailto:abegonzalez@google.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                Email
              </Button>
            </Link>
         </Flex>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I am a Software Engineer at <Link as={NextLink} href="https://research.google/" passHref {...externalLinkProps}>Google</Link> working in the <Link as={NextLink} href="https://techsysinfra.google/research/" passHref {...externalLinkProps}>AI and Systems Research</Link> group led by <Link as={NextLink} href="https://techsysinfra.google/research/srg-staff/hank-levy/" passHref {...externalLinkProps}>Hank Levy</Link>.
          As part of my work at <Link as={NextLink} href="https://research.google/" passHref {...externalLinkProps}>Google</Link>, I research AI-assisted methodologies for computer architecture discovery and hardware-software co-design for next-generation silicon.
          While at <Link as={NextLink} href="https://research.google/" passHref {...externalLinkProps}>Google</Link>, my publicly facing research, done in collaboration with the <Link as={NextLink} href="https://www.berkeley.edu/" passHref {...externalLinkProps}>University of California, Berkeley</Link>, has been mentioned or featured across blogs (i.e., <Link as={NextLink} href="https://deepmind.google/blog/alphaevolve-impact/" passHref {...externalLinkProps}>Google DeepMind AlphaEvolve</Link>, <Link as={NextLink} href="https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner" passHref {...externalLinkProps}>Google Antigravity</Link>, and <Link as={NextLink} href="https://www.sigarch.org/architecture-systems-are-changing-the-architects-role-in-the-era-of-agentic-co-design/" passHref {...externalLinkProps}>ACM SIGARCH</Link> blogs), podcasts (i.e., the <Link as={NextLink} href="https://comparchpodcast.podbean.com/e/ep-24-from-unicorns-to-centaurs-co-designing-computer-systems-for-the-ai-era-with-dr-partha-ranganathan-google/" passHref {...externalLinkProps}>Computer Architecture Podcast</Link>), keynotes (i.e., <Link as={NextLink} href="https://dl.acm.org/doi/10.1145/3779212.3795611" passHref {...externalLinkProps}>ASPLOS 2026 keynote by Engineering Fellow/VP Partha Ranganathan</Link>), and published work (i.e., <Link href="#publications">ArXiv publications</Link>).
          In addition, I collaborate with university researchers, help mentor and guide academic projects, and organize workshops and hackathons (e.g., MICRO and ICLAD) across computer architecture, electronic design automation (EDA), and systems.
          For more details, please refer to my <Link href="#publications">publications</Link> and/or <Link href="/documents/gonzalez-abraham-cv.pdf" {...externalLinkProps}>curriculum vitae</Link>.
          The best way to reach me is at <Link href="mailto:abegonzalez@google.com">abegonzalez at google dot com</Link>.
        </Paragraph>
        <Paragraph>
          I graduated with a Ph.D. in <Link as={NextLink} href="https://eecs.berkeley.edu/" passHref {...externalLinkProps}>Electrical Engineering and Computer Sciences</Link> at the <Link as={NextLink} href="https://www.berkeley.edu/" passHref {...externalLinkProps}>University of California, Berkeley</Link> in Summer 2025 as part of the <Link as={NextLink} href="https://slice.eecs.berkeley.edu/" passHref {...externalLinkProps}>SLICE</Link> lab (formerly the <Link as={NextLink} href="https://adept.eecs.berkeley.edu/" passHref {...externalLinkProps}>ADEPT</Link> lab) under <Link as={NextLink} href="http://people.eecs.berkeley.edu/~krste/" passHref {...externalLinkProps}>Professor Emeritus and Professor of the Graduate School Krste Asanovi&#263;</Link> and <Link as={NextLink} href="https://www2.eecs.berkeley.edu/Faculty/Homepages/nikolic.html" passHref {...externalLinkProps}>Professor Borivoje Nikoli&#263;</Link>.
	  As part of my dissertation work, I&apos;ve worked at Google with <Link as={NextLink} href="https://www.parthasarathys.com/" passHref {...externalLinkProps}>Engineering Fellow/VP Parthasarathy Ranganathan</Link> and <Link as={NextLink} href="https://www.linkedin.com/in/jichuan/" passHref {...externalLinkProps}>Engineering Director Jichuan Chang</Link>.
          My dissertation focused on hyperscale cloud data center architectures, accelerator scheduling, data analytics, and agile hardware design methodology.
	  I&apos;ve co-led various widely used open-source projects, including the <Link as={NextLink} href="https://github.com/ucb-bar/chipyard" passHref {...externalLinkProps}>Chipyard SoC framework</Link>, the <Link as={NextLink} href="https://fires.im/" passHref {...externalLinkProps}>FireSim FPGA-accelerated simulation platform</Link>, and the <Link as={NextLink} href="https://boom-core.org/" passHref {...externalLinkProps}>Berkeley Out-of-Order Machine (BOOM)</Link>.
          As of Summer 2025, both Chipyard and FireSim, combined, have been used in over 20 tape-outs and over 150 peer-reviewed publications from over 65 companies and universities.
	  My work has been published in various venues such as ISCA, DAC, IEEE Micro, and ESSCIRC.
	  I&apos;ve also led over 10 workshops and tutorials with over 200 unique attendees at top conferences such as ISCA, MICRO, ASPLOS, and HPCA.
        </Paragraph>
        <Paragraph>
	  Prior to Berkeley, I received my B.S. in <Link as={NextLink} href="https://www.ece.utexas.edu/" passHref {...externalLinkProps}>Electrical and Computer Engineering</Link> from the <Link as={NextLink} href="https://www.utexas.edu/" passHref {...externalLinkProps}>University of Texas at Austin</Link>.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" id="publications">
          Publications
        </Heading>

         <Box mb={4}>
          <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://arxiv.org/abs/2608.09874" passHref {...externalLinkProps}>ArchAgent v2: A Case Study with the Data Prefetching Championship</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">arXiv &apos;26</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Raghav Gupta, Akanksha Jain, Hanna Alam, Alexander Novikov, Po-Sen Huang, Matej Balog, Marvin Eisenberger, Sergey Shirobokov, Ngân Vũ, Hank Levy, Borivoje Nikoli&#263;, Sagar Karandikar, Martin Dixon, and Parthasarathy Ranganathan
           </Text>
         </Box>

         <Box mb={4}>
          <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://arxiv.org/abs/2602.22425" passHref {...externalLinkProps}>ArchAgent: Agentic AI-driven Computer Architecture Discovery</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">arXiv &apos;26</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             Raghav Gupta, Akanksha Jain, <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Alexander Novikov, Po-Sen Huang, Matej Balog, Marvin Eisenberger, Sergey Shirobokov, Ngân Vũ, Martin Dixon, Borivoje Nikoli&#263;, Parthasarathy Ranganathan, and Sagar Karandikar
           </Text>
         </Box>

         <Box mb={4}>
          <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://ieeexplore.ieee.org/document/10609699" passHref {...externalLinkProps}>FireAxe: Partitioned FPGA-Accelerated Simulation of Large-Scale RTL Designs</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">ISCA &apos;24</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             Joonho Whangbo, Edwin Lim, Chengyi Lux Zhang, Kevin Anderson, <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Raghav Gupta, Nivedha Krishnakumar, Sagar Karandikar, Borivoje Nikoli&#263;, Yakun Sophia Shao, and Krste Asanovi&#263;
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://dl.acm.org/doi/10.1145/3579371.3589082" passHref {...externalLinkProps}>Profiling Hyperscale Big Data Processing</Link>
             </Text>

             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">ISCA &apos;23</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Aasheesh Kolli, Samira Khan, Sihang Liu, Vidushi Dadu, Sagar Karandikar, Jichuan Chang, Krste Asanovi&#263;, and Parthasarathy Ranganathan
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://ieeexplore.ieee.org/abstract/document/9567768" passHref {...externalLinkProps}>A 16mm&#178; 106.1 GOPS/W Heterogeneous RISC-V Multi-Core Multi-Accelerator SoC in Low-Power 22nm FinFET</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall"  fontWeight="semibold">ESSCIRC &apos;21</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Jerry Zhao, Ben Korpan, Hasan Genc, Colin Schmidt, John Wright, Ayan Biswas, Alon Amid, Farhana Sheikh, Anton Sorokin, Sirisha Kale, Mani Yalamanchi, Ramya Yarlagadda, Mark Flannigan, Larry Abramowitz, Elad Alon, Yakun Sophia Shao, Krste Asanovi&#263;, and Borivoje Nikoli&#263;
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://ieeexplore.ieee.org/document/9408173" passHref {...externalLinkProps}>COBRA: A Framework for Evaluating Compositions of Hardware Branch Predictors</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall"  fontWeight="semibold">ISPASS &apos;21</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             Jerry Zhao, <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Alon Amid, Sagar Karandikar, and Krste Asanović
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://dl.acm.org/doi/10.5555/3437539.3437682" passHref {...externalLinkProps}>Invited: Chipyard - An Integrated SoC Research and Implementation Environment</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">DAC &apos;20 (Invited)</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             Alon Amid, David Biancolin, <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Daniel Grubb, Sagar Karandikar, Harrison Liew, Albert Magyar, Howard Mao, Albert Ou, Nathan Pemberton, Paul Rigge, Colin Schmidt, John Wright, Jerry Zhao, Yakun Sophia Shao, Krste Asanovi&#263;, and Borivoje Nikoli&#263;
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://dl.acm.org/doi/10.1109/MM.2020.2996616" passHref {...externalLinkProps}>Chipyard: Integrated Design, Simulation, and Implementation Framework for Custom SoCs</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">IEEE Micro 2020.4</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             Alon Amid, David Biancolin, <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Daniel Grubb, Sagar Karandikar, Harrison Liew, Albert Magyar, Howard Mao, Albert Ou, Nathan Pemberton, Paul Rigge, Colin Schmidt, John Wright, Jerry Zhao, Yakun Sophia Shao, Krste Asanovi&#263;, and Borivoje Nikoli&#263;
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://carrv.github.io/2020/papers/CARRV2020_paper_15_Zhao.pdf" passHref {...externalLinkProps}>SonicBOOM: The 3rd Generation Berkeley Out-of-Order Machine</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">CARRV &apos;20</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             Jerry Zhao, Ben Korpan, <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, and Krste Asanović
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://abejgonzalez.github.io/documents/nvdla_v_gemmini.pdf" passHref {...externalLinkProps}>A Chipyard Comparison of NVDLA and Gemmini</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">UC Berkeley Technical Report &apos;20</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, and Charles Hong
           </Text>
         </Box>

         <Box mb={4}>
           <Flex {...publicationRowProps}>
             <Text {...publicationTitleProps}>
               <Link as={NextLink} href="https://carrv.github.io/2019/papers/carrv2019_paper_5.pdf" passHref {...externalLinkProps}>Replicating and Mitigating Spectre Attacks on an Open Source RISC-V Microarchitecture</Link>
             </Text>
             <Flex align="center" gap={2}>
               <Text color={useColorModeValue('red.500', 'red.200')} lineHeight="tall" fontWeight="semibold">CARRV &apos;19</Text>
             </Flex>
           </Flex>
           <Text fontSize="sm">
             <Text as="span" textDecoration="underline" fontWeight="semibold">Abraham Gonzalez</Text>, Ben Korpan, Jerry Zhao, Ed Younis, and Krste Asanovi&#263;
           </Text>
           </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>

        <Box mb={4}>
      <Flex justify="space-between" align="flex-start" mb={2}>
        <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
          Hyperscale SoC
        </Text>
      </Flex>

      <Text fontSize="sm" color={useColorModeValue("blue.500", "blue.200")} fontWeight="semibold" mb={2}>
        BIG-DATA PROCESSING • REMOTE PROCEDURE CALLS • MODELING • OPEN-SOURCE
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Co-lead of the project with a focus on co-design of big data processing platforms and RPC accelerator scheduling.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Characterized three big data processing platforms, Spanner, BigTable, and BigQuery, running live-traffic at Google for the first time and <Link as={NextLink} href="https://dl.acm.org/doi/10.1145/3579371.3589082" passHref {...externalLinkProps}>published the work at ISCA &apos;23</Link>.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Open-sourced the <Link href="https://github.com/google/fleetbench/tree/cd20746b68b307b148a761c676d6400f2541082d/fleetbench/rpc" {...externalLinkProps}>HyperRPCBench</Link> benchmark suite, a novel representative synthetic RPC suite in collaboration with the <Link href="https://github.com/google/fleetbench" {...externalLinkProps}>Fleetbench</Link> benchmarking team.
      </Text>
      <Text fontSize="sm" textAlign="justify" lineHeight="tall">
        • Built and correlated Python/C++ models for accelerator runtimes against x86 proof-of-concepts and <Link as={NextLink} href="https://github.com/ucb-bar/chipyard" passHref {...externalLinkProps}>Chipyard</Link>-based RTL simulated with <Link as={NextLink} href="https://fires.im/" passHref {...externalLinkProps}>FireSim</Link> running <Link href="https://github.com/google/fleetbench/tree/cd20746b68b307b148a761c676d6400f2541082d/fleetbench/rpc" {...externalLinkProps}>HyperRPCBench</Link>.
      </Text>
    </Box>

    <Box mb={4}>
      <Flex justify="space-between" align="flex-start" mb={2}>
        <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
          Chipyard: Agile RISC-V Hardware SoC Design Framework
        </Text>
        <Link href="https://github.com/ucb-bar/chipyard" {...externalLinkProps}>
          <IoLogoGithub size="24" color={useColorModeValue('#202023', '#f0e7db')} />
        </Link>
      </Flex>
      <Text fontSize="sm" color={useColorModeValue("blue.500", "blue.200")} fontWeight="semibold" mb={2}>
        AGILE HARDWARE • SOC DESIGN • OPEN-SOURCE
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Co-lead and core developer of the project with a focus on architecting the main integration, build flow, and repository structure.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Added support for multiple IPs including <Link href="https://boom-core.org/" {...externalLinkProps}>BOOM</Link>, <Link href="https://github.com/chipsalliance/rocket-chip-blocks" {...externalLinkProps}>Rocket Chip blocks (SiFive blocks)</Link>, <Link href="https://github.com/openhwgroup/cva6" {...externalLinkProps}>Ariane (CVA6)</Link>, <Link href="https://nvdla.org/" {...externalLinkProps}>NVDLA</Link>, and more.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Integrated the initial tape-out bring-up tether widget, FPGA bring-up flow, and software utilities.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Added the initial CI/CD flow including torture/fuzz and distributed testing.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • As of Summer 2025, the project has been used in <Link href="https://scholar.google.com/scholar?cites=4549882523608568335&as_sdt=2005&sciodt=0,5&hl=en" {...externalLinkProps}>over 20 tape-outs</Link> at multiple academic institutions (such as Stanford and Technical University of Dresden). Additionally, it has been cited by <Link href="https://scholar.google.com/scholar?cites=4549882523608568335&as_sdt=2005&sciodt=0,5&hl=en" {...externalLinkProps}>over 350 papers</Link> and used for a variety of works spanning computer architecture, artificial intelligence (AI), programming languages, systems, and more with <Link href="https://github.com/ucb-bar/chipyard" {...externalLinkProps}>over 650 unique forks and 1.8K stars on GitHub</Link>.
      </Text>
    </Box>

    <Box mb={4}>
      <Flex justify="space-between" align="flex-start" mb={2}>
        <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
          FireSim: FPGA-accelerated Hardware Simulation Platform
        </Text>
        <Link href="https://github.com/firesim/firesim" {...externalLinkProps}>
          <IoLogoGithub size="24" color={useColorModeValue('#202023', '#f0e7db')} />
        </Link>
      </Flex>
      <Text fontSize="sm" color={useColorModeValue("blue.500", "blue.200")} fontWeight="semibold" mb={2}>
        HARDWARE SIMULATION • FPGA • OPEN-SOURCE
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Co-lead and core developer of the project with a focus on adding local FPGA support, re-architecting the cluster manager, and developer tooling.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Integrated <Link href="https://github.com/chipsalliance/dromajo" {...externalLinkProps}>Dromajo</Link> co-simulation to enable bug discovery billions of cycles into simulation.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Re-architected the command-line interface and Python machine manager to support configurable custom clusters, enabling larger simulations through local FPGA support with <Link href="https://www.amd.com/en/products/accelerators/alveo/u250/a-u250-a64g-pq-g.html" {...externalLinkProps}>U250</Link>/<Link href="https://docs.amd.com/r/en-US/ds963-u280" {...externalLinkProps}>U280</Link>/<Link href="https://www.amd.com/en/products/accelerators/alveo/u200/a-u200-a64g-pq-g.html" {...externalLinkProps}>U200</Link> Xilinx UltraScale+ FPGAs and the <Link href="https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vitis.html" {...externalLinkProps}>Xilinx Vitis Unified Software Platform</Link>.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Expanded the initial CI/CD flow to include FPGA bitstream builds and simulations across local and cloud FPGAs.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Used as a <Link href="https://fires.im/workshop-2023/" {...externalLinkProps}>standard host platform for DARPA and IARPA programs</Link>, including in <Link href="https://fett.darpa.mil/" {...externalLinkProps}>DARPA&apos;s first ever bug bounty program (FETT)</Link> to host novel security-augmented hardware designs on the internet for attack by 100s of white-hat hackers globally.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • As of Summer 2025, the project has been used (not only cited) in <Link href="https://fires.im/publications/#userpapers" {...externalLinkProps}>over 60 peer-reviewed publications</Link> from first authors at over 25 companies and academic institutions in addition to being used in the development of commercial chips. Additionally, it has <Link href="https://github.com/firesim/firesim" {...externalLinkProps}>over 200 unique forks and 900 stars on GitHub</Link>.
      </Text>
    </Box>

    <Box mb={4}>
      <Flex justify="space-between" align="flex-start" mb={2}>
        <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
          BEAGLE: Heterogeneous Multi-Core Multi-Accelerator Tape-out
        </Text>
      </Flex>
      <Text fontSize="sm" color={useColorModeValue("blue.500", "blue.200")} fontWeight="semibold" mb={2}>
        MULTI-ACCELERATOR • MACHINE LEARNING • VECTOR • OPEN-SOURCE
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Led tape-out of the first <Link as={NextLink} href="https://github.com/ucb-bar/chipyard" passHref {...externalLinkProps}>Chipyard</Link> test chip, a 106.1 GOPS/W heterogeneous multi-core multi-accelerator test chip made in Intel 22FFL and <Link as={NextLink} href="https://ieeexplore.ieee.org/abstract/document/9567768" passHref {...externalLinkProps}>published at ESSCIRC &apos;21</Link>.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Coordinated interaction between UC Berkeley and Intel during physical design process.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Streamlined <Link as={NextLink} href="https://github.com/ucb-bar/chipyard" passHref {...externalLinkProps}>Chipyard</Link> vendor IP integration and custom boot flow.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Led bring-up including open-sourcing newly created FPGA-based bring-up collateral.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Led pre-silicon testing with large-scale <Link as={NextLink} href="https://fires.im/" passHref {...externalLinkProps}>FireSim</Link> simulations and automated <Link as={NextLink} href="https://github.com/ucb-bar/chipyard" passHref {...externalLinkProps}>Chipyard</Link> regressions.
      </Text>
      <Text fontSize="sm" textAlign="justify" lineHeight="tall">
        • SoC Components: <Link href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-17.pdf" {...externalLinkProps}>In-order Rocket core</Link> with a <Link href="https://dl.acm.org/doi/10.1109/DAC18074.2021.9586216" {...externalLinkProps}>Gemmini systolic array accelerator</Link>, <Link as={NextLink} href="https://boom-core.org/" passHref {...externalLinkProps}>out-of-order BOOM core</Link> with a <Link href="https://people.eecs.berkeley.edu/~krste/papers/EECS-2015-263.pdf" {...externalLinkProps}>Hwacha vector accelerator</Link> and runtime configurable non-speculative mode, <Link href="https://github.com/chipsalliance/rocket-chip-inclusive-cache" {...externalLinkProps}>shared L2</Link>, independent clock domains, and <Link href="https://github.com/chipsalliance/rocket-chip-blocks" {...externalLinkProps}>multiple IOs (GPIO, SPI, I2C, UART, SerDes)</Link>.
      </Text>
    </Box>

    <Box mb={4}>
      <Flex justify="space-between" align="flex-start" mb={2}>
        <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
          BOOM: The Berkeley Out-of-Order Machine
        </Text>
        <Link href="https://github.com/riscv-boom/riscv-boom" {...externalLinkProps}>
          <IoLogoGithub size="24" color={useColorModeValue('#202023', '#f0e7db')} />
        </Link>
      </Flex>
      <Text fontSize="sm" color={useColorModeValue("blue.500", "blue.200")} fontWeight="semibold" mb={2}>
        HIGH-PERFORMANCE • GENERAL PURPOSE • OPEN-SOURCE
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Developer of the first open-source synthesizable Linux-booting RV64GC RISC-V out-of-order core.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Added the initial CI/CD flow including torture/fuzz and distributed testing.
      </Text>
      <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
        • Modified the RTL to support instantiation with other core IPs in addition to various quality-of-life improvements.
      </Text>
      <Text fontSize="sm" textAlign="justify" lineHeight="tall">
        • <Link as={NextLink} href="https://carrv.github.io/2019/papers/carrv2019_paper_5.pdf" passHref {...externalLinkProps}>Open-sourced and replicated Spectre speculative attacks on the core</Link>.
      </Text>
    </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
