import { Target as TargetInterface } from "./types";

class Target implements TargetInterface {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

export default Target;
