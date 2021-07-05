import * as dayjs from 'dayjs';

export interface INews {
  id?: number;
  title?: string | null;
  body?: string | null;
  date?: dayjs.Dayjs | null;
}

export class News implements INews {
  constructor(public id?: number, public title?: string | null, public body?: string | null, public date?: dayjs.Dayjs | null) {}
}

export function getNewsIdentifier(news: INews): number | undefined {
  return news.id;
}
