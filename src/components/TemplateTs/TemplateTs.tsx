import React, { useState } from 'react';

//makes it so you have to input a "person" with first and last see other file for usage
//interfaces are a way to check types or might hear it called "duck typing"
interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string; //allows us to enter text in the input field
  ok?: boolean; //the ? makes it option and not a needed item
  func?: (foo: string) => string; //using a function that takes in an arg food and returns it
  person: Person; //this is how we can pass in an object
}

interface TextNode {
  text: string;
}

export const TemplateTs: React.FC<Props> = () => {
  const [count, setCount] = useState(5); //it will infer the type by default
  const [name, setName] = useState<string | null>(''); //we can explicitly set the type ourself and the single |(pipe) is or
  const [node, setNode] = useState<TextNode>({
    //we can pass in interfaces as well
    text: 'Init State with interface',
  });
  // setName(5) would give an error
  setName('This is fine though');
  return (
    <div>
      <input />
    </div>
  );
};
