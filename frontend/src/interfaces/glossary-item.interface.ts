export interface IGlossaryItem {
  id: string;
  term: string;
  definition: string;
  source?: string;
  childs?: IChild[];
}

export interface IChild {
  child: string;
  relation: string;
}