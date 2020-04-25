import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Headline, Paragraph} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';

const style = StyleSheet.create({
  caption: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#e1e1e1',
  },
});

export default class PicGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?taco',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
      ],
      imageDescriptions: [
        {
          title: 'carne asada fries',
          description: 'i really want carne asada fries'
        },
        {
          title: 'tacos',
          description: 'hell yeah i want this',
        },
        {
          title: 'burrito',
          description: 'mmmm i want this',
        },
        {
          title: 'horchata',
          description: 'oh hell yes',
        },
      ],
      currentPicIndex: 0,
    };
    this.onPicSwipe = this.onPicSwipe.bind(this);
  }
  // other component code ...
  onPicSwipe(index) {
    this.setState({ currentPicIndex: index });
  }

  render() {
    const { images, imageDescriptions, currentPicIndex } = this.state;
    return (
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={300}
          currentImageEmitter={index => this.onPicSwipe(index)}
          inactiveDotColor="#777"
        />
        <View style={style.caption}>
          <Headline>{imageDescriptions[currentPicIndex].title}</Headline>
          <Paragraph>
            {imageDescriptions[currentPicIndex].description}
          </Paragraph>
        </View>
      </View>
    );
  }
}
