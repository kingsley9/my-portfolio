import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import '../../global.scss';
import Tooltip from '@material-ui/core/Tooltip';
import { useDarkMode } from '../../contexts/DarkModeContext';

const DarkModeToggle = ({ menuOpen }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleModeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Tooltip title={darkMode ? 'Turn on the lights' : 'Turn off the lights'}>
      <IconButton onClick={handleModeChange} className="dark-button">
        {darkMode ? (
          <LightModeOutlinedIcon
            sx={{
              color: '#eeeeee',
              fontSize: '25px',
            }}
          />
        ) : (
          <DarkModeOutlinedIcon
            sx={{
              color: menuOpen ? '#eeeeee' : 'inherit',
              fontSize: '25px',
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
