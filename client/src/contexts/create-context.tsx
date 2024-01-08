import React, { Reducer, Dispatch, useContext, createContext, useReducer, PropsWithChildren } from 'react';

export function useCreateContext<S, A>(defaultValue: S, reducer: Reducer<S, A>) {
  const defaultDispatch: Dispatch<A> = () => defaultValue;
  const stateCtx = createContext(defaultValue);
  const dispatchCtx = createContext(defaultDispatch);

  const useStateCtx = <K extends keyof S>(property: K) => {
    const state = useContext(stateCtx);
    return state[property];
  };

  const useDispatchCtx = () => useContext(dispatchCtx);

  const Provider = ({ children }: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  };

  return [useStateCtx, useDispatchCtx, Provider] as const;
}
