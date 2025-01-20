import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Carousel = ({
  images = [
    require('../../assets/images/Carousel/movie1.png'),
    require('../../assets/images/Carousel/movie2.png'),
    require('../../assets/images/Carousel/movie3.png'),
    require('../../assets/images/Carousel/movie4.png'),
    require('../../assets/images/Carousel/movie5.png'),
    require('../../assets/images/Carousel/movie6.png'),
    require('../../assets/images/Carousel/movie7.png'),
    require('../../assets/images/Carousel/movie8.png'),
    require('../../assets/images/Carousel/movie9.png'),
  ],
  visibleCount = 3,
}: {

  images?: any[];         // Bildlistan skickas in som prop
  visibleCount?: number;  // Antalet synliga bilder

}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex(currentIndex + visibleCount); 
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - visibleCount)); 
    }
  };

  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  };

  const handleBackToCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.carouselContainer}>
      {selectedImage !== null ? (
        <View style={styles.selectedImageContainer}>
          {/* Den valda bilden */}
          <Image source={images[selectedImage]} style={styles.selectedImage} />

          {/* Tillbaka knapp */}
          <TouchableOpacity style={styles.backButton} onPress={handleBackToCarousel}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* Vänsterpil */}
          <TouchableOpacity
            style={[styles.arrowButton, currentIndex === 0 && styles.disabledArrow]}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          >
            <Text style={[styles.arrowText, currentIndex === 0 && styles.disabledArrowText]}>
              &#9664;
            </Text>
          </TouchableOpacity>

          {/* Bilder */}
          <View style={styles.imageContainer}>
            {images.slice(currentIndex, currentIndex + visibleCount).map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectImage(currentIndex + index)}
                style={styles.imageWrapper}
              >
                <Image
                  source={image}
                  style={[
                    styles.image,
                    selectedImage === currentIndex + index && styles.selectedImageStyle,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Högerpil */}
          <TouchableOpacity
            style={[
              styles.arrowButton,
              currentIndex + visibleCount >= images.length && styles.disabledArrow,
              currentIndex + visibleCount >= images.length && styles.endOfCarousel,
            ]}
            onPress={handleNext}
            disabled={currentIndex + visibleCount >= images.length}
          >
            <Text
              style={[
                styles.arrowText,
                currentIndex + visibleCount >= images.length && styles.disabledArrowText,
              ]}
            >
              &#9654;
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    position: 'relative',
  },
  arrowButton: {
    padding: 10,
  },
  disabledArrow: {
    opacity: 0.5,
  },
  endOfCarousel: {
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 24,
    color: 'black',
  },
  disabledArrowText: {
    color: 'gray',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  imageWrapper: {
    padding: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  selectedImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedImage: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  selectedImageStyle: {
    width: 250,
    height: 400,
  },
  backButton: {
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default Carousel;
