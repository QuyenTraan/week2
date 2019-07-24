import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imagewrapper}>
          <Image
            source={require('./assets/images/1.png')}
            style={styles.avatarImg}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Quyen Traan</Text>
          <Text style={styles.jobText}>Developer</Text>
          <View style={styles.ButtonWrapter}>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}> Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageBtn} >

              <Ionicons style={styles.sendMassage}name="md-send" size={32} color="white"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.countLikeGroup} />
      <View style={styles.imagesGroup} />



    </View>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.3,
    backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent:'center',
    // alignContent:'center',

  },
  imagewrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  countLikeGroup: {
    flex: 0.4,
    backgroundColor: 'green'
  },
  imagesGroup: {
    flex: 0.6,
    backgroundColor: 'pink'
  },
  avatarImg: {
    width: 90,
    height: 90,



  },
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  followBtn: {
    height: 40,
    width: 100,
    backgroundColor: '#1e90ff',
    borderRadius: 19,
    marginTop: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }

  },
  imageBtn: {
    backgroundColor: '#87cefa',
    height: 40,
    width: 70,
    marginTop: 10,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:"center",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  ButtonWrapter: {
    flexDirection: 'row'
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  jobText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',

  },
  followText:
  {
    color: '#fafad2',
    fontWeight: '700',
    fontSize: 15,

  },
 
});
