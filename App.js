import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  Button,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DataTable } from "react-native-paper";

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.matchTitle,
        }}
      >
        <Tab.Screen name="Johannesburg Super Kings" component={Match1} />
        <Tab.Screen name="MI Cape Town" component={Match2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Match1 = () => {
  const updateStat = (min = 1, max = 200, isToLocal = false) => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      const betData = {};
      betData["count"] = Math.floor(Math.random() * 200) + 1;
      betData["users"] = (
        Math.floor(Math.random() * 500000) + 100000
      ).toLocaleString("en-US");
      console.log("&&&&&&&&&&&&&&&&&");
      console.log(betData);
      arr.push(betData);
    }
    console.log(arr);
    return arr;
  };
  const [backTableData, setBackTableData] = useState(updateStat());
  const [layTableData, setLayTableData] = useState(updateStat());

  useEffect(() => {
    setInterval(() => {
      const updatedBackTableData = updateStat();
      console.log(updatedBackTableData);
      setBackTableData(updatedBackTableData);

      const updatedLayTableData = updateStat();
      console.log(updatedLayTableData);
      setLayTableData(updatedLayTableData);
    }, 3000);
  }, []);
  console.log("^^^^^^^^^^^^^^^^^^^^^");
  console.log(backTableData);
  console.log(backTableData.length);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitleBack}>Back</Text>
        <DataTable>
          <DataTable.Row style={{ border: "0px" }}>
            {backTableData.map((val, index) => (
              <DataTable.Cell
                key={index}
                style={index === 2 ? styles.darkBg : styles.lightBg}
              >
                <p style={styles.title}>{val.count}</p>
                <p style={styles.subPara}>{val.users}+</p>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitleLay}>Lay</Text>
        <DataTable>
          <DataTable.Row style={{ border: "0px" }}>
            {layTableData.map((val, index) => (
              <DataTable.Cell
                key={index}
                style={index === 2 ? styles.redDarkBg : styles.redLightBg}
              >
                <p style={styles.title}>{val.count}</p>
                <p style={styles.subPara}>{val.users}+</p>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
};
const Match2 = () => {
  const updateStat = (min = 1, max = 200, isToLocal = false) => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      const betData = {};
      betData["count"] = Math.floor(Math.random() * 200) + 1;
      betData["users"] = (
        Math.floor(Math.random() * 500000) + 100000
      ).toLocaleString("en-US");
      console.log("111111");
      console.log(betData);
      arr.push(betData);
    }
    console.log(arr);
    return arr;
  };
  const [backTableData, setBackTableData] = useState(updateStat());
  const [layTableData, setLayTableData] = useState(updateStat());

  useEffect(() => {
    setInterval(() => {
      const updatedBackTableData = updateStat();
      console.log(updatedBackTableData);
      setBackTableData(updatedBackTableData);

      const updatedLayTableData = updateStat();
      console.log(updatedLayTableData);
      setLayTableData(updatedLayTableData);
    }, 3000);
  }, []);
  setInterval(() => {});

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginLeft: "-10px" }}>
        <Text style={styles.subTitleBack}>Back</Text>
        <DataTable>
          <DataTable.Row style={{ border: "0px" }}>
            {backTableData.map((val, index) => (
              <DataTable.Cell
                key={index}
                style={index === 2 ? styles.darkBg : styles.lightBg}
              >
                <p style={styles.title}>{val.count}</p>
                <p style={styles.subPara}>{val.users}+</p>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitleLay}>Lay</Text>
        <DataTable>
          <DataTable.Row style={{ border: "0px" }}>
            {layTableData.map((val, index) => (
              <DataTable.Cell
                key={index}
                style={index === 2 ? styles.redDarkBg : styles.redLightBg}
              >
                <p style={styles.title}>{val.count}</p>
                <p style={styles.subPara}>{val.users}+</p>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
};
const commonCss = {
  height: 48,
  justifyContent: "center",
  border: "1px solid #ddd",
  textAlign: "center",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Set flexDirection to 'row' for horizontal arrangement
    padding: 16,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
  },

  head: { height: 80, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  title: {
    fontWeight: "bold",
    color: "#0f2327",
    fontFamily: "Lato, Avenir, Verdana, Nunito",
    fontSize: 12,
  },
  subTitleBack: {
    margin: "10px",
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "Lato, Avenir, Verdana, Nunito",
    fontSize: 20,
  },
  subTitleLay: {
    margin: "10px",
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "Lato, Avenir, Verdana, Nunito",
    fontSize: 20,
  },
  matchTitle: {
    fontWeight: "bold",
    fontFamily: "Lato, Avenir, Verdana, Nunito",
    fontSize: 15,
  },
  subPara: {
    fontSize: 9,
    justifyContent: "center",
    fontFamily: "Lato, Avenir, Verdana, Nunito",
  },
  lightBg: {
    ...commonCss,
    backgroundColor: "#E3F3FE",
  },
  darkBg: {
    ...commonCss,
    backgroundColor: "#A7D8FD",
  },
  redDarkBgHovered: {
    backgroundColor: "#E3F3FE",
  },
  redLightBg: {
    ...commonCss,
    backgroundColor: "#FDEEF2",
  },
  redDarkBg: {
    ...commonCss,
    backgroundColor: "#F9C9D4",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
    justifyContent: "center", // align items in the center horizontally
    alignItems: "center", // align items in the center vertically
  },
});
