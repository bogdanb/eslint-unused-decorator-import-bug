import {Decorator} from "./decorator";

@Decorator("Test Name")
class TestClass {
    value = 1;
}

console.log(new TestClass());
