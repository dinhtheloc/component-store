import { createAction, props } from "@ngrx/store";
import { Product } from "../models";

export const searchSuccess = createAction(
    '[Products/API] Search Success',
    props<{ products: Product[] }>()
)

export const searchFailure = createAction(
    '[Products/API] Search Failure',
    props<{ errorMsg: string }>()
)