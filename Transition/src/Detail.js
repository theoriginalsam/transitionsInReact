import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import {SharedElement} from 'react-native-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Detail = (props) => {
  const {width, height} = Dimensions.get('window');
  const {data} = props.route.params;
  console.log(data);
  return (
    <View style={{flex: 1}}>
      <View>
        <SharedElement id={`item.${data.id}.photo`}>
          <Image
            resizeMode="cover"
            source={{uri: data.image}}
            style={{
              height: height - 300,
              width: width,

              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          />
        </SharedElement>

        <View style={{position: 'absolute', top: 5, left: 10}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
          }}>
          <SharedElement id={`item.${data.id}.text`}>
            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
              {data.title}
            </Text>
          </SharedElement>
          <View style={{flex: 1}}>
            <Text style={{opacity: 0.7, textAlign: 'justify'}}>
              Wikipedia is not a reliable source. Wikipedia can be edited by
              anyone at any time. This means that any information it contains at
              any particular time could be vandalism, a work in progress, or
              just plain wrong. ... Wikipedia generally uses reliable secondary
              sources, which vet data from primary sources.Wikipedia is not a
              reliable source. Wikipedia can be edited by anyone at any time.
              This means that any information it contains at any particular time
              could be vandalism, a work in progress, or just plain wrong. ...
              Wikipedia generally uses reliable secondary sources, which vet
              data from primary sources.Wikipedia is not a reliable source.
              Wikipedia can be edited by anyone at any time. This means that any
              information it contains at any particular time could be vandalism,
              a work in progress, or just plain wrong. ... Wikipedia generally
              uses reliable secondary sources, which vet data from primary
              sources. Wikipedia is not a reliable source. Wikipedia can be
              edited by anyone at any time. This means that any information it
              contains at any particular time could be vandalism, a work in
              progress, or just plain wrong. ... Wikipedia generally uses
              reliable secondary sources, which vet data from primary
              sources.Wikipedia is not a reliable source. Wikipedia can be
              edited by anyone at any time. This means that any information it
              contains at any particular time could be vandalism, a work in
              progress, or just plain wrong. ... Wikipedia generally uses
              reliable secondary sources, which vet data from primary
              sources.Wikipedia is not a reliable source. Wikipedia can be
              edited by anyone at any time. This means that any information it
              contains at any particular time could be vandalism, a work in
              progress, or just plain wrong. ... Wikipedia generally uses
              reliable secondary sources, which vet data from primary sources.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Detail;
