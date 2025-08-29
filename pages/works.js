import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Import your own project thumbnails here
// import thumbProject1 from '../public/images/works/[your-project]_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* Add your own projects here
        <Section>
          <WorkGridItem id="[project-id]" title="[Project Title]" thumbnail={[your-thumbnail]}>
            [Project description]
          </WorkGridItem>
        </Section>
        */}
        
        <Section>
          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            Add your projects here by editing this file
          </div>
        </Section>
      </SimpleGrid>

      {/* 
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="[collab-id]" thumbnail={[thumbnail]} title="[Collaboration Title]">
            [Collaboration description]
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      */}
    </Container>
  </Layout>
)

export default Works