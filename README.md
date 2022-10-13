# Implenting Discord as Notification provider in MedusaJS

![medusa-discord-integration](https://user-images.githubusercontent.com/67496096/193741801-e112fc58-dbe2-4321-9320-513216e08077.png)

# About

## Participants

Suraj Vishwakarma - @surajondev

## Description

Discord is one of the best communication platforms for organizations. Medusa is a leading open-source eCommerce platform. Combining both of them to send Order Notification from Medusa to Discord server using the webhook.  
I have implemented Discord as the notification provider with the event `order.placed`.

## Preview

When the order placed from the Medusa's storefront. A message will be send to the Discord Server using the WebHook.

*Order placed on Medusa*
![image](https://user-images.githubusercontent.com/67496096/193768273-123167ce-9946-46b9-85b2-af1ee6178620.png)

*Message in Discord Server*

![image](https://user-images.githubusercontent.com/67496096/195573733-85d54eb0-85c0-4c28-b51e-acb2b07395f8.png)

# Setup Project

## Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build. 
- [Git](https://git-scm.com/downloads): It is an open source version control system. 
- [Medusa CLI](https://docs.medusajs.com/quickstart/quick-start): It will be used while running the medusa server on the local machine.
- [Discord Webhook](https://www.youtube.com/watch?v=fKksxz2Gdnc): Setup a webhook integration on your discord server.
- [Redis](https://docs.medusajs.com/tutorial/set-up-your-development-environment): Redis is an in-memory data structure store and message broker.

## Install Project

1. Clone the Repository

```bash
git clone https://github.com/surajondev/medusa-discord-integration.git
```

2. Install packages in the `/backend/` and `/storefront/` directory

```
npm install
```

3. In the `/backend` create a `.env` file add the discord webhook URL

```bash
DISCORD_WEBHOOK_URL="WEBHOOK URL"
```

4. Run the server, storefront and the redis server.

For server from `/backend/`:
```bash
npm run start
```

For storefront from `/storefront/`
```bash
npm run dev
```

For Redis:
```bash
sudo service redis-server start
```

# Resources

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa's Documentation](https://docs.medusajs.com/)
- [Discord Webhook](https://discord.com/developers/docs/resources/webhook)
