import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          style={{ backgroundColor: "white" }}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item
            title="Eggs Benedict"
            style={{ backgroundColor: "white" }}
          />
          <List.Item
            title="Classic Breakfast"
            style={{ backgroundColor: "white" }}
          />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Jollof rice" style={{ backgroundColor: "white" }} />
          <List.Item title="Fried rice" style={{ backgroundColor: "white" }} />
          <List.Item title="Gobe" style={{ backgroundColor: "white" }} />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Fufu" style={{ backgroundColor: "white" }} />
          <List.Item title="Banku" style={{ backgroundColor: "white" }} />
          <List.Item
            title="Groundnut soup"
            style={{ backgroundColor: "white" }}
          />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Sobolo" style={{ backgroundColor: "white" }} />
          <List.Item title="Asana" style={{ backgroundColor: "white" }} />
          <List.Item title="Palm wine" style={{ backgroundColor: "white" }} />
          <List.Item title="Tea" style={{ backgroundColor: "white" }} />
          <List.Item title="Coke" style={{ backgroundColor: "white" }} />
          <List.Item title="Fanta" style={{ backgroundColor: "white" }} />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
