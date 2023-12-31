import { outputAst } from '@angular/compiler';
import { Todo } from './../shared/todo.model';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import tippy from 'tippy.js';

@Component({   
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit,AfterViewInit {
  @Input()
  todo!: Todo;
 @Output()
 todoClicked : EventEmitter<void> = new EventEmitter()
 @Output()
 editClicked : EventEmitter<void> = new EventEmitter()
 @Output()
 deleteClicked : EventEmitter<void> = new EventEmitter()


 @ViewChild('editBtn') editBtnElRef: ElementRef<HTMLElement> | undefined
 @ViewChild('deleteBtn') deleteBtnElRef: ElementRef<HTMLElement> | undefined
  constructor() { }

ngOnInit(): void {
}

ngAfterViewInit(): void {
  tippy (this.editBtnElRef!.nativeElement,{
    content: 'Edit Todo'
  })
  tippy (this.deleteBtnElRef!.nativeElement,{
    content:'Delete Todo'
  })
}



onTodoClicked(){
  this.todoClicked.emit()
}

onEditClicked(){
  this.editClicked.emit()
}

onDeleteClicked(){ 
  this.deleteClicked.emit()
  
}
}


