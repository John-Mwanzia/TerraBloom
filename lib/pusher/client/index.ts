import PusherClient from "pusher-js";

// initialize the pusher client with the key and cluster from the environment variables
// the authEndpoint is the endpoint that the client will use to authenticate the user
export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
  authEndpoint: "/api/pusher/auth",
});