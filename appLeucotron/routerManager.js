import {
    createStackNavigator, createAppContainer
} from 'react-navigation';

import RestauranteApp from './src/screen/firstScreen';
import SegundaTela  from './src/screen/secondScreen';
import TerceiraTela  from './src/screen/thirdScreen';
import QuartaTela from './src/screen/fourthScreen';

const App = createStackNavigator(
    {RestauranteApp,SegundaTela,TerceiraTela,QuartaTela},
    {
        initialRouteName: 'RestauranteApp',
    }
);

export default App;