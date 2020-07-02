import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Share,
} from 'react-native';
import {data, Profile} from './data/data';

import {SharedElement} from 'react-native-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/Feather';

const Home = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,

          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View>
          <Text style={styles.date}>{Profile.Date}</Text>
          <Text style={styles.head}>BLOG</Text>
        </View>
        <View>
          <Image
            style={styles.headerImage}
            source={{uri: Profile.profilePic}}
          />
        </View>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <TouchableScale
                    activeScale={0.9}
                    tension={50}
                    friction={7}
                    useNativeDriver
                    onPress={() => {
                      navigation.navigate('Detail', {data: item});
                    }}>
                    <SharedElement id={`item.${item.id}.photo`}>
                      <Image
                        resizeMode="cover"
                        source={{uri: item.image}}
                        style={{
                          height: height - 300,
                          width: width - 50,
                          borderRadius: 10,
                          marginBottom: 10,
                          margin: 15,
                          right: 5,
                        }}
                      />
                    </SharedElement>
                    <SharedElement
                      style={{
                        width: width - 40,
                        position: 'absolute',
                        bottom: 90,
                        right: 10,
                        paddingHorizontal: 10,
                      }}
                      id={`item.${item.id}.text`}>
                      <Text style={styles.title}>{item.title}</Text>
                    </SharedElement>

                    <SharedElement id={`item.${item.id}.profilePic`}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          position: 'absolute',
                          bottom: 20,
                          left: 20,
                        }}>
                        <Image
                          source={{uri: item.profilePic}}
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 10,
                            marginBottom: 10,
                          }}
                        />
                      </View>
                    </SharedElement>

                    <SharedElement id={`item.${item.id}.username`}>
                      <View
                        style={{
                          alignItems: 'flex-start',
                          position: 'absolute',
                          bottom: 40,
                          left: 80,
                        }}>
                        <Text style={{color: 'white'}}>{item.username}</Text>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 10,
                            fontWeight: 'bold',
                          }}>
                          {item.readtime}
                        </Text>
                      </View>
                    </SharedElement>
                  </TouchableScale>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: 'orange',
    fontWeight: 'bold',
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 28,
  },
});

export default Home;
