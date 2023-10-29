import { Effect, EffectError, Event } from 'effector';

export type Dep<Payload = any, Params = any, Done = any, Fail = any> =
  | Event<Payload>
  | Effect<Params, Done, Fail>;
export type Deps = Array<Dep>;

export type Phase<Name extends string, Dependencies extends Deps> = {
  name: Name;
  deps?: Dependencies;
};

export type PhaseError<Dependency extends Dep, Payload = any> = EffectError<
  Exclude<Dependency, Event<Payload>>
>;
