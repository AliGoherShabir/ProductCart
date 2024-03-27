import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 8,
  },
  itemContainer: {
    paddingHorizontal: 12,
  },
  labelText: { fontWeight: "bold", color: "#000011", fontSize: 16 },
  itemPriceText: {
    color: "#000011",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  itemImage: {
    width: "100%",
    height: 300,
  },
  itemDetails: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    width: "100%",
  },
  descriptionText: { color: "#000011", fontSize: 16 },
  itemTitleText: {
    fontWeight: "bold",
    color: "#000011",
    fontSize: 16,
    marginHorizontal: 20,
    flex: 1,
  },
  headerStyle: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 15,
  },
});
