import {Controller, Get} from "@tsed/common";
import {Returns} from "@tsed/schema";


@Controller("/basic")
export class BasicExample {
  @Get("/:id")
  @Returns(200).ContentType("application/json").Examples({
    Example1: {
      description: "Example with hello1",
      value: {test: "hello1"}
    },
    Example2: {
      description: "Example with hello2",
      value: {test: "hello2"}
    }
  })
  get() {
    return {test: "hello"};
  }

  @Get("/")
  @Returns(200, Array).ContentType("application/json").Examples({
    Example1: {
      description: "Example with hello1",
      value: [{test: "hello1"}]
    },
    Example2: {
      description: "Example with hello2",
      value: [{test: "hello2"}]
    }
  })
  getList() {
    return [{test: "hello"}];
  }
}
