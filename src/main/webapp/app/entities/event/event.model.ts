import * as dayjs from 'dayjs';

export interface IEvent {
  id?: number;
  title?: string | null;
  body?: string | null;
  startAt?: dayjs.Dayjs | null;
  finishedAt?: dayjs.Dayjs | null;
  place?: string | null;
}

export class Event implements IEvent {
  constructor(
    public id?: number,
    public title?: string | null,
    public body?: string | null,
    public startAt?: dayjs.Dayjs | null,
    public finishedAt?: dayjs.Dayjs | null,
    public place?: string | null
  ) {}
}

export function getEventIdentifier(event: IEvent): number | undefined {
  return event.id;
}
