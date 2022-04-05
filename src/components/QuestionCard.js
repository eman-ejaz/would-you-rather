import React from 'react'
import Button from '@material-ui/core/Button';
import { Card, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";


const QuestionCard = ({userAvatar, question}) => {
    return (
        <Card variant="outlined">
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='overline' gutterBottom>
                        {question.author} asks:
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <img src={userAvatar} alt={'Avatar'}/>
                </Grid>
                <Grid container item xs={7}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' gutterBottom>
                            Would you rather
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='div' gutterBottom>
                            {question.optionOne.text}
                            {' '} or ...
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                            <Button
                                variant='contained'
                                size='small'
                                color='primary'
                                component={Link}
                                to={`/questions/${question.id}`}
                            >
                                Open Question
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>


    )
}

export default QuestionCard