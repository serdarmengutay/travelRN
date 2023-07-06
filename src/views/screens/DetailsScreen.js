import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
              color: COLORS.white,
            }}
          >
            {place.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{ color: COLORS.white, fontWeight: "bold", fontSize: 20 }}
            >
              {place.rate}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              color: COLORS.primary,
              fontWeight: "bold",
            }}
          >
            {place.location}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.dark,
          }}
        >
          About the trip
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22, color: COLORS.dark }}>
          {place.details}
        </Text>
      </View>
      <View style={style.footer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}
          >
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: COLORS.grey,
              marginLeft: 2,
            }}
          >
            /PER DAY
          </Text>
        </View>
        <View style={style.bookNowBtn}>
          <Text
            style={{ color: COLORS.primary, fontSize: 16, fontWeight: "bold" }}
          >
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    bottom: 30,
  },
  detailsContainer: {
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DetailsScreen;
