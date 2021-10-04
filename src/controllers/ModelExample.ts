import {Controller, Get} from "@tsed/common";
import {Property, Returns} from "@tsed/schema";

export class MyModel {
  @Property()
  id: string;

  @Property()
  test: string;
}

@Controller("/model")
export class ModelExample {
  @Get("/:id")
  @Returns(200, MyModel).ContentType("application/json").Examples({
    Example1: {
      description: "Example with hello1",
      value: {id: "id", test: "hello1"}
    },
    Example2: {
      description: "Example with hello1",
      value: {id: "id", test: "hello2"}
    }
  })
  get() {
    const model = new MyModel()
    model.id = "1"
    model.test = "hello1"
    return model;
  }

  @Get("/")
  @Returns(200, Array).Of(MyModel).ContentType("application/json").Examples({
    Example1: {
      description: "Example with hello1",
      value: [{id: "id", test: "hello1"}]
    },
    Example2: {
      description: "Example with hello2",
      value: [{id: "id", test: "hello2"}]
    }
  })
  getList() {
    const model = new MyModel()
    model.id = "1"
    model.test = "hello1"
    return [model];
  }
}
