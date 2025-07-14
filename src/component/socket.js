import io from "socket.io-client";
import { Live_API } from "./api";
const socket = io(Live_API);
export default socket;