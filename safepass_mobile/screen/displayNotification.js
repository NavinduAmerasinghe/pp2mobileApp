// displayNotification.js
import { scheduleNotificationAsync } from "expo-notifications";

const displayNotification = async (animalName) => {
  try {
    const notificationId = await scheduleNotificationAsync({
      content: {
        title: "Animal Detected through camera",
        body: `Detected Animal is: ${animalName}`,
      },
      trigger: null, // To show immediately
    });

    return notificationId;
  } catch (error) {
    console.error("Error displaying notification:", error);
    throw error;
  }
};

export default displayNotification;
