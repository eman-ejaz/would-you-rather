
import {ROUTE_URLS} from './constants/routes';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Question from "./components/QuestionContainer";
import CreateQuestion from "./components/CreateQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Error from "./components/404";



export default (
    <Switch>
        <Route exact path={ROUTE_URLS.LOGIN} component={Login} />
        <Route exact path={ROUTE_URLS.HOME} component={Home} />
        <Route path={ROUTE_URLS.QUESTION_ID} component={Question} />
        <Route exact path={ROUTE_URLS.LEADER_BOARD} component={LeaderBoard} />
        <Route exact path={ROUTE_URLS.ADD} component={CreateQuestion} />
        <Route component={Error} />
    </Switch>
);
