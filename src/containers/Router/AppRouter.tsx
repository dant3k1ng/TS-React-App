import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const AppRouter = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/entities" component={MainPage} />
        </Switch>
    </main>
);

export default AppRouter;