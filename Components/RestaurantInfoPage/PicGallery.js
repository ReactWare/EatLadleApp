import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Headline, Paragraph, Title} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';

const style = StyleSheet.create({
  caption: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#e1e1e1',
  },
});

export default class PicGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicIndex: 0,
    };
    this.onPicSwipe = this.onPicSwipe.bind(this);
  }

  onPicSwipe(index) {
    this.setState({ currentPicIndex: index });
  }

  render() {
    const { data, kitIndex } = this.props;
    const { currentPicIndex } = this.state;
    
    const { name, content } = data.menu.kits[kitIndex];
    const images = content.map((food) => data.menu.items[food].picture);
    const imageDescriptions = content.map((food) => ({
      i: food,
      name: data.menu.items[food].name,
      description: data.menu.items[food].description,
    }));
    console.log(imageDescriptions);
    return (
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={220}
          currentImageEmitter={index => this.onPicSwipe(index)}
          inactiveDotColor="#777"
        />
        <View style={style.caption}>
          <Title>{`Kit #${kitIndex + 1}: ${name}`}</Title>
          <Headline>{imageDescriptions[currentPicIndex].name}</Headline>
          <Paragraph>
            {imageDescriptions[currentPicIndex].description}
          </Paragraph>
        </View>
      </View>
    );
  }
}
