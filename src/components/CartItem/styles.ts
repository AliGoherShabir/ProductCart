import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: "100%",
  },
  imageWrapper: {
    marginRight: 10,
    width: 100,
    height: 180,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 8,
    overflow: "hidden",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  total: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
