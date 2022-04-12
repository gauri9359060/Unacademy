import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        heading: 'Structured courses',
        label: 'All our courses are structured in line with your exam syllabus to help you best prepare for it',
        imgPath:
            'https://static.uacdn.net/web-cms/daily_live_classes_be8fa5af21.svg?q=75&w=1000&fm=webp',
    },
    {
        heading: 'Interactive Live Classes',
        label: 'Chat with the educator, engage in discussions and ask your questions - all during a class',
        imgPath:
            'https://static.uacdn.net/web-cms/chat_with_educator_6cb3c64761.svg?q=75&w=1000&fm=webp',
    },
    {
        heading: 'Live test and quizzes',
        label: 'Take live Mock Tests curated in line with the exam pattern and stay on track with your preparation',
        imgPath:
            'https://static.uacdn.net/web-cms/mock_test_quizes_521a5f770e.svg?q=75&w=1000&fm=webp',
    },
];

function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{width:"100%", flexGrow: 1 }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ marginLeft: '250px' }}
            />
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                    textAlign: 'center'
                }}
            >
                <Typography variant='h5'>{images[activeStep].heading}</Typography>
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
        </Box>
    );
}

export default Slider;
