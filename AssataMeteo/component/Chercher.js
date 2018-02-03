import React from 'react'
import { TextInput, View, Image, Button } from 'react-native'
import {StackNavigator} from 'react-navigation'
import Liste from './Liste'



 class Chercher extends React.Component {
    static navigationOptions = { // methode qui renvoie plusieur params ! dans ce cas tabBarIcon
        tabBarIcon: () => { // pour afficher les icons 
          return  <Image source={require('./icon/png/Chercher.png')}  />
        }
     }

     // constructeur qui permet de définir le state 
    constructor(props) {
        super(props)
        this.state = {
            city:'casa'
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    submit() {
        this.props.navigation.navigate('Resultat', {city: this.state.city})
    }

    render()
    {
        return (
            <View>
            <TextInput
                // si je clique pour ecrire ça change car sans ça tjr fixe 
                onChangeText= {(text) => this.setCity(text)}
               // underlineColorAndroid = 'transparent'
                style={{ height: 100 , shadowColor : 'red' }}
                value={this.state.city}
               

            />
            <Button onPress={() => this.submit()} title="Chercher" /> 
                </View>
        );
    }
}
export default StackNavigator({

    Chercher: {
        screen: Chercher,
       // path: 'people/:name',
    },
    Resultat: {
        screen: Liste, // faire appel à la page liste
       // navigationOptions
    }
})