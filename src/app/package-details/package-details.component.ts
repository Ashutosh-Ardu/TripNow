import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { LowestPriceDialogComponent } from '../lowest-price-dialog/lowest-price-dialog.component';
import { RapComponent } from '../rap/rap.component';
import { CancelComponent } from '../cancel/cancel.component';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrl: './package-details.component.scss'
})
export class PackageDetailsComponent implements OnInit {
  location?: string;
  boxId?: string;
  // boxIndex?: number;
  packageId?: number;

  openLowestPriceDialog() {
    this.dialog.open(LowestPriceDialogComponent);
  }

  openrap() {
    this.dialog.open(RapComponent);
  }

  opencancel() {
    this.dialog.open(CancelComponent);
  }

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  selectedDiv: number | undefined;

  selectDiv(index: number) {
    if (this.selectedDiv === index) {
      this.selectedDiv = undefined; // Toggle off if already selected
    } else {
      this.selectedDiv = index;
    }
  }

  openPhotoGallery(): void {
    const dialogRef = this.dialog.open(PhotoGalleryComponent, {
      width: '90%',
      height: '90%'
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.boxIndex = +params['id'];
      this.packageId = +params['id'];
      this.location = params['location'];
      // Use the location parameter to fetch data or perform other operations
    });
  }
}
