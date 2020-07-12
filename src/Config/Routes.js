import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import InitialScreen from '../Containers/InitialScreen';
import Home from '../Containers/Home';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      InitialScreen,
      Home,
    },
    {
      initialRouteName: 'InitialScreen',
      unmountInactiveRoutes: true,
    },
  ),
);

export default Routes;
