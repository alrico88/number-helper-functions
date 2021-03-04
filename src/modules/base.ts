import type {NumberLike} from '../helpers/types';

export function enforceNumber(n: NumberLike): number {
  return Number(n);
}
