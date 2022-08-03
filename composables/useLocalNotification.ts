import { LocalNotifications } from "@capacitor/local-notifications";
import { defineStore } from "pinia";
import { Capacitor } from "@capacitor/core";

export const useLocalNotification = defineStore("notification", {
  state: () => ({
    token: "",
    notification: null,
    notificationList: null,
    processing: false,
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    reset(state) {
      state.$reset();
    },

    async addLocalNotificationListeners() {
      await LocalNotifications.addListener("registration", (token) => {
        console.info("Registration token: ", token.value);
        this.token = token.value;
      });

      await LocalNotifications.addListener("registrationError", (err) => {
        console.error("Registration error: ", err.error);
      });

      await LocalNotifications.addListener("pushNotificationReceived", (notification) => {
        console.log("Push notification received: ", notification);
        this.notification = notification;
      });

      await LocalNotifications.addListener("pushNotificationActionPerformed", (notification) => {
        console.log("Push notification action performed", notification.actionId, notification.inputValue);
        this.notification = notification;
      });
    },

    async registerLocalNotifications() {
      let permStatus = await LocalNotifications.checkPermissions();

      if (permStatus.receive === "prompt") {
        permStatus = await LocalNotifications.requestPermissions();
      }

      if (permStatus.receive !== "granted") {
        throw new Error("User denied permissions!");
      }

      await LocalNotifications.register();
    },

    async getDeliveredNotifications() {
      this.notificationList = await LocalNotifications.getDeliveredNotifications();
      console.log("delivered notifications", notificationList);
    },

    async sendLocal(title,body,id) {
      console.log("here");
      LocalNotifications.schedule({
        notifications: [{
            title: title,
            body: body,
            id: id,
            attachments: null,
            actionTypeId: "",
            extra: null,
            sound:'alert_tone.mp3',
            // trigger: {
            //     at: new Date(Date.getTime() + (1000 * 1))
            // },
        }]
    }).then(() => {
        
    });
    },
    async sendLocal2(title,body,id) {
      console.log("here");
      LocalNotifications.schedule({
        notifications: [{
            title: title,
            body: body,
            id: id,
            attachments: null,
            actionTypeId: "",
            extra: null,
            sound:'beep.mp3',
            // trigger: {
            //     at: new Date(Date.getTime() + (1000 * 1))
            // },
        }]
    }).then(() => {
        
    });
    }
  },
});
