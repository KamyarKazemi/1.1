interface NameState {
  value: string;
  loading: boolean;
  error: string | boolean;
}

export type { NameState };

interface RootState {
  nameReducer: NameState;
}

export type { RootState };
