import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import About from './component/About'
import Chercher from './component/Chercher'
import { TabNavigator } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';


const Tab = TabNavigator({
    About: { screen: About },
    Chercher: { screen: Chercher },
   
    
},
    {
        tabBarPosition: 'bottom', // position de la bare 'top ' pour le haut
        animationEnabled: true,
        tabBarOptions: {
           // activeTintColor: '#e91e63',
            showIcon: true,
            showLabel: false
         //   pressColor: 'green',
          //  style : {
           //     backgroundColor : 'blue'
           // }
        
        },
    }) 
 
    
export default class App extends React.Component {
  
    constructor(props) {
        super();
        this.state = {
            visible: false
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                visible: !this.state.visible
            });
        }, 3000);
    }
    render() {
        return (
             // flex à 1 pour que le systeme de tab sait quel espace occupé 
            <Spinner visible={this.state.visible}> </Spinner>            
                <View style={{ flex: 1 }}>
                    <StatusBar hidden={true} />
                    <Tab />
                </View>

         
            
      
        //    </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
