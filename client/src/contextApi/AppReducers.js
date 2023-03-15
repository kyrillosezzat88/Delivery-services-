// i should sperate reducers but no need in simple app

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PERCELS":
      return {
        ...state,
        percels: action.payload,
        isLoading: false,
      };

    case "CREATE_SHIPMENT":
      return {
        ...state,
        percels: [...state.percels, action.payload],
        isLoading: false,
      };

    case "UPDATE_PARCEL":
      return {
        ...state,
        percels: state.percels.filter(
          (percel) => percel._id !== action.payload
        ),
      };
    case "CARRIER_SHIPMENTS":
      return {
        ...state,
        myShipments: action.payload,
        isLoading: false,
      };

    case "DELIVER_PARCEL":
      return {
        ...state,
        myShipments: state.myShipments.map((parcel) =>
          parcel._id === action.payload
            ? { ...parcel, status: "delivered" }
            : parcel
        ),
      };
    default:
      return state;
  }
};