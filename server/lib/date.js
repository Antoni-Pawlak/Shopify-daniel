import moment from "moment-timezone";

export function currTS() {
  return moment().tz("America/New_York").format("YYYY-MM-DD HH:mm:ss");
}
