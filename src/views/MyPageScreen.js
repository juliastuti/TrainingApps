import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{display: 'flex', padding: 16, width: '100%'}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.profileimage}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <View>
          <Text style={styles.profileemail}>Email</Text>
          <Text style={styles.profilepassword}>Password Here</Text>
          <TouchableOpacity
            style={{
              borderColor: '#1644BD',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 12,
              paddingHorizontal: 16,
              width: '100%',
              paddingVertical: 4,
              marginLeft: 16,
              marginTop: 4,
            }}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                color: '#1644BD',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.label}>About Me</Text>
      <Text style={styles.profiledesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        aliquet vitae est egestas aliquam. Sed consectetur maximus imperdiet.
        Fusce tempor ut nulla interdum pellentesque. Mauris magna sapien,
        pretium id convallis sed, finibus a elit. Mauris quam orci, interdum ac
        nisi at, volutpat tempor odio.
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileimage: {
    width: 90,
    height: 90,
  },
  profileemail: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  profilepassword: {
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  label: {
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  profiledesc: {
    paddingTop: 20,
    textAlign: 'justify',
    color: 'black',
  },
});
