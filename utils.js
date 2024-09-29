import { matchFont } from "@shopify/react-native-skia";

export const isPointCollidingWithRect = (point, rect) => {
  "worklet";
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.w &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.h
  );
};

export { matchFont };
