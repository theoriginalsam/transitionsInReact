import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  let Width = Dimensions.get('window').width;
  let Height = Dimensions.get('window').height;
  var images = [
    {id: 1, src: require('./assets/1.jpg')},
    {id: 2, src: require('./assets/2.jpg')},
    {id: 3, src: require('./assets/3.jpg')},
    {id: 4, src: require('./assets/4.jpg')},
    //working on transition
    //these are the images to be .
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View>
          {images.map((images) => {
            return (
              <TouchableWithoutFeedback key={images.id}>
                <Animated.View
                  style={{width: Width, height: Height, padding: 10}}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      borderRadius: 20,
                    }}
                    source={images.src}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
