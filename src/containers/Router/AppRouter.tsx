import { Route, Switch } from 'react-router-dom';
import AdministrationPage from '../AdministrationPage/AdministrationPage';
import EcoSystemPage from '../EcoSystemPage/EcoSystemPage';
import EntitiesPage from '../EntitiesPage/EntitiesPage';
import MainPage from '../MainPage/MainPage';
import PeoplePage from '../PeoplePage/PeoplePage';
import PublicationsPage from '../PublicationsPage/PublicationsPage';
import PrivacyPage from '../User/PrivacyPage';
import ProfilePage from '../User/ProfilePage';
import SettingsPage from '../User/SettingsPage';

const AppRouter = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/administration" component={AdministrationPage} />
            <Route exact path="/eco-system" component={EcoSystemPage} />
            <Route exact path="/entities" component={EntitiesPage} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/publications" component={PublicationsPage} />
            <Route exact path="/settings" component={SettingsPage} />
        </Switch>
    </main>
);

export default AppRouter;