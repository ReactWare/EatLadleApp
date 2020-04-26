// Reference: https://www.youtube.com/watch?v=q9kMlcn8Pm8&t=918s
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ActionSheet, Root } from "native-base";
import ImagePicker from 'react-native-image-crop-picker';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  imageContent: {
    width: wp('90%'),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  btnPressStyle: {
      backgroundColor: '#0080ff',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
  },
  txtStyle: {
      color: '#ffffff'
  },
  itemImage: {
      backgroundColor: '#2F455C',
      height: 150,
      borderRadius: 8,
      resizeMode: 'contain'
  },
  itemViewImage: {
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5
  }
})

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    };
  }

  updateState = (name, value) => {
    this.setState({
      text: value
    })
    this.props.updateState(name, value)
  }

  onSelectedImage = (image) => {
    let newDataImage = this.state.fileList;
    const source = {url: image.path};
    let item = {
        id: Date.now(),
        url: source,
        content: image.data
    }
    newDataImage.push(item);
    this.setState({fileList: newDataImage})
  }

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
        compressImageMaxWidth: 400,
        compressImageMaxHeight: 400,
        compressImageQuality: 0.7,
        cropping: false,
        includeBase64: true
      }).then(image => {
        console.log('takePhotoFromCamera: ', image);
        this.onSelectedImage(image);
      });
  };

  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
        compressImageMaxWidth: 400,
        compressImageMaxHeight: 400,
        compressImageQuality: 0.7,
        cropping: false,
        includeBase64: true
      }).then(image => {
        console.log('choosePhotoFromLibrary; ', image);
        this.onSelectedImage(image);
      });
  };

  onClickAddImage = () => {
    const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
    ActionSheet.show({options: BUTTONS, 
        cancelButtonIndex: 2, 
        title: 'Select a Photo'},
    buttonIndex => {
        switch (buttonIndex) {
            case 0:
                this.takePhotoFromCamera();
                break;
            case 1:
                this.choosePhotoFromLibrary();
                break;
            case 2:
                break
        }
    }
    
    )
  }

  renderItem = ({item, index}) => {
    return (
        <View style={styles.itemViewImage}>
            <Image source={item.url} style={styles.itemImage}/>
        </View>
    )
  };

  render() {
      let {fileList} = this.state;
    return (
        <Root>
            <View style={styles.imageContent}>
                <FlatList
                    data={fileList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                />

                <TouchableOpacity onPress={this.onClickAddImage} style={styles.btnPressStyle}>
                    <Text style={styles.txtStyle}>Add an Image</Text>
                </TouchableOpacity>
            </View>
        </Root>
    );
  }
}
