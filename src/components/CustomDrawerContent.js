import React from "react";
import { Text, Platform, StatusBar, FlatList } from "react-native";
import { Container, Header, Content, Left, Icon, ListItem } from "native-base";

const styles = {
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
};

const CustomDrawerContent = props => {
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
        <Left style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="person"
            style={{
              color: "white"
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
              fontStyle: "italic"
            }}
          >
            Hello, Sai Lao Kham
          </Text>
        </Left>
      </Header>
      <Content>
        <FlatList
          style={{
            borderBottomWidth: 0.8,
            borderBottomColor: "#f0f0f0"
          }}
          data={[
            { key: "1", name: "Home" },
            { key: "2", name: "Shop by Category" },
            { key: "3", name: "Today's Deal" }
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item.name}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#f0f0f0"
          }}
          data={[
            { key: "1", name: "Your Wish List" },
            { key: "2", name: "Your Account" },
            { key: "3", name: "Amazon Pay" },
            { key: "4", name: "Prime" },
            { key: "5", name: "Sell on Amazon" }
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item.name}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#f0f0f0"
          }}
          data={[
            { key: "1", name: "Settings" },
            { key: "2", name: "Customer Service" }
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item.name}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

export default CustomDrawerContent;
