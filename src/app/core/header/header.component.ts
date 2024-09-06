import { Component } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  configuration: string = "init";

  constructor(private configurationService: ConfigurationService) {
    this.configurationService.getConfigurations().subscribe(x => {
      this.configuration = x.name;
    }, error => {
      this.configuration = error;
    });
  }
}
