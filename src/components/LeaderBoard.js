import React from 'react'
import {useSelector} from "react-redux";
import {createLeaderBoardData} from "../utils/utils";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from '@mui/material/Paper';
import {Redirect} from "react-router-dom";
import {ROUTE_URLS} from "../constants/routes";
import Navbar from "./Navbar";
import {Typography} from "@mui/material";

const LeaderBoard = () => {
    const users = useSelector((state) => state.usersReducer.users);
    const {authedUser} = useSelector((state) => state.authedReducer);
    const loggedIn = authedUser !== null;

    if (!loggedIn) {
        return <Redirect to={{pathname: ROUTE_URLS.LOGIN, state: {route:ROUTE_URLS.LEADER_BOARD}}} />;
    }
    return (
        <>
            <Navbar/>
            <Typography variant={'h4'} component={'div'} gutterBottom>
                Leaders of Would you Rather.
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="right">Questions</TableCell>
                            <TableCell align="right">Answers</TableCell>
                            <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {createLeaderBoardData(users).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.questionsScore}</TableCell>
                                <TableCell align="right">{row.answersScore}</TableCell>
                                <TableCell align="right">{row.leaderBoardScore}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default LeaderBoard