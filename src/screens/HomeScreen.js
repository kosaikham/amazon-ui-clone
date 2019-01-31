import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Card,
  CardItem
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import RecommandCardItem from "../components/RecommandCardItem";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          style={[
            {
              height: 90,
              backgroundColor: "#3a455c",
              borderBottomColor: "#757575"
            },
            styles.androidHeader
          ]}
        >
          <Left
            style={{
              flexDirection: "row"
            }}
          >
            <Icon
              onPress={() => this.props.navigation.toggleDrawer()}
              name="md-menu"
              style={{
                fontSize: 30,
                color: "white",
                marginRight: 15
              }}
            />
            <FAIcon
              name="amazon"
              style={{
                fontSize: 30,
                color: "white"
              }}
            />
          </Left>
          <Right>
            <Icon
              name="md-cart"
              style={{
                color: "white"
              }}
            />
          </Right>
        </Header>
        <View
          style={{
            position: "absolute",
            top: Platform.OS == "android" ? 90 : 100,
            left: 0,
            right: 0,
            backgroundColor: "#3a455c",
            // backgroundColor: "yellow",
            height: 70,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 5
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#e7e7eb",
                borderRadius: 4,
                padding: 10,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 12
                }}
              >
                Search by
              </Text>
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                Category
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              height: "100%",
              marginLeft: 5,
              justifyContent: "center"
            }}
          >
            <Item
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                borderRadius: 4
              }}
            >
              <Icon
                name="search"
                style={{
                  fontSize: 20,
                  paddingTop: 4
                }}
              />
              <Input placeholder="Search" />
            </Item>
          </View>
        </View>
        <Content
          style={{
            backgroundColor: "#d5d5d6",
            marginTop: Platform.OS == "android" ? 70 : 55
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 50,
              flexDirection: "row",
              paddingHorizontal: 5,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text>Hello, Sai Lao Kham</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  marginRight: 5
                }}
              >
                Your Account
              </Text>
              <Icon
                name="arrow-forward"
                style={{
                  fontSize: 18
                }}
              />
            </View>
          </View>

          <Swiper
            autoplay={true}
            style={{
              height: 100,
              marginTop: 10
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/banner_1.jpeg")}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover"
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/banner_2.png")}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover"
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/banner_3.jpeg")}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover"
                }}
              />
            </View>
          </Swiper>

          <Card
            style={{
              marginTop: 10,
              marginRight: 5,
              marginLeft: 5
            }}
          >
            <CardItem
              header
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#dddddd"
              }}
            >
              <Text>Your Recommandations</Text>
            </CardItem>
            <RecommandCardItem
              itemName="Building Bots with Node.js"
              itemCreator="Eduardo Freitas, Madan Bhintade"
              itemPrice="$39"
              itemSaving="5.5"
              imageUri={require("../../assets/recommand_1.jpg")}
              rating={5}
            />
            <RecommandCardItem
              itemName="Getting Started with React Native"
              itemCreator="Ethan Holmes, Tom Bray"
              itemPrice="$26"
              itemSaving="5.5"
              imageUri={require("../../assets/recommand_2.jpg")}
              rating={5}
            />
            <RecommandCardItem
              itemName="MERN Quick Start Guide"
              itemCreator="Eddy Wilson Iriarte Koroliova"
              itemPrice="$29"
              itemSaving="5.5"
              imageUri={require("../../assets/recommand_3.jpg")}
              rating={5}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
};

export default HomeScreen;
