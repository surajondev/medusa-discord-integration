import axios from 'axios';
import {NotificationService} from 'medusa-interfaces'

class DiscordNotification extends NotificationService {
    static identifier = "discord-notification";
    constructor({ orderService }) {
      super();
      this.orderService_ = orderService;
    }
    async sendNotification(eventName, eventData) {
        if (eventName === 'order.placed') {
          //retrieve order
          const order = await this.orderService_.retrieve(eventData.id, {
            relations: ['items']
            }
          )

        const URL = process.env.DISCORD_WEBHOOK_URL

        let content = `New Order Placed⚡\nNumber of products: ${order.items.length}`
        const embeds = []
        
        
        order.items.map(item => {
          content += `\n\nProduct : ${item.title} \nQuantity : ${item.quantity} \nDescription:${item.description}`
          embeds.push({
            image: {
               url: item.thumbnail
            }
          });
        })

        await axios.post(URL, {
          content,
          embeds
        })

        return {
          to: URL,
          data: {
              content,
              embeds
          }
        };
        
    }}}

  export default DiscordNotification;