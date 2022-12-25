namespace App {
  /**
   * AutoBind decorator
   */
  export function Autobind(
    _target: any,
    _methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFunction = descriptor.value;
    const autobindDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFunction = originalFunction.bind(this);
        return boundFunction;
      },
    };

    return autobindDescriptor;
  }
}
