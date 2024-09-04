import PusherServer from "pusher";

// create a variable to store the pusher server instance
let pusherInstance: PusherServer | null = null;

// initialize the pusher server with the key, secret, and cluster from the environment variables
export const getPusherInstance = () => {
  if (!pusherInstance) {
    pusherInstance = new PusherServer({
      appId: process.env.PUSHER_APP_ID as string,
      key: process.env.NEXT_PUBLIC_PUSHER_KEY as string,
      secret: process.env.PUSHER_SECRET as string,
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
      useTLS: true,
    });
  }
  return pusherInstance;
};
