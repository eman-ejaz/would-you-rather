import React from 'react';
import { Box } from '@mui/material';
import { LinearProgress, Typography } from '@material-ui/core';

const QuestionOption = (props) => {
  return (
    <div>
      {props.questionData.answered && (
        <Box
          sx={{
            border: '1px solid #DAD7D7',
            backgroundColor: '#F3F3F3',
            padding: '10px',
            minWidth: '120px',
            width: '30%',
            fontWeight: '100',
            display: 'block',
            margin: '0 auto',
            marginBottom: '20px',
            justifyContent: 'center',
          }}
        >
          <Typography variant='button' display='block' gutterBottom>
            {props.optionText}
          </Typography>
          <Typography variant='overline' gutterBottom sx={{ marginTop: '5' }}>
            Scored {props.scoredVotes} votes out of a total of{' '}
            {props.totalVotes} vote/votes.
          </Typography>
          <LinearProgress
            variant='determinate'
            value={props.optionPercentage}
          />
          <Typography variant='body2' color='text.secondary'>{`${Math.round(
            props.optionPercentage
          )}%`}</Typography>

          {props.toMark && <img alt='badge' src={'/tick.svg'} />}
        </Box>
      )}
    </div>
  );
};

export default QuestionOption;
