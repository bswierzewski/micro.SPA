import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { Category } from 'src/app/modules/models/device-information/Category';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { DeviceComponentInformationService } from 'src/app/modules/_services/device-information/device-component-information.service';
import { KindInformationService } from 'src/app/modules/_services/device-information/kind-information.service';
import { CategoryInformationService } from 'src/app/modules/_services/device-information/category-information.service';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  isCreatedMode = false;
  autoUpdateGroupValue = 'auto';
  kinds$: Observable<Kind[]>;
  deviceComponents$: Observable<DeviceComponent[]>;
  versions$: any;

  macAddress: any;
  name: any;
  photoUrl: any;
  kind: any;
  deviceComponent: any;
  version: any;

  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' },
      ],
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' },
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' },
      ],
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ],
    },
  ];

  constructor(
    route: ActivatedRoute,
    private kindInformationService: KindInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService
  ) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
    this.deviceComponents$ = deviceComponentInformationService.getDeviceComponents();
    this.kinds$ = kindInformationService.getKinds();
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {}

  onClearVersionClick(): void {
    this.version = null;
  }

  getHeader(): string {
    return this.isCreatedMode ? 'Create new device' : 'Update device';
  }

  getSubmitButtonName(): string {
    return this.isCreatedMode ? 'Create' : 'Update';
  }

  isAutoUpdate(): boolean {
    return this.autoUpdateGroupValue === 'auto';
  }
}
