class DiscordNotification {
    constructor({ notificationService }) {
    // Subscribe to order.placed events
    notificationService.subscribe("order.placed", "discord-notification");
    }
}

export default DiscordNotification;