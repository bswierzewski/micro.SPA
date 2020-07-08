import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/_services/version.service';
import { Observable } from 'rxjs';
import { VersionInfo } from 'src/app/_models/VersionInfo';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-admin-version-list',
  templateUrl: './admin-version-list.component.html',
  styleUrls: ['./admin-version-list.component.css']
})
export class AdminVersionListComponent implements OnInit {

  constructor(private versionService: VersionService, private alertify: AlertifyService) { }

  versions: VersionInfo[] = [];

  ngOnInit(): void {
    this.versionService.getAllVersions().subscribe(
      next => {
        console.log(next);
        this.versions = next;
      },
      error => {
        if (error.status !== 404) {
          this.alertify.error(error);
        }
      }
    );
  }

}
