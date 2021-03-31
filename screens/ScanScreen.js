import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native'
import {createAppContainer} from 'react-navigation'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'


export default class ScanScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            hasCameraPermissions : null,
            scanned : false, 
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermissions : status==='granted'});

    }

    handleBarCodeScanned = async ({time, data}) => {
        this.setState({scanned: true, scannedData: data, buttonState: 'normal'})
    }

    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState
    
        if(buttonState === "clicked" && hasCameraPermissions){
          return (
            <BarCodeScanner onBarCodeScanned={scanned?'undefined':this.handleBarCodeScanned} />
          )
        } 
        else if(buttonState=== "normal"){
          return (
            <View>
              <Text>{hasCameraPermissions===true?this.state.scannedData:"Request for Camera Permission"}</Text>
              <Image source={require('../assets/image.jpeg')} />
              <TouchableOpacity onPress={this.getCameraPermission}>
                <Text>Scan QR Code</Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
    }