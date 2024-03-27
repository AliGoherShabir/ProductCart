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
    borderRadius: 8,
    overflow: "hidden",
  },
  itemTitleText: { flex: 0.8, color: "#000011", fontSize: 16 },
  itemPriceText: {
    flex: 0.2,
    color: "#000011",
    fontSize: 16,
    textAlign: "right",
    fontStyle: "italic",
  },
  itemImage: {
    width: "100%",
    height: 150,
  },
  itemDetails: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
