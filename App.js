import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, FooterTab, Button, Icon,content } from 'react-native';

import { Ionicons, Feather,Entypo,EvilIcons,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';





import AppNavigator from './navigation/AppNavigator';
import { getCurrentFrame } from 'expo/build/AR';
const imgData = [

  { id: 1, imgSource: require('./assets/images/2.jpg') },
  { id: 2, imgSource: require('./assets/images/4.jpg') },
  { id: 3, imgSource: require('./assets/images/5.png') },
  { id: 4, imgSource: require('./assets/images/6.jpg') },
  { id: 5, imgSource: require('./assets/images/7.jpg') },
  { id: 6, imgSource: require('./assets/images/8.jpg') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (

    <View style={styles.container}>

      <View style={styles.first}>

        <Ionicons style={styles.sendMassage} name="ios-arrow-back" size={32} color="black" />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={{
            flex: 1,
            width: null,
            height: 44
          }}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>

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

              <Ionicons style={styles.sendMassage} name="md-send" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.countLikeGroup}>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>
            210
         </Text>
          <Text style={styles.countlabel}>
            Photos
         </Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>
            15K
         </Text>
          <Text style={styles.countlabel}>
            follower
         </Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>
            605
         </Text>
          <Text style={styles.countlabel}>
            Following
         </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{
        flex: 1
      }}>
        <View style={styles.imagesGroup} >
          <View style={{
            flexDirection: "column",
          }}>
            {imgData.slice(0, centerImgData).map(
              item => {
                return (<Image source={item.imgSource} style={{
                  width: 200,
                  height: 150,
                  marginRight: 5,
                  marginTop: 5,
                }} />)
              }
            )}

          </View>
          <View style={{
            flexDirection: "column",
          }}>
            {imgData.slice(centerImgData).map(
              item => {
                return (<Image source={item.imgSource} style={{
                  width: 200,
                  height: 150,
                  marginRight: 5,
                  marginTop: 5,
                }} />)
              }
            )}

          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
      <Entypo style={styles.sendMassage} name="home" size={40} color="black" />
      <EvilIcons style={styles.sendMassage} name="search" size={48} color="black" />
      <MaterialCommunityIcons style={styles.sendMassage} name="plus-box-outline" size={40} color="black" />
      <AntDesign style={styles.sendMassage} name="hearto" size={40} color="black" />
      <Feather style={styles.sendMassage} name="user" size={40} color="black" />
      </View>
    


     
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
    justifyContent: "flex-end",
    alignItems: "center"



  },
  imagewrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  countLikeGroup: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imagesGroup: {
    flex: 0.6,
    flexDirection: "row",


  },
  avatarImg: {
    width: 90,
    height: 90,



  },
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-center"

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
    justifyContent: 'center',
    alignItems: "center",
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
  countGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 25,
    fontWeight: 'bold',
  }
  ,
  countlabel: {
    fontSize: 20,
    fontWeight: "400",
  }
  ,
  first: {
    flex: 0.15,

    flexDirection: 'row',
    backgroundColor: 'White',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    flex: 0.1,
    backgroundColor: "white",
    flexDirection:"row",
   justifyContent:"space-between",
  }


});
