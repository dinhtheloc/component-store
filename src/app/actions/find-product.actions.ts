import { createAction, props } from '@ngrx/store';

export const searchActions = createAction(
  '[Product page] Search Product',
  props<{ query: string }>()
);
