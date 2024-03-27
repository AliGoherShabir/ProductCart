import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 12,
  },
  addToCartButton: {
    backgroundColor: "green",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  addToCartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusMinusButton: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  count: {
    paddingHorizontal: 10,
  },
  removeButton: {
    backgroundColor: "red",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginStart: 18,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  totalPrice: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
});
