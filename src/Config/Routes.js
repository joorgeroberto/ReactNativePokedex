import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import InitialScreen from '../Containers/InitialScreen';
import Home from '../Containers/Home';
import TypeScreen from '../Containers/TypeScreen';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      InitialScreen,
      Home,
      TypeScreen,
    },
    {
      initialRouteName: 'InitialScreen',
      unmountInactiveRoutes: true,
    },
  ),
);

export default Routes;
