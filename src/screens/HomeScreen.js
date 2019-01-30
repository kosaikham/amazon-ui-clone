import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Icon,
  Item,
  Input
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            height: 90,
            backgroundColor: "#3a455c",
            borderBottomColor: "#757575"
          }}
        >
          <Left
            style={{
              flexDirection: "row"
            }}
          >
            <Icon
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
            top: 100,
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
                padding: 10
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
            marginTop: 55
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
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
