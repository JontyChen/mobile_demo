import { createContext } from 'react'

const MyContext = createContext({
  name: 'hello'
});

MyContext.displayName = 'MyContext';

export default MyContext;