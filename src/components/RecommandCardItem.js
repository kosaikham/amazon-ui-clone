import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card, CardItem, Right } from "native-base";
import StartRating from "react-native-star-rating";

class RecommandCardItem extends Component {
  render() {
    return (
      <CardItem>
        <View>
          <Image
            source={this.props.imageUri}
            style={{
              width: 60,
              height: 90
            }}
          />
        </View>
        <Right
          style={{
            flex: 1,
            alignItems: "flex-start",
            height: 90,
            paddingHorizontal: 10,
            justifyContent: "space-around"
          }}
        >
          <Text>{this.props.itemName}</Text>
          <Text
            style={{
              fontSize: 10,
              color: "grey"
            }}
          >
            by {this.props.itemCreator}
          </Text>
          <Text
            style={{
              color: "#c4402f",
              fontWeight: "bold"
            }}
          >
            {this.props.itemPrice}
          </Text>
          <Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14
              }}
            >
              You save{" "}
            </Text>
            ${this.props.itemSaving}
          </Text>
          <StartRating
            disabled={true}
            maxStars={5}
            starSize={10}
            rating={this.props.rating}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
        </Right>
      </CardItem>
    );
  }
}

export default RecommandCardItem;
