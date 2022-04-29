import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-liked-widget',
  templateUrl: './liked-widget.component.html',
  styleUrls: ['./liked-widget.component.scss']
})
export class LikedWidgetComponent implements OnInit {

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
  public fonts  = { faThumbsUp }
  constructor(
    private uniqueIdsService : UniqueIdService
  ) { }

  ngOnInit(): void {
    if(!this.id){
      this.id = this.uniqueIdsService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }



}
