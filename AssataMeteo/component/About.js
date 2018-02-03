import React from 'react'
import { StyleSheet, View, Text, Image, Button, ActivityIndicator } from 'react-native'
export default class About extends React.Component {
    constructor(props) {
        super();
        this.state = {
            visible: false
        };
    }
    static navigationOptions = {
        tabBarIcon : () => {
         return   <Image source={require('./icon//png/About.png')} />
        }
    }
   
    Chercher() { // methode pour naviguer à la page rechercher 
       return this.props.navigation.navigate('Chercher')
    }
    render()
    {
        return (
          
                <View style={style.View}>
                    <Text style={style.Title}> This is my first app in react native yeaaaay </Text>
                    <Button onPress={() => this.Chercher()} title="chercher" />
                </View>
        
            
    )
    }
} 
const style = StyleSheet.create({
    View: {
        margin : 50,
    },

    Title: {
        fontSize: 20,
        marginBottom : 20
        
            },
});
