import { combine, Store } from 'effector';
import { reshape } from 'patronum';
import { EffectState } from 'patronum/status';

// eslint-disable-next-line effector/enforce-store-naming-convention
export const combineStatuses = (stores: Array<Store<EffectState>>) =>
  combine(stores, (statuses) => {
    if (statuses.every((s) => s === 'initial')) {
      return 'initial';
    }
    if (statuses.every((s) => s === 'done')) {
      return 'done';
    }
    if (statuses.some((s) => s === 'fail')) {
      return 'fail';
    }
    if (statuses.some((s) => s === 'pending')) {
      return 'pending';
    }

    return 'pending';
  });

export const reshapeStatus = ($status: Store<EffectState>) =>
  reshape({
    source: $status,
    shape: {
      $isInitial: (s) => s === 'initial',
      $isPending: (s) => s === 'pending',
      $isDone: (s) => s === 'done',
      $isFail: (s) => s === 'fail',
    },
  });
