import { Route, Switch } from 'react-router-dom';
import EntitiesPage from '../EntitiesPage/EntitiesPage';
import MainPage from '../MainPage/MainPage';
import ProfilePage from '../User/ProfilePage';

const AppRouter = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/entities" component={EntitiesPage} />
            <Route exact path="/profile" component={ProfilePage} />
        </Switch>
    </main>
);

export default AppRouter;