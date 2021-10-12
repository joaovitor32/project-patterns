export interface ShapeType {
  x: number;
  y: number;
  color: string;
}

export interface Rectangle {
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
}

export interface Circle {
  radius: number;
  x: number;
  y: number;
  color: string;
}

export interface Shape<T> {
  clone(): T;
}
