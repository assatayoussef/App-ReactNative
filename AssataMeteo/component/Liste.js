import React from 'react'
import { StyleSheet , View, Text, Image, ActivityIndicator, ListView} from 'react-native'
import axios from 'axios'
import moment from 'moment'
import RowWeather from './TempRow'
//import 'moment/locale/fr' 
//moment.locale('fr')
    
export default class Liste extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            tabBarIcon: () => { // pour afficher les icons 
                return <Image source={require('./icon/png/Chercher.png')} />
            },
            title: `Meteo /  ${navigation.state.params.city}`
        }
       

    }
   

    constructor(props) {
        super(props)
   
           
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null,
          
        }
       this.fetchWeather()
    }

    //http://api.openweathermap.org/data/2.5/weather?q=London&APPID=228bd95cde4d4fcb22a56d22588bb0bd
    //http://api.openweathermap.org/data/2.5/forecast?q=London&appid=228bd95cde4d4fcb22a56d22588bb0bd
    //http://api.openweathermap.org/data/2.5/forecast?q=london&mode=json&units=metric&cnt=7&appid=228bd95cde4d4fcb22a56d22588bb0bd
    
 
    // methode pour faire appel à l'api avec axios '
    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&cnt=20&appid=228bd95cde4d4fcb22a56d22588bb0bd`)
            .then((response) => {
                this.setState({report:response.data})
            //  console.log(response.data)
           
            })
       
    }
    
    icon() {
        let image 
      type = this.props.day.weather[0].toLowerCase()
        //  console.log(this.props.weather[0])
        switch (type) {
            case 'clouds':
                image = require('./icon/png/cloud.png')
                break;
            case 'rain':
                image = require('./icon/png/rain.png')
                break;
            default:
                image: require('./icon/png/sun.png')

      }
        return <Image source={image}  />
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator size="large" />)
        }
        else {
            //  console.log(this.state.report.weather)

            
            //  this.state = {
            //   dataSource: ds.cloneWithRows(this.state.report.list),
            //  };

            
        
              
         

            
               
            
                const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

            return (
            
                <ListView
             
               
                    dataSource={ds.cloneWithRows(this.state.report.list)} 
                    renderRow={(rowData, j, k) => <RowWeather day={rowData} index={parseInt(k,10)}   />}
                  
                    
                />
                

            )
            
            
        }
    }

}


