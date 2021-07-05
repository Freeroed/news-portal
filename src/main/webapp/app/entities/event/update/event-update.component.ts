import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import * as dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { IEvent, Event } from '../event.model';
import { EventService } from '../service/event.service';

@Component({
  selector: 'jhi-event-update',
  templateUrl: './event-update.component.html',
})
export class EventUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    title: [],
    body: [],
    startAt: [],
    finishedAt: [],
    place: [],
  });

  constructor(protected eventService: EventService, protected activatedRoute: ActivatedRoute, protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ event }) => {
      if (event.id === undefined) {
        const today = dayjs().startOf('day');
        event.startAt = today;
        event.finishedAt = today;
      }

      this.updateForm(event);
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const event = this.createFromForm();
    if (event.id !== undefined) {
      this.subscribeToSaveResponse(this.eventService.update(event));
    } else {
      this.subscribeToSaveResponse(this.eventService.create(event));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEvent>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(event: IEvent): void {
    this.editForm.patchValue({
      id: event.id,
      title: event.title,
      body: event.body,
      startAt: event.startAt ? event.startAt.format(DATE_TIME_FORMAT) : null,
      finishedAt: event.finishedAt ? event.finishedAt.format(DATE_TIME_FORMAT) : null,
      place: event.place,
    });
  }

  protected createFromForm(): IEvent {
    return {
      ...new Event(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      body: this.editForm.get(['body'])!.value,
      startAt: this.editForm.get(['startAt'])!.value ? dayjs(this.editForm.get(['startAt'])!.value, DATE_TIME_FORMAT) : undefined,
      finishedAt: this.editForm.get(['finishedAt'])!.value ? dayjs(this.editForm.get(['finishedAt'])!.value, DATE_TIME_FORMAT) : undefined,
      place: this.editForm.get(['place'])!.value,
    };
  }
}
