import { StyleSheet } from "react-native";

export default StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 15,
  },
  emptyText: {
    fontSize: 22,
    alignSelf: "center",
    marginTop: "50%",
  },
});
