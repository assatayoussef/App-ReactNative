import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
export default class TempRow extends React.Component {

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    }

    icon(size = 50) {

        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        //  console.log(this.props.weather[0])
        switch (type) {
            case 'clouds':
                image = require('./icon/png/cloud.png')
                break;
            case 'rain':
                image = require('./icon/png/rain.png')
                break;
            default:
                image = require('./icon/png/sun.png')

        }
        return <Image source={image} style={{width : size , height : size }}  />
    }

    render() {
        if (this.props.index === 0) {
            return (

                <View style={[style.View, style.firstView ]}>


                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.icon(90)}
                        <Text style={style.temp} >  {moment(this.props.day.dt * 1000).format('MMMM Do YYYY')}  </Text>
                    </View>

                    <Text style={style.temp}> {this.props.day.main.temp} </Text>



                </View>

            )
        }
        else {
            return (

                <View style={style.View}>


                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.icon()}
                        <Text style={style.temp} >  {moment(this.props.day.dt * 1000).format('MMMM Do YYYY')}  </Text>
                    </View>

                    <Text style={style.temp}> {this.props.day.main.temp} </Text>



                </View>

            )
        }
    }

}

const style = StyleSheet.create({

    View: {
        backgroundColor: 'grey',
        borderWidth: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row', // pour mettre la date et la temp dans la meme ligne 
        justifyContent: 'space-between', // mettre de l'espace'
        alignItems :'center'

    },
    firstView: {
        backgroundColor: '#ffe4e1'
    },

    temp: {
        color: '#FFF',
        // fontWeigth: 'bold',
        fontSize: 20,

    },
});
