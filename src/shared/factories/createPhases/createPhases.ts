import { combine, createEvent, sample } from 'effector';
import { omit } from 'ramda';

import { createPhase } from './createPhase';
import { Deps, Phase } from './models';
import { combineStatuses, reshapeStatus } from './utils';

type CreatePhasesConfig<Name extends string, Dependencies extends Deps> = {
  phases: Array<Phase<Name, Dependencies>>;
};

export const createPhases = <Name extends string, Dependencies extends Deps>({
  phases,
}: CreatePhasesConfig<Name, Dependencies>) => {
  const started = createEvent<void>();

  // Create phases map
  const $$phasesMap = createMap(phases);

  [...$$phasesMap.values()].map((phase, index, all) => {
    phase.run.watch(() => console.log(phases[index]?.name + ' is started'));

    if (index === 0) {
      sample({ clock: started, target: phase.run });

      return;
    }

    const prevPhaseStatus = all[index - 1]?.$status;

    if (prevPhaseStatus === undefined) {
      return;
    }

    sample({
      clock: prevPhaseStatus,
      filter: (s) => s === 'done',
      target: phase.run,
    });
  });

  // Create phases units object
  const $$phasesUnitsObject = reshapeMapToObject<Name, Dependencies>(
    $$phasesMap,
  );

  // Aggregate phase errors
  const $errors = combineErrors($$phasesMap);

  //   Aggregate phase statuses
  const $status = combineStatuses(
    [...$$phasesMap.values()].map((phase) => phase.$status),
  );

  const { $isInitial, $isPending, $isDone, $isFail } = reshapeStatus($status);

  return {
    run: started,
    $errors,
    $status,
    $isInitial,
    $isPending,
    $isDone,
    $isFail,
    phases: $$phasesUnitsObject,
  };
};

function createMap<Name extends string, Dependencies extends Deps>(
  phases: Array<Phase<Name, Dependencies>>,
) {
  const $$map: Map<
    string,
    ReturnType<typeof createPhase<Dependencies>>
  > = new Map();

  phases.map(({ name, deps }) => $$map.set(name, createPhase({ deps })));

  return $$map;
}

function combineErrors<Dependencies extends Deps>(
  $$map: Map<string, ReturnType<typeof createPhase<Dependencies>>>,
) {
  return combine(
    [...$$map.values()].map((phase) => phase.$errors),
    (phasesErrors) => {
      const res = phasesErrors.filter((e) => e !== null).flatMap((e) => e);
      return res.length === 0 ? null : res;
    },
  );
}

function reshapeMapToObject<Name extends string, Dependencies extends Deps>(
  $$map: Map<string, ReturnType<typeof createPhase<Dependencies>>>,
) {
  return [...$$map.entries()].reduce(
    (phases, phase) => ({
      ...phases,
      [phase[0]]: omit(['run'], phase[1]),
    }),
    {} as {
      [key in Name]: Omit<ReturnType<typeof createPhase<Dependencies>>, 'run'>;
    },
  );
}
