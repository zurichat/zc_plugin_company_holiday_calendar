export const reducer = (randomData, action) => {
  switch (action.type) {
    case "event-popup":
      const lastActiveIndex = randomData.findIndex(
        (card) => card.event === true
      );

      if (lastActiveIndex !== -1) {
        randomData[lastActiveIndex].event = false;
      }

      if (lastActiveIndex === action.payload.index) {
        randomData[lastActiveIndex].event = !randomData[lastActiveIndex].event;
      }

      return randomData.map((card, index) =>
        index === action.payload.index ? { ...card, event: !card.event } : card
      );

    default:
      return randomData;
  }
};
