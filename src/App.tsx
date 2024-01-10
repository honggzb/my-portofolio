import { Box } from '@chakra-ui/react';
import './App.css';
import Header from './features/Header';
import Landing from './features/Landing';
import LatestProjects from './features/LatestProjects';
import Footer from './features/Footer';

function App() {

  return (
    <>
      <Box p={20}>
        <Header />
        <Box mb={40}><Landing /></Box>
        <LatestProjects />
        <Footer />
      </Box>
    </>
  )
}

export default App
