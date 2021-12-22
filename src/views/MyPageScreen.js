import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {AuthContext} from '../context';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomModal, Popup} from '../components/molecules';
import {CustomButton} from '../components/atoms/CustomButton';

const MyPageScreen = () => {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({});
  const [user, dispatch] = useContext(AuthContext);

  const handleGetProfile = () => {
    axios
      .get('https://terraresta.com/app/api/ProfileCtrl/ProfileDisplay', {
        params: {
          access_token: user.token,
          user_id: user.userId,
        },
      })
      .then(res => {
        if (res.data.status == 1) {
          setProfile(res.data);
        }
      });
  };

  const handleDeleteAccount = () => {
    axios
      .get('https://terraresta.com/app/api/AccountCtrl/DeleteAccount', {
        params: {
          access_token: user.token,
        },
      })
      .then(res => {
        if (res.data.status == 1) {
          AsyncStorage.removeItem('USER').then(() => {
            dispatch({type: 'LOGOUT'});
          });
        }
      });
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {popup && (
            <Popup popup={popup} setPopup={setPopup}>
              <>
                <CustomButton theme="outline-primary" title="Gallery" />
                <CustomButton theme="outline-primary" title="Camera" />
                {profile.imageUrl && (
                  <CustomButton theme="outline-danger" title="Delete" />
                )}
              </>
            </Popup>
          )}
          {modal && (
            <CustomModal modal={modal} setModal={setModal}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '800',
                  color: 'black',
                  fontSize: 18,
                  marginBottom: 16,
                }}>
                Are you sure to delete account?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1, marginRight: 4}}>
                  <CustomButton
                    title="Cancel"
                    onPress={() => setModal(!modal)}
                    theme="outline-primary"
                  />
                </View>
                <View style={{flex: 1, marginLeft: 4}}>
                  <CustomButton
                    title="Delete"
                    onPress={() => handleDeleteAccount()}
                    theme="primary"
                  />
                </View>
              </View>
            </CustomModal>
          )}
          <View style={{display: 'flex', padding: 16, width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => !profile.imageUrl && setPopup(!popup)}>
                <Image
                  style={styles.profileimage}
                  source={{
                    uri: profile.imageUrl
                      ? profile.imageUrl
                      : 'https://via.placeholder.com/150',
                  }}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.profileemail}>
                  {profile && profile.email}
                </Text>
                <Text style={styles.profilepassword}>
                  {profile && profile.password}
                </Text>
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
                  }}>
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
              {profile.aboutMe ? profile.aboutMe : 'Deskripsi di API gak isi'}
            </Text>
            <CustomButton title="Term & Condition" theme="primary" />
            <CustomButton
              title="Delete Account"
              theme="outline-danger"
              onPress={() => setModal(!modal)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPageScreen;

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
