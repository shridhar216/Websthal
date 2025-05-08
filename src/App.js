import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HomePage from './pages/HomePage'; 
import CompanyProfile from './pages/CompanyProfile'
import Services from './pages/Services';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content for mobile menu 
  const drawer = (
    <div style={{ width: 250 }}>
      <Typography variant="h6" style={{ padding: '16px 0', textAlign: 'center' }}>
        Algorizon Technologies
      </Typography>
      <List>
        {['Home', 'Company Profile', 'Services', 'FAQ', 'Contact', 'Blog'].map((text) => (
          <ListItem button key={text} onClick={() => navigate(`/${text.toLowerCase().replace(/ /g, '-')}`)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: '#6200ea' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }} // Only show on mobile
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Algorizon Technologies
          </Typography>
          <div style={{ display: 'flex' }}>
            {['Home', 'Company Profile', 'Services', 'FAQ', 'Contact', 'Blog'].map((text) => (
              <Button
                key={text}
                color="inherit"
                sx={{ display: { xs: 'none', sm: 'block' } }} // Hidden on mobile
                onClick={() => navigate(`/${text.toLowerCase().replace(/ /g, '-')}`)} // Use navigate
              >
                {text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile
          sx={{
            display: { xs: 'block', sm: 'none' }, // Only show on mobile
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <main style={{ marginTop: '64px' }}> {/* To push content below the AppBar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/company-profile" element={<CompanyProfile/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
};

// Wrap the App component with Router at the root level (this should be done in the entry point, typically index.js)
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
















// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomePage from './pages/HomePage'; // Main content component

// const App = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Drawer content for mobile menu
//   const drawer = (
//     <div style={{ width: 250 }}>
//       <Typography variant="h6" style={{ padding: '16px 0', textAlign: 'center' }}>
//         Algorizon Technologies
//       </Typography>
//       <List>
//         {['Home', 'Company Profile', 'Services', 'Careers', 'FAQ', 'Contact', 'Blog'].map((text) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', sm: 'none' } }} // Only show on mobile
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Algorizon Technologies
//           </Typography>
//           <div style={{ display: 'flex' }}>
//             {['Home', 'Company Profile', 'Services', 'Careers', 'FAQ', 'Contact', 'Blog'].map((text) => (
//               <Button key={text} color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}> {/* Hidden on mobile */}
//                 {text}
//               </Button>
//             ))}
//           </div>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }} // Better open performance on mobile
//           sx={{
//             display: { xs: 'block', sm: 'none' }, // Only show on mobile
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <main style={{ marginTop: '64px' }}> {/* To push content below the AppBar */}
//         <HomePage />
//       </main>
//     </div>
//   );
// };

// export default App;










// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;







// import './App.css';
// import Homepage from './pages/Homepage';

// function App() {
//   return (
//     <div>
//       <Homepage />
//     </div>
//   );
// }

// export default App;
