
export type UserType = 'm3' | 'sealphie';
export type TodoFrequency = 'daily' | 'weekly';

export interface Todo {
  id: string;
  text: string;
  frequency: TodoFrequency;
  completed: boolean;
  owner: UserType;
}

export interface Contribution {
  id: string;
  owner: UserType;
  amount: number;
  taskName: string;
  date: string;
}

export interface AppState {
  todos: Todo[];
  logs: Contribution[];
  penaltyAmount: number;
}
